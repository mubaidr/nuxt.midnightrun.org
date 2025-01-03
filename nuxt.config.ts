import path from "path";

const isProd = process.env.NODE_ENV === "production";

export default defineNuxtConfig({
  alias: {
    "~~": path.resolve(__dirname, "./"),
    "~": path.resolve(__dirname, "./"),
    app: path.resolve(__dirname, "./app"),
    server: path.resolve(__dirname, "./server"),
    assets: path.resolve(__dirname, "./app/assets"),
    public: path.resolve(__dirname, "./public"),
    test: path.resolve(__dirname, "./test"),
  },
  app: {
    head: {
      link: [
        { rel: "dns-prefetch", href: "https://fonts.bunny.net/" },
        { rel: "preconnect", href: "https://fonts.bunny.net/" },
        { rel: "preconnect", href: "https://fonts.bunny.net/", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.bunny.net/css?family=Inter:400,600,900|Lora:400,600&display=swap",
        },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },
  compatibilityDate: "2025-01-01",
  css: ["app/assets/global.scss"],
  devtools: { enabled: !isProd },
  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },
  i18n: {
    baseUrl: process.env.BASE_URL,
    strategy: "no_prefix",
    vueI18n: "app/plugins/vue-i18n/vue-i18n.ts",
    // Don't forget to update the extract-i18n-script
    locales: [
      { code: "en-US", iso: "en-US", file: "en-US.json", isCatchallLocale: true },
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
    dirs: ["store"],
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "@pinia/nuxt",
    "nuxt-delay-hydration",
    "@nuxtjs/robots",
    "@nuxt/image",
    "nuxt-security",
    "@nuxt/devtools",
    "@nuxt/eslint",
  ],
  nitro: {
    compressPublicAssets: true,
    publicAssets: isProd
      ? [
          {
            baseURL: "/_nuxt",
            maxAge: 31536000,
            dir: "~/.nuxt/dist/client/_nuxt",
          },
        ]
      : [],
  },
  runtimeConfig: {
    public: {},
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
  routeRules: {},
  security: {
    headers: {
      crossOriginResourcePolicy: "cross-origin",
      crossOriginEmbedderPolicy: "unsafe-none",
      contentSecurityPolicy: {
        "base-uri": ["'self'"],
        "font-src": ["'self'", "https:", "data:", "fonts.bunny.net"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "img-src": ["*", "'self'", "data:", "https://d21tg1j9k9a9uf.cloudfront.net"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'", "fonts.bunny.net"],
        "upgrade-insecure-requests": true,
        "script-src": [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "'wasm-unsafe-eval'",
          "data:",
          "blob:",
          "https://storage.googleapis.com",
          "https://cdn.jsdelivr.net",
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
    hidePoweredBy: true,
    basicAuth: false,
    enabled: true,
    csrf: false,
  },
  ssr: true,
  // typescript: {},
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
