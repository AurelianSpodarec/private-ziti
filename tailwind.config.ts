import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['class'],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '320px', // iPhone SE, Samsung Galaxy A10
        sm: '640px', // iPhone 8, Samsung Galaxy S8
        md: '768px', // iPad, Samsung Galaxy Tab S6
        lg: '1024px', // iPad Pro, small laptops
        xl: '1280px', // Medium laptops
        '2xl': '1536px' // Larger laptops, like MacBook Pro 16"
      }
    },
    fontFamily: {
      serifpro: ['source-serif-pro'],
      poppins: ['Poppins']
    },
    extend: {
      colors: {
        // Define custom color names or override existing
        primary: '#3490dc', // Example color
        secondary: '#ffed4a', // Example color
        // Define dark theme specific colors
        dark: {
          background: '#1a202c',
          text: '#f7fafc',
          // more dark theme colors...
        },
        // Define light theme specific colors
        light: {
          background: '#ffffff',
          text: '#1a202c',
          // more light theme colors...
        },
      },
    }
  },
  plugins: [],
};
export default config;
