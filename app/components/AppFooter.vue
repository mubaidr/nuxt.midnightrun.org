<script setup lang="ts">
const links = [
  {
    // label: "Resources",
    children: [
      {
        label: "Our Story",
        to: "/our-story",
      },
      {
        label: "How It Works",
        to: "/how-it-works",
      },
      {
        label: "Our Policies",
        to: "/our-policies",
      },
    ],
  },
  {
    // label: "Company",
    children: [
      {
        label: "Contribute",
        to: "/contribute",
      },
      {
        label: "Staff/ Board",
        to: "/staff",
      },
      {
        label: "Street Resources",
        to: "/street-resources",
      },
    ],
  },
]

const toast = useToast()

const email = ref("")
const loading = ref(false)

function onSubmit() {
  loading.value = true

  setTimeout(() => {
    toast.add({
      title: "Subscribed!",
      description: "You've been subscribed to our newsletter.",
    })

    loading.value = false
  }, 1000)
}
</script>

<template>
  <footer
    class="mx-auto max-w-screen-xl px-6 pb-6 text-gray-700 md:px-12 dark:text-gray-200"
  >
    <UDivider />
    <div class="flex flex-col justify-between gap-2 md:flex-row">
      <div
        v-for="section in links"
        :key="section.label"
      >
        <h3 class="my-6 font-semibold">
          {{ section.label }}
        </h3>

        <ul
          role="list"
          class="space-y-2"
        >
          <li
            v-for="link in section.children"
            :key="link.label"
          >
            <NuxtLink :to="link.to">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <form
        class="my-6"
        @submit.prevent="onSubmit"
      >
        <UFormGroup label="Subscribe to our newsletter">
          <UInput
            v-model="email"
            type="email"
            placeholder="abc@xyz.com"
            :ui="{
              icon: {
                trailing: {
                  pointer: '',
                },
              },
            }"
            required
          >
            <template #trailing>
              <UButton
                type="submit"
                size="xs"
                color="primary"
                :label="loading ? 'Subscribing' : 'Subscribe'"
                :loading="loading"
                variant="ghost"
              />
            </template>
          </UInput>
        </UFormGroup>
      </form>
    </div>
  </footer>
</template>
