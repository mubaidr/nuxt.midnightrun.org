declare module "#auth-utils" {
  interface User {
    // Add your own fields
    id: number
    email: string
    emailVerified: boolean
  }

  // interface UserSession {
  //   // Add your own fields, along with existing user
  //   // user: {}
  // }
}

export {}
