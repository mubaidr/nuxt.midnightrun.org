<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"
import { navigateTo } from "#app"

const toast = useToast()
const pending = ref(false)

const schema = z.object({
  password: z.string().min(8, "Password should be minimum 8 characters"),
  newPassword: z.string().min(8, "Password should be minimum 8 characters"),
  ConfirmNewPassword: z
    .string()
    .min(8, "Password should be minimum 8 characters"),
})

type Schema = z.output<typeof schema>

const state = reactive({
  password: "0test@test.com",
  newPassword: "0test@test.com",
  confirmNewPassword: "0test@test.com",
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    pending.value = true

    await $fetch("/api/change-password", {
      method: "POST",
      body: event.data,
    })

    toast.add({
      title: "Success!",
    })

    setTimeout(() => {
      return navigateTo({
        path: "/",
      })
    }, 250)
  } catch (err) {
    console.error(err)
    toast.add({
      title: "Error",
      description: err as string,
    })
  } finally {
    pending.value = false
  }
}

definePageMeta({
  auth: true,
})
</script>

<template>
  <UCard class="mx-auto max-w-lg p-6 md:my-16">
    <div class="mb-6">
      <h1 class="text-3xl font-semibold">Change Password</h1>
      <p>Please enter your current and new password to continue</p>
    </div>

    <UForm
      :state="state"
      :schema="schema"
      @submit.prevent="onSubmit"
    >
      <UFormGroup
        label="Password"
        name="password"
      >
        <UInput
          v-model="state.password"
          type="password"
          placeholder="abc@xyz.com"
          icon="i-ph-envelope"
        />
      </UFormGroup>

      <UFormGroup
        label="New Password"
        name="newPassword"
      >
        <UInput
          v-model="state.newPassword"
          type="password"
          placeholder="new password"
          icon="i-ph-password"
        />
      </UFormGroup>

      <UFormGroup
        label="Confirm New Password"
        name="confirmNewPassword"
      >
        <UInput
          v-model="state.confirmNewPassword"
          type="password"
          placeholder="new password"
          icon="i-ph-password"
        />
      </UFormGroup>

      <UButton
        type="submit"
        label="Update Password"
        block
        :loading="pending"
      />
    </UForm>
  </UCard>
</template>
