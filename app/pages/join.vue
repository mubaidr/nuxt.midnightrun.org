<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

const toast = useToast()
const pending = ref(false)

const schema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().optional(),
  email: z.string().email("Must be a valid email"),
  contactNumber: z.string().optional(),
  volunteer: z.boolean(),
})

type Schema = z.output<typeof schema>

const state = reactive({
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  volunteer: true,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    pending.value = true

    await $fetch("/api/join", {
      method: "POST",
      body: event.data,
    })

    toast.add({
      title: "Your message has been received!",
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
  auth: false,
})
</script>

<template>
  <UCard class="mx-auto max-w-lg p-6 md:my-16">
    <div class="mb-6">
      <h1 class="text-3xl font-semibold">Join Us</h1>
      <p>
        Please fill in the requested information below and we'll reach back out
        to you in no time!
      </p>
      <br />
      <p class="text-neutral-700">
        If you have any issues or have questions, you can also contact
        <a href="mailto: dale@midnightrun.org">dale@midnightrun.org</a>
      </p>
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
        label="First Name"
        name="firstName"
      >
        <UInput
          v-model="state.firstName"
          type="text"
          placeholder="First Name"
        />
      </UFormGroup>

      <UFormGroup
        label="Last Name"
        name="lastName"
      >
        <UInput
          v-model="state.lastName"
          type="text"
          placeholder="Last Name"
        />
      </UFormGroup>

      <UFormGroup
        label="Email"
        name="email"
      >
        <UInput
          v-model="state.email"
          type="email"
          placeholder="abc@xyz.com"
        />
      </UFormGroup>

      <UFormGroup
        label="Contact Number"
        name="contactNumber"
      >
        <UInput
          v-model="state.contactNumber"
          type="text"
          placeholder="Contact Number"
        />
      </UFormGroup>

      <UFormGroup
        name="selectMenu"
        label="Select Menu"
      >
        <USelectMenu
          v-model="state.volunteer"
          placeholder="Select..."
          :options="[
            { label: 'In need of services', value: false },
            { label: 'Want to be volunteer', value: true },
          ]"
        />
      </UFormGroup>

      <UButton
        type="submit"
        color="primary"
        label="Submit"
        block
        :loading="pending"
        icon="ph-paper-plane-tilt"
      />
    </UForm>

    <br />

    <div class="flex justify-center gap-2">
      <UButton to="/our-policies">Our Polices</UButton>
      <UButton to="/our-story">Our Story</UButton>
    </div>
  </UCard>
</template>
