<script setup lang="ts">
import { computed, ref } from 'vue'
import AtButton from './AtButton.vue'
import AtCheckbox from './AtCheckbox.vue'
import AtField from './AtField.vue'
import AtInput from './AtInput.vue'
import { useId } from '../composables/useId'

const username = defineModel<string>('username', { default: '' })
const password = defineModel<string>('password', { default: '' })
const remember = defineModel<boolean>('remember', { default: false })

const props = withDefaults(defineProps<{
  /** Nom de l'app ou du domaine, affiché au-dessus de la carte. */
  brand?: string
  /** Lettre de la pastille de marque ; par défaut, la première lettre de `brand`. */
  mark?: string
  title?: string
  description?: string
  /** Message d'échec, annoncé aux lecteurs d'écran. */
  error?: string
  /** Connexion en cours : `true` ou `'password'` pour le mot de passe, `'passkey'` pour la passkey. */
  loading?: boolean | 'password' | 'passkey'
  /** Affiche le bouton de connexion par passkey (émet `passkey`). */
  passkey?: boolean
  /** Affiche la case « Rester connecté » (`v-model:remember`). */
  rememberable?: boolean
  usernameLabel?: string
  passwordLabel?: string
  submitLabel?: string
  passkeyLabel?: string
  rememberLabel?: string
  /** Élément racine : `main` pour une page de connexion, `div` pour l'insérer ailleurs. */
  as?: string
}>(), {
  as: 'main',
  title: 'Connexion',
  loading: false,
  usernameLabel: 'Identifiant',
  passwordLabel: 'Mot de passe',
  submitLabel: 'Se connecter',
  passkeyLabel: 'Se connecter avec une passkey',
  rememberLabel: 'Rester connecté'
})

const emit = defineEmits<{
  submit: [credentials: { username: string; password: string; remember: boolean }]
  passkey: []
}>()

const titleId = useId('login')
const busy = computed(() => props.loading !== false)
const markLetter = computed(() => (props.mark ?? props.brand?.trim().charAt(0) ?? '').toUpperCase())

const usernameInput = ref<InstanceType<typeof AtInput>>()
const passwordInput = ref<InstanceType<typeof AtInput>>()

function onSubmit() {
  if (busy.value) return
  if (!username.value.trim()) return usernameInput.value?.focus()
  if (!password.value) return passwordInput.value?.focus()
  emit('submit', { username: username.value.trim(), password: password.value, remember: remember.value })
}

defineExpose({
  focusUsername: () => usernameInput.value?.focus(),
  focusPassword: () => passwordInput.value?.focus()
})
</script>

<template>
  <component :is="as" class="at-login">
    <div class="at-login__panel">
      <div v-if="brand || $slots.brand" class="at-login__brand">
        <slot name="brand">
          <span class="at-workspace__mark" aria-hidden="true">{{ markLetter }}</span>{{ brand }}
        </slot>
      </div>

      <section class="at-login__card" :aria-labelledby="titleId">
        <header class="at-login__head">
          <h1 :id="titleId" class="at-login__title">{{ title }}</h1>
          <p v-if="description" class="at-login__desc">{{ description }}</p>
        </header>

        <p v-if="error" class="at-login__error" role="alert">{{ error }}</p>

        <slot>
          <form class="at-login__form" novalidate @submit.prevent="onSubmit">
            <AtField v-slot="f" :label="usernameLabel">
              <AtInput
                :id="f.id"
                ref="usernameInput"
                v-model="username"
                name="username"
                autocomplete="username"
                autocapitalize="none"
                spellcheck="false"
                :disabled="busy"
                :invalid="!!error"
              />
            </AtField>
            <AtField v-slot="f" :label="passwordLabel">
              <AtInput
                :id="f.id"
                ref="passwordInput"
                v-model="password"
                type="password"
                name="password"
                autocomplete="current-password"
                :disabled="busy"
                :invalid="!!error"
              />
            </AtField>
            <AtCheckbox v-if="rememberable" v-model="remember" :label="rememberLabel" :disabled="busy" />
            <AtButton
              type="submit"
              variant="primary"
              size="lg"
              class="at-login__submit"
              :loading="loading === true || loading === 'password'"
              :disabled="busy"
            >
              {{ submitLabel }}
            </AtButton>
          </form>

          <template v-if="passkey">
            <div class="at-login__or" role="separator"><span>ou</span></div>
            <AtButton
              size="lg"
              icon="key"
              class="at-login__submit"
              :loading="loading === 'passkey'"
              :disabled="busy"
              @click="emit('passkey')"
            >
              {{ passkeyLabel }}
            </AtButton>
          </template>
        </slot>
      </section>

      <footer v-if="$slots.footer" class="at-login__foot"><slot name="footer" /></footer>
    </div>
  </component>
</template>
