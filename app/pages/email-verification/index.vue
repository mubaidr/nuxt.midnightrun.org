<script lang="ts" setup>
const { public: publicConfig } = useRuntimeConfig()
const { smtpDefaultsFrom } = publicConfig
const { user } = useUserSession()

const pending = ref(false)
const error = ref<Error | null>()
const emailSent = ref(false)

async function resendVerificationEmail() {
  pending.value = true

  $fetch("/api/email-verification", {
    method: "POST",
    redirect: "manual",
  })
    .then(() => {
      emailSent.value = true
    })
    .catch((err) => {
      alert(err)
    })
    .finally(() => {
      pending.value = false
    })
}

if (user.value?.emailVerified) {
  await navigateTo({ path: "/" })
}
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
      <template v-if="emailSent">
        <VAlert
          :prominent="true"
          type="info"
          title="Email sent successfully!"
        >
          Please click the link in the email to verify your address.
        </VAlert>

        <div class="mt-8 text-center">
          <p class="text-caption mt-4">
            If you don't see the email in your inbox, please check your spam
            folder. You can also add the following email address to your safe
            senders list:
          </p>

          <p class="mt-2">{{ smtpDefaultsFrom }}</p>
        </div>
      </template>
      <template v-else>
        <div>
          <div class="p-12">
            <div class="mb-6">
              <h1 class="text-h4">Verify your email address</h1>
              <p>
                Please verify your email address by clicking on the link in the
                email we sent you. If you didn't receive the email, you can
                resend it by clicking the link below.
              </p>
            </div>

            <VAlert
              v-if="error"
              class="mb-4"
            >
              {{ error.message }}
            </VAlert>

            <div class="flex">
              <hr />
              <UButton
                :loading="pending"
                class="mx-auto"
                @click="resendVerificationEmail"
              >
                Resend verification email
              </UButton>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
