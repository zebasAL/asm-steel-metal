import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '0px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      before: {
        line: {
          '&::before': {
            content: '""',
            height: '2px',
            bottom: '-1px',
            zIndex: '11',
            width: '100%',
            position: 'absolute',
            backgroundColor: '#1f2936', // Reemplaza con tu color gris[900]
          },
        },
      },
      colors: {
        primary: {
          main: '#191944',
          light: '#394077',
          lighter: '#576094',
          dark: '#0f0a28',
          darker: '#050318',
        },
        secondary: {
          main: '#191944',
          light: '#394077',
          lighter: '#576094',
          dark: '#0f0a28',
          darker: '#050318',
        }
      },
      fontFamily: {
        sans: ["Noto Sans", ...fontFamily.sans],
        body: [
          'Font Sans',
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
})
