<script setup lang="ts">
import type { VerticalNavigationLink } from "#ui/types"

const route = useRoute()
const { id } = route.params as { id: string }

const applicationWizardStore = useApplicationWizardStore()

const links: VerticalNavigationLink[][] = [
  [
    {
      label: "Profile",
      icon: "i-ph-user",
      to: `/vacancy/${id}/profile`,
    },
    {
      label: "Academics",
      icon: "i-ph-graduation-cap",
      to: `/vacancy/${id}/academic`,
    },
    {
      label: "Courses",
      icon: "i-ph-certificate",
      to: `/vacancy/${id}/course`,
    },
    {
      label: "Work Experience",
      icon: "i-ph-building-office",
      to: `/vacancy/${id}/experience`,
    },
    {
      label: "Publications",
      icon: "i-ph-article",
      to: `/vacancy/${id}/publication`,
    },
    {
      label: "Apply",
      icon: "i-ph-paper-plane-right",
      to: `/vacancy/${id}/apply`,
    },
  ],
]
</script>

<template>
  <div>
    <AppHeader />

    <div class="mx-auto min-h-[42rem] max-w-screen-xl p-6 md:p-12">
      <div
        class="flex min-h-[48px] justify-between gap-2 rounded-md bg-stone-50 md:justify-center"
      >
        <UButton
          label="Previous"
          leading-icon="i-ph-arrow-left"
          variant="ghost"
          color="primary"
          class="min-w-28 justify-center rounded-md"
        ></UButton>

        <UHorizontalNavigation
          :links="links"
          class="mx-auto hidden w-auto md:flex"
          style="font-weight: lighter !important; font-size: smaller !important"
        />

        <UButton
          label="Next"
          trailing-icon="i-ph-arrow-right"
          variant="ghost"
          color="primary"
          class="min-w-28 justify-center rounded-md"
        ></UButton>
      </div>

      <div class="mt-12">
        <slot />
      </div>
    </div>

    <AppFooter />
  </div>
</template>
