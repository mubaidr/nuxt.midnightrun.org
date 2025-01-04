<script setup lang="ts">
onMounted(() => {
  setTimeout(() => {
    navigateTo({ path: "/" })
  }, 5000)
})
</script>

<template>
  <div
    class="fill-height"
    align="center"
    justify="center"
  >
    <div
      xs="8"
      sm="8"
      md="6"
      lg="4"
    >
      <VAlert
        :prominent="true"
        type="success"
        title="Email verified successfully!"
      >
        You will be redirected to homepage in few moments

        <p class="text-caption mt-4">
          If you are not redirected to the homepage,
          <NuxtLink
            to="/"
            :prefetch="true"
          >
            Click Here
          </NuxtLink>
          to visit the home page now.
        </p>
      </VAlert>
    </div>
  </div>
</template>
