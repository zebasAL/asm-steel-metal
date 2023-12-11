import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
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
        primary: { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12", "950": "#422006" }
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
