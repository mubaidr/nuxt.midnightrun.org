<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

const { fetch: refreshSession } = useUserSession()
const route = useRoute()
const toast = useToast()
const pending = ref(false)

const schema = z.object({
  email: z.string().email("Must be a valid email"),
  password: z.string().min(8, "Password should be minimum 8 characters"),
  confirmPassword: z.string().min(8, "Password should be minimum 8 characters"),
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: "0test@test.com",
  password: "0test@test.com",
  confirmPassword: "0test@test.com",
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    pending.value = true

    await $fetch("/api/register", {
      method: "POST",
      body: event.data,
    })

    await refreshSession()

    toast.add({
      title: "Your account has been created succesfully!",
    })

    navigateTo({
      path: (route.query.redirect as string) || "/",
    })
  } catch (err) {
    console.error(err)
    toast.add({
      color: "red",
      title: "Error",
      description: err as string,
    })
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
      <h1 class="text-3xl font-semibold">Create Account</h1>
      <p>Please enter your email and password to continue</p>
    </div>

    <!-- <AuthSocialAccounts />

    <UDivider
      label="or"
      class="my-6"
    />
    -->

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

      <UFormGroup
        label="Confirm Password"
        name="confirmPassword"
      >
        <UInput
          v-model="state.confirmPassword"
          type="confirm password"
          placeholder="password"
          icon="i-ph-password"
        />
      </UFormGroup>

      <UButton
        type="submit"
        label="Create Account"
        block
        :loading="pending"
      />
    </UForm>

    <br />

    <p>
      Already have an account?
      <UButton
        to="/login"
        variant="link"
        label="Login"
      />
    </p>
  </UCard>
</template>
