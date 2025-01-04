<script lang="ts" setup>
const { fetch: refreshSession } = useUserSession()
const toast = useToast()

async function logout() {
  try {
    await $fetch("/api/logout", {
      method: "POST",
    })

    await refreshSession()

    toast.add({
      title: "You have been succesfully loggged out!",
    })

    setTimeout(() => {
      navigateTo({
        path: "/",
      })
    }, 250)
  } catch (err) {
    console.error(err)
    toast.add({
      title: "Error",
      description: err as string,
    })
  }
}

logout()
</script>

<template>
  <div>Logging out...</div>
</template>
