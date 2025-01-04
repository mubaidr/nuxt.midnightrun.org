import path from "path"

const IS_DEV = process.env.NODE_ENV === "development"

export default defineNuxtConfig({
  alias: {
    "~~": path.resolve(__dirname, "./"),
    "~": path.resolve(__dirname, "./"),
    app: path.resolve(__dirname, "./app"),
    assets: path.resolve(__dirname, "./app/assets"),
    styles: path.resolve(__dirname, "./app/assets/styles"),
    database: path.resolve(__dirname, "./database"),
    server: path.resolve(__dirname, "./server"),
    public: path.resolve(__dirname, "./public"),
    test: path.resolve(__dirname, "./test"),
  },
  // app: {
  //   head: {
  //     link: [
  //       { rel: "dns-prefetch", href: "https://fonts.bunny.net/" },
  //       { rel: "preconnect", href: "https://fonts.bunny.net/" },
  //       { rel: "preconnect", href: "https://fonts.bunny.net/", crossorigin: "" },
  //       {
  //         rel: "stylesheet",
  //         href: "https://fonts.bunny.net/css?family=Inter:400,600,900|Lora:400,600&display=swap",
  //       },
  //       { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  //     ],
  //   },
  // },
  compatibilityDate: "2025-01-01",
  components: {
    dirs: ["app/components/"],
  },
  css: ["app/assets/global.scss"],
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
    storage: "cookie",
  },
  content: {},
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    debug: process.env.NODE_ENV === "development",
    mode: "mount",
  },
  devtools: {
    enabled: IS_DEV,

    timeline: {
      enabled: true,
    },
  },
  experimental: {
    asyncContext: true,
    typedPages: true,
    viewTransition: true,
  },
  eslint: {
    checker: false,
    config: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  i18n: {
    baseUrl: process.env.BASE_URL,
    strategy: "no_prefix",
    vueI18n: "app/plugins/vue-i18n/vue-i18n.ts",
    // Don't forget to update the extract-i18n-script
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        file: "en-US.json",
        isCatchallLocale: true,
      },
      { code: "de-DE", iso: "de-DE", file: "de-DE.json" },
    ],
    defaultLocale: "en-US",
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieDomain: null,
      cookieKey: "i18n_redirected",
      alwaysRedirect: false,
      fallbackLocale: "en-US",
      cookieSecure: true,
    },
  },
  icon: {
    size: "20px",
    collections: ["ph"],
  },
  image: {
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
      "2xl": 1440,
    },
  },
  imports: {
    autoImport: true,
    dirs: [
      "app/composables/**",
      "app/stores/**",
      "app/utils/**",
      "server/utils/**",
    ],
    addons: {
      vueTemplate: true,
    },
  },
  lodash: {
    prefix: "_",
  },
  modules: [
    "@nuxt/content",
    "@nuxt/devtools",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxthq/studio",
    "@nuxtjs/i18n",
    "@nuxtjs/robots",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-auth-utils",
    "nuxt-delay-hydration",
    "nuxt-lodash",
    "nuxt-security",
  ],
  nitro: {
    compressPublicAssets: true,
    publicAssets: IS_DEV
      ? []
      : [
          {
            baseURL: "/_nuxt",
            maxAge: 31536000,
            dir: "~/.nuxt/dist/client/_nuxt",
          },
        ],
    timing: IS_DEV,
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  runtimeConfig: {
    nuxtSessionPassword: process.env.NUXT_SESSION_PASSWORD,
    dbUrl: process.env.DB_URL,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: parseInt(process.env.SMTP_PORT || "1025", 10),
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    smtpDefaultsFrom: process.env.SMTP_DEFAULTS_FROM,
    public: {
      appHost: process.env.APP_HOST,
      smtpDefaultsFrom: process.env.SMTP_DEFAULTS_FROM,
    },
  },
  robots: {
    groups: [
      {
        userAgent: "*",
        disallow: "/*?*",
        allow: "/",
      },
    ],
  },
  routeRules: {
    "/": {
      prerender: true,
    },
    "/about": {
      prerender: true,
    },
    "/contact": {
      prerender: true,
    },
    "/faqs": {
      prerender: true,
    },
    "/help": {
      prerender: true,
    },
    "/login": {
      prerender: true,
    },
    "/privacy-policy": {
      prerender: true,
    },
    "/register": {
      prerender: true,
    },
    "/terms-of-service": {
      prerender: true,
    },
  },
  security: {
    headers: {
      crossOriginResourcePolicy: "cross-origin",
      crossOriginEmbedderPolicy: "unsafe-none",
      contentSecurityPolicy: {
        "base-uri": ["'self'"],
        "font-src": ["'self'", "https:", "data:"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "img-src": ["*", "'self'", "data:"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "upgrade-insecure-requests": true,
        "script-src": [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "'wasm-unsafe-eval'",
          "data:",
          "blob:",
        ],
      },
      originAgentCluster: "?1",
      referrerPolicy: "no-referrer",
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true,
      },
      xContentTypeOptions: "nosniff",
      xDNSPrefetchControl: "off",
      xDownloadOptions: "noopen",
      xFrameOptions: "SAMEORIGIN",
      xPermittedCrossDomainPolicies: "none",
      xXSSProtection: "0",
      permissionsPolicy: {
        camera: [],
        "display-capture": [],
        fullscreen: [],
        geolocation: [],
        microphone: [],
      },
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 50 * 1024 * 1024, // 50mb
      maxUploadFileRequestInBytes: 50 * 1024 * 1024, // 50mb
    },
    rateLimiter: { tokensPerInterval: 500, interval: 500000, throwError: true },
    xssValidator: false,
    corsHandler: {
      origin: "*",
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      preflight: { statusCode: 204 },
    },
    allowedMethodsRestricter: { methods: "*" },
    hidePoweredBy: false,
    basicAuth: false,
    enabled: !IS_DEV,
    csrf: true,
  },
  ssr: true,
  studio: {
    gitInfo: {
      name: "nuxt.midnightrun.org",
      owner: "mubaidr",
      url: "https://github.com/mubaidr/nuxt.midnightrun.org",
    },
  },
  tailwindcss: {
    editorSupport: true,
    viewer: true,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strictNullChecks: true,
      },
      exclude: ["./.generated/**/*"],
    },
    typeCheck: "build",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
})
