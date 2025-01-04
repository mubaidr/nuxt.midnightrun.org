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
        Your password has been updated succesfully.
      </template>
    </UAlert>

    <p class="mt-4 text-center text-sm font-light">
      You will be redirected to home page in few moments...
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
