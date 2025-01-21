<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

const { fetch: refreshSession } = useUserSession()
const route = useRoute()
const pending = ref(false)

const schema = z.object({
  email: z.string().email("Must be a valid email"),
  password: z.string().min(8, "Password should be minimum 8 characters"),
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: "0test@test.com",
  password: "0test@test.com",
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    pending.value = true

    await $fetch("/api/login", {
      method: "POST",
      body: event.data,
    })

    await refreshSession()

    return navigateTo({
      path: (route.query.redirect as string) || "/",
    })
  } catch (err) {
    console.error(err)
  } finally {
    pending.value = false
  }
}

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
  },
})
</script>

<template>
  <UCard class="mx-auto max-w-lg p-6 md:my-16">
    <div class="mb-6">
      <h1 class="text-3xl font-semibold">Login</h1>
      <p>Please enter your email and password to continue</p>
    </div>

    <!-- <AuthSocialAccounts />

    <UDivider
      label="or"
      class="my-6"
    /> -->

    <UForm
      :state="state"
      :schema="schema"
      @submit.prevent="onSubmit"
    >
      <UFormGroup
        label="Email"
        name="email"
      >
        <UInput
          v-model="state.email"
          type="email"
          placeholder="abc@xyz.com"
          icon="i-ph-envelope"
        />
      </UFormGroup>

      <UFormGroup
        label="Password"
        name="password"
      >
        <UInput
          v-model="state.password"
          type="password"
          placeholder="password"
          icon="i-ph-password"
        />
      </UFormGroup>

      <UButton
        type="submit"
        label="Login"
        color="primary"
        block
        :loading="pending"
      />
    </UForm>

    <br />

    <p>
      Forgot password?
      <UButton
        to="/password-reset"
        label="Recover Your Account"
        variant="link"
      />
    </p>

    <p>
      Don't have an account?
      <UButton
        to="/register"
        variant="link"
        label="Register"
      />
    </p>
  </UCard>
</template>
