<script setup lang="ts">
import type { DropdownItem } from "#ui/types"
const { loggedIn } = useUserSession()

const links: Array<Array<DropdownItem>> = [
  [
    {
      label: "Current Jobs",
      to: "/vacancy",
      activeClass: "text-primary",
    },
    {
      label: "About",
      to: "/about",
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
  <div class="bg-stone-50 dark:bg-stone-950">
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
            class="h-10 w-10"
          />
          <span class="text-xl font-bold">HRD1902</span>
        </NuxtLink>
      </div>

      <!-- Middle: Links (Hidden on mobile, visible on md and larger) -->
      <div class="hidden space-x-2 md:flex">
        <UButton
          v-for="link in links.flat()"
          :key="link.label"
          :to="link.to"
          variant="ghost"
          :label="link.label"
        />

        <UButton
          v-if="!loggedIn"
          label="Apply Now"
          icon="i-ph-arrow-right"
          trailing
          color="primary"
          to="/login"
          variant="outline"
        />
      </div>

      <!-- Right: Login/Signup -->
      <div class="flex space-x-2 md:flex">
        <div class="md:hidden">
          <UButton
            v-if="!loggedIn"
            label="Apply Now"
            icon="i-ph-arrow-right"
            trailing
            color="primary"
            to="/login"
            variant="outline"
          />
        </div>

        <ThemeSwitch />
        <LocaleSwitch />

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
  </div>
</template>
