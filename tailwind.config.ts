import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none", // Removes the max-width from prose
          },
        },
      },
    },
  },
};
