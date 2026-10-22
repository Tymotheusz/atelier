<template>
  <aside class="at-sidebar" aria-label="Navigation">
    <slot name="header" />
    <slot />
    <div v-if="$slots.footer" class="at-sidebar__foot"><slot name="footer" /></div>
  </aside>
</template>
