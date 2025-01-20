export default defineAppConfig({
  ui: {
    // base colors
    primary: "green",
    gray: "slate",
    // component defaults
    alert: {
      default: {
        icon: "i-ph-info",
        color: "primary",
      },
    },
    button: {
      rounded: "rounded-full",
      default: {
        size: "md",
        color: "gray",
        activeClass: "text-primary",
      },
    },
    card: {},
    carousel: {
      item: "basis-full",
      indicators: {
        active: "bg-slate-400 dark:bg-slate-600",
        inactive: "bg-slate-200 dark:bg-slate-800",
      },
      default: {
        prevButton: {
          icon: "i-ph-caret-left",
        },
        nextButton: {
          icon: "i-ph-caret-right",
        },
      },
    },
    formGroup: {
      container: "mb-4",
    },
    notifications: {
      position: "top-0 bottom-[unset]",
    },
    notification: {
      default: {
        color: "green",
        icon: "i-ph-check",
      },
    },
  },
})
