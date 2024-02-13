import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        main: "#9176ae",
        "main-shade": "#603F8B",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, rgba(143,116,173,1) 0%, rgba(96,63,139,1) 200%)",
      },
    },
  },
  plugins: [],
};
export default config;
