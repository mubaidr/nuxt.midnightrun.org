<script lang="ts" setup>
const { user } = useUserSession()

definePageMeta({
  auth: true,
})
</script>

<template>
  <div class="prose dark:prose-invert">
    <h1>Account</h1>
    <p></p>

    <h2>Email Address</h2>
    <p>
      Your email is
      <span class="font-semibold">{{ user?.email }}</span>
    </p>

    <h2>Password</h2>
    <p>
      Want to change your password?
      <UButton
        to="/change-password"
        label="Update Your Password"
        variant="link"
      />
    </p>
    <p>
      Can't remember your current password?

      <UButton
        to="/password-reset"
        label="Reset Your Password"
        variant="link"
      />
    </p>

    <h2>Subscriptions</h2>
    <p>You have no active subscriptions.</p>
  </div>
</template>
