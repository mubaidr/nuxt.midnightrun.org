export default defineEventHandler(() => {
  return {
    service: "online",
  }
})

// TODO: replace with nested-routers and catch all api using nitro, which has same syntax
// https://nuxt.com/docs/guide/directory-structure/server#using-a-nested-router
