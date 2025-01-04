<script setup lang="ts"></script>

<template>
  <div>
    <AppHeader />

    <div class="mx-auto min-h-[42rem] max-w-screen-xl p-6 md:p-12">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>
