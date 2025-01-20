<script setup lang="ts">
import type { DropdownItem } from "#ui/types"
const { loggedIn } = useUserSession()

const links: Array<Array<DropdownItem>> = [
  [
    {
      label: "Our Story",
      to: "/our-story",
      activeClass: "text-primary",
    },
    {
      label: "How It Works",
      to: "/how-to-do-run",
      activeClass: "text-primary",
    },
    {
      label: "Contribute",
      to: "/contribute",
      activeClass: "text-primary",
    },
  ],
]

const authenticatedLinks: Array<Array<DropdownItem>> = [
  [
    {
      label: "My Account",
      to: "/account",
      activeClass: "text-primary",
    },
    {
      label: "Change Password",
      to: "/change-password",
      activeClass: "text-primary",
    },

    {
      label: "Logout",
      to: "/logout",
      activeClass: "text-primary",
    },
  ],
]

const dropdownLinks = computed<Array<Array<DropdownItem>>>(() => {
  if (!loggedIn.value) {
    return links
  }

  return links.concat(authenticatedLinks)
})
</script>

<template>
  <div class="bg-slate-50 dark:bg-slate-950">
    <nav
      class="mx-auto flex max-w-screen-xl items-center justify-between p-4 px-6 md:px-12"
    >
      <!-- Left: Logo + Site Name -->
      <div class="flex items-center space-x-2">
        <NuxtLink
          to="/"
          class="flex items-center gap-1"
        >
          <img
            src="/images/logo.png"
            alt="logo"
            class="h-16 w-auto"
          />
        </NuxtLink>
      </div>

      <!-- Right: Login/Signup -->
      <div class="flex space-x-2 md:flex">
        <!-- Middle: Links (Hidden on mobile, visible on md and larger) -->
        <div class="hidden space-x-2 md:flex">
          <UButton
            v-if="!loggedIn"
            label="Get Started"
            icon="i-ph-arrow-right"
            trailing
            color="primary"
            to="/login"
            variant="outline"
          />
          <UButton
            v-for="link in links.flat()"
            :key="link.label"
            :to="link.to"
            variant="ghost"
            :label="link.label"
          />
        </div>

        <div class="md:hidden">
          <UButton
            v-if="!loggedIn"
            label="Get Started"
            icon="i-ph-arrow-right"
            trailing
            color="primary"
            to="/login"
            variant="outline"
          />
        </div>

        <div
          v-if="loggedIn"
          class="hidden md:flex"
        >
          <UDropdown :items="authenticatedLinks">
            <UButton
              variant="ghost"
              icon="i-ph-list"
            />
          </UDropdown>
        </div>

        <!-- Mobile Menu Button (Visible on mobile only) -->
        <div class="md:hidden">
          <UDropdown :items="dropdownLinks">
            <UButton
              variant="ghost"
              icon="i-ph-list"
            />
          </UDropdown>
        </div>
      </div>
    </nav>
    <div
      class="h-1 bg-gradient-to-r from-purple-200 via-indigo-200 to-orange-200"
    ></div>
  </div>
</template>
