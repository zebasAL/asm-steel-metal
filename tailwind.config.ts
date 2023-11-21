import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
// import { screens } from "./src/theme/breakpoints"

export default {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    // screens: screens,
    extend: {
      colors: {
        primary: {"50":"#fefce8","100":"#fef9c3","200":"#fef08a","300":"#fde047","400":"#facc15","500":"#eab308","600":"#ca8a04","700":"#a16207","800":"#854d0e","900":"#713f12","950":"#422006"}
      },
      fontFamily: {
        sans: ["Noto Sans", ...fontFamily.sans],
        body: [
          'Noto Sans', 
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
        ]
      },
    },
  },
  plugins: [],
} satisfies Config;
