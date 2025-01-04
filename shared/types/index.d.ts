import "#app"

declare module "#app" {
  // interface NuxtApp {}

  interface PageMeta {
    auth?:
      | undefined
      | boolean
      | {
          unauthenticatedOnly: boolean
          navigateAuthenticatedTo: string
        }
  }
}
