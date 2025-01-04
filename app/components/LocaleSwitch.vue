<script setup lang="ts">
const { setLocale } = useI18n()
</script>

<template>
  <ClientOnly>
    <UDropdown
      :items="[
        [
          {
            label: 'English',
            click: () => {
              setLocale('en')
            },
          },
          {
            label: 'Urdu',
            click: () => {
              setLocale('ur')
            },
          },
        ],
      ]"
      :popper="{ placement: 'bottom-start' }"
    >
      <UButton
        variant="ghost"
        icon="i-ph-globe"
      />
    </UDropdown>

    <template #fallback>
      <div class="h-8 w-8" />
    </template>
  </ClientOnly>
</template>
