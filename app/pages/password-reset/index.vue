<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

const pending = ref(false)

const schema = z.object({
  email: z.string().email("Must be a valid email"),
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: "0test@test.com",
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    pending.value = true

    await $fetch("/api/password-reset", {
      method: "POST",
      body: event.data,
    })

    return navigateTo({
      path: "/password-reset/email",
    })
  } catch (err) {
    console.error(err)
  } finally {
    pending.value = false
  }
}

definePageMeta({
  auth: false,
})
</script>

<template>
  <UCard class="mx-auto max-w-lg p-6 md:my-16">
    <div class="mb-6">
      <h1 class="text-3xl font-semibold">Recover Your Account</h1>
      <p>Please enter your email to continue</p>
    </div>

    <UForm
      :state="state"
      :schema="schema"
      @submit.prevent="onSubmit"
    >
      <UFormGroup label="Email">
        <UInput
          v-model="state.email"
          type="email"
          placeholder="abc@xyz.com"
          icon="i-ph-envelope"
        />
      </UFormGroup>

      <UButton
        type="submit"
        label="Send Password Reset Email"
        block
        :loading="pending"
      />
    </UForm>

    <br />

    <div>
      Remember your password?
      <UButton
        to="/login"
        variant="link"
        label="Login"
      />
    </div>
  </UCard>
</template>
