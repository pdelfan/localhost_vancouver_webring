/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0001FF",
        },
        secondary: {
          DEFAULT: "#FFBA28",
        },
      },
      backgroundColor: {
        skin: {
          base: "#110904",
          secondary: "#1A1F22",
          button: {
            base: "#F8F9FA",
            secondary: "#2F363E",
          },
        },
      },
      textColor: {
        skin: {
          base: "#ADBBAA",
          link: "#FFBA28",
          button: {
            base: "#333333",
            secondary: "#FFFFFF",
          },
        },
      },
    },
  },
  plugins: [],
};
