import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: '#53585E',
        customGrayLight: '#8C9EB6',       
        customMarineBlue: '#012959',
        customPurplishBlue: '#463dff',
        customPastelBlue: '#adbdfe',
        customLightBlue: '#bee2fd',
        customStrawberryRed: '#ed3547',
        customCoolGray: '#9699ab',
        customLightGray: '#d5d8e5',
        customMagnolia: '#eff5ff',
        customAlabaster: '#f9faff',
      },
    },
  },
  plugins: [],
};
export default config;
