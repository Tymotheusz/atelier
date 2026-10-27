<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import AtDropdown from './AtDropdown.vue'
import AtAvatar from './AtAvatar.vue'
import AtIcon from './AtIcon.vue'
import AtMenuItem from './AtMenuItem.vue'
import AtMenuLabel from './AtMenuLabel.vue'
import AtMenuSeparator from './AtMenuSeparator.vue'
import { useTheme, useDensity } from '../composables/useTheme'
import type { ThemeMode, Density } from '../types'

/**
 * Pied de sidebar : avatar en initiales, nom et e-mail. Le menu s'ouvre à droite et regroupe le compte
 * et les préférences (thème, densité), branchées sur useTheme / useDensity.
 * Les items Profil, Paramètres et Se déconnecter n'apparaissent que si leur événement est écouté.
 */
withDefaults(defineProps<{
  name: string
  email?: string
  src?: string
  theme?: boolean
  density?: boolean
}>(), { theme: true, density: true })
defineEmits<{ profile: []; settings: []; logout: [] }>()
defineSlots<{ default?: () => unknown }>()

const listens = getCurrentInstance()?.vnode.props ?? {}
const has = (e: string) => typeof listens[e] === 'function' || Array.isArray(listens[e])

const { mode } = useTheme()
const { density: dens } = useDensity()
const themes: { value: ThemeMode; label: string; icon: string }[] = [
  { value: 'system', label: 'Système', icon: 'monitor' },
  { value: 'light', label: 'Clair', icon: 'sun' },
  { value: 'dark', label: 'Sombre', icon: 'moon' }
]
const densities: { value: Density; label: string; icon: string }[] = [
  { value: 'comfortable', label: 'Confortable', icon: 'list' },
  { value: 'compact', label: 'Compacte', icon: 'menu' }
]
</script>

<template>
  <AtDropdown placement="right" :min-width="232">
    <template #trigger="{ toggle, open }">
      <button
        type="button" class="at-user" aria-haspopup="menu" :aria-expanded="open"
        :aria-label="`Compte de ${name}`" @click="toggle"
      >
        <AtAvatar :name="name" :src="src" size="md" tone="accent" />
        <span class="at-user__text">
          <span class="at-user__name">{{ name }}</span>
          <span v-if="email" class="at-user__sub">{{ email }}</span>
        </span>
        <AtIcon name="chevron-right" />
      </button>
    </template>

    <template v-if="has('onProfile') || has('onSettings') || $slots.default">
      <AtMenuItem v-if="has('onProfile')" icon="person" @select="$emit('profile')">Mon profil</AtMenuItem>
      <AtMenuItem v-if="has('onSettings')" icon="settings" @select="$emit('settings')">Paramètres</AtMenuItem>
      <slot />
      <AtMenuSeparator v-if="theme || density || has('onLogout')" />
    </template>

    <template v-if="theme">
      <AtMenuLabel>Thème</AtMenuLabel>
      <AtMenuItem v-for="t in themes" :key="t.value" :icon="t.icon" :checked="mode === t.value" @select="mode = t.value">{{ t.label }}</AtMenuItem>
    </template>
    <AtMenuSeparator v-if="theme && density" />
    <template v-if="density">
      <AtMenuLabel>Densité</AtMenuLabel>
      <AtMenuItem v-for="d in densities" :key="d.value" :icon="d.icon" :checked="dens === d.value" @select="dens = d.value">{{ d.label }}</AtMenuItem>
    </template>

    <template v-if="has('onLogout')">
      <AtMenuSeparator v-if="theme || density" />
      <AtMenuItem icon="logout" @select="$emit('logout')">Se déconnecter</AtMenuItem>
    </template>
  </AtDropdown>
</template>
