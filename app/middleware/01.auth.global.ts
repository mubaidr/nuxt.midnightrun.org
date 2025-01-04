export default defineNuxtRouteMiddleware(async (to) => {
  const { loggedIn, user, clear } = useUserSession()
  const auth = to.meta.auth as
    | undefined
    | boolean
    | {
        unauthenticatedOnly: boolean
        navigateAuthenticatedTo: string | undefined
      }

  if (auth === false) {
    return
  }

  if (auth === true || auth === undefined || auth === null) {
    if (loggedIn && user.value) {
      if (!user.value?.emailVerified) {
        if (!to.path.includes("/email-verification")) {
          return navigateTo({
            path: "/email-verification",
          })
        }

        return
      }

      return
    } else {
      await clear()

      return navigateTo({
        path: "/login",
        query: {
          redirect: to.path,
        },
      })
    }
  }

  // advance config
  const { unauthenticatedOnly, navigateAuthenticatedTo } = auth

  if (unauthenticatedOnly) {
    if (user.value) {
      return navigateTo({
        path: navigateAuthenticatedTo || "/",
      })
    }
  }
})
