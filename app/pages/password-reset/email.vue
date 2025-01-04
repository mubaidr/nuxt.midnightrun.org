<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
  },
})
</script>

<template>
  <div class="mx-auto max-w-md md:my-16">
    <UAlert
      color="green"
      variant="subtle"
      title="Success!"
    >
      <template #description>
        We have sent an email with instructions to reset your password.
      </template>
    </UAlert>

    <p class="mt-4 text-center text-sm font-light">
      If you don't see the email in your inbox, please check your spam folder.
      You can also add the following email address to your safe senders list:
      <span class="font-mono">support@hrd1902.com.pk</span>
    </p>

    <br />

    <div class="text-center">
      <UButton
        to="/"
        variant="link"
        label="Return to Home"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
