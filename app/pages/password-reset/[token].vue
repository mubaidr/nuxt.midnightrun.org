<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
  },
})

const route = useRoute()
const pending = ref(false)
const newPassword = ref<string>()
const newPasswordConfirm = ref<string>()
const showPassword = ref(false)
const passwordChangeSuccess = ref(false)
const error = ref<Error | null>()

const form = ref<HTMLFormElement>()

const rules = {
  async required(v: string) {
    return !!v || "Required"
  },
  async password(v: string) {
    const isPassword = /^(?=.*\d).{8,}$/.test(v)

    if (isPassword) {
      return true
    }

    return "Must be 8 or more characters and contain atleast 1 number."
  },
  async passwordMatch() {
    if (newPassword.value === newPasswordConfirm.value) {
      return true
    }

    return "Passwords does not match."
  },
}

async function submitAccount() {
  const { valid } = await (form.value as HTMLFormElement).validate()

  if (!valid) {
    return
  }

  pending.value = true

  $fetch(`/api/password-reset/${route.params.token}`, {
    method: "POST",
    body: {
      password: newPassword.value,
    },
    redirect: "manual",
  })
    .then(async () => {
      push.success({
        message: "Password changed successfully",
      })

      return navigateTo({ path: "/login" })
    })
    .catch((err) => {
      push.error({
        message: err,
      })
    })
    .finally(() => {
      pending.value = false
    })
}
</script>

<template>
  <UCard class="mx-auto max-w-lg p-6 md:my-16">
    <UFormGroup label="New Password">
      <UInput
        type="password"
        placeholder="New password"
        icon="i-ph-envelope"
      />
    </UFormGroup>

    <UFormGroup label="Confirm New Password">
      <UInput
        type="password"
        placeholder="New password"
        icon="i-ph-envelope"
      />
    </UFormGroup>

    <br />

    <UButton
      type="submit"
      label="Update Password"
      block
      color="primary"
      :loading="pending"
      @click="submitAccount"
    />

    <br />

    <div class="text-center">
      <UButton
        to="/"
        variant="link"
        label="Return to Home"
      />
    </div>
  </UCard>
</template>
