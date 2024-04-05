import plugin from "tailwindcss/plugin"

export const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "hsl(0 0% 100%)",
        "--foreground": "hsl(240 10% 3.9%)",

        "--card": "hsl(0 0% 100%)",
        "--card-foreground": "hsl(240 10% 3.9%)",

        "--popover": "hsl(0 0% 100%)",
        "--popover-foreground": "hsl(240 10% 3.9%)",

        "--primary": "hsl(142.1 76.2% 36.3%)",
        "--primary-foreground": "hsl(355.7 100% 97.3%)",
        "--secondary": "hsl(240 4.8% 95.9%)",
        "--secondary-foreground": "hsl(240 5.9% 10%)",

        "--muted": "hsl(240 4.8% 95.9%)",
        "--muted-foreground": "hsl(240 3.8% 46.1%)",

        "--accent": "hsl(240 4.8% 95.9%)",
        "--accent-foreground": "hsl(240 5.9% 10%)",

        "--destructive": "hsl(0 84.2% 60.2%)",
        "--destructive-foreground": "hsl(0 0% 98%)",

        "--border": "hsl(240 5.9% 90%)",
        "--input": "hsl(240 5.9% 90%)",
        "--ring": "hsl(142.1 76.2% 36.3%)",
        "--radius": "hsl(0.5rem)",
      },
      ".dark": {
        "--background": "hsl(20 14.3% 4.1%)",
        "--foreground": "hsl(0 0% 95%)",

        "--card": "hsl(24 9.8% 10%)",
        "--card-foreground": "hsl(0 0% 95%)",

        "--popover": "hsl(0 0% 9%)",
        "--popover-foreground": "hsl(0 0% 95%)",

        "--primary": "hsl(142.1 70.6% 45.3%)",
        "--primary-foreground": "hsl(144.9 80.4% 10%)",
        "--secondary": "hsl(240 3.7% 15.9%)",
        "--secondary-foreground": "hsl(0 0% 98%)",

        "--muted": "hsl(0 0% 15%)",
        "--muted-foreground": "hsl(240 5% 64.9%)",

        "--accent": "hsl(12 6.5% 15.1%)",
        "--accent-foreground": "hsl(0 0% 98%)",

        "--destructive": "hsl(0 62.8% 30.6%)",
        "--destructive-foreground": "hsl(0 85.7% 97.3%)",
        
        "--border": "hsl(240 3.7% 15.9%)",
        "--input": "hsl(240 3.7% 15.9%)",
        "--ring": "hsl(142.4 71.8% 29.2%)"
      }
    });
    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      }
    })
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px"
        }
      },
      extend: {
        colors: {
          border: "var(--border)",
          input: "var(--input)",
          ring: "var(--ring)",
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: {
            DEFAULT: "var(--primary)",
            foreground: "var(--primary-foreground)",
          },
          secondary: {
            DEFAULT: "var(--secondary)",
            foreground: "var(--secondary-foreground)",
          },
          destructive: {
            DEFAULT: "var(--destructive)",
            foreground: "var(--destructive-foreground)",
          },
          muted: {
            DEFAULT: "var(--muted)",
            foreground: "var(--muted-foreground)",
          },
          accent: {
            DEFAULT: "var(--accent)",
            foreground: "var(--accent-foreground)",
          },
          popover: {
            DEFAULT: "var(--popover)",
            foreground: "var(--popover-foreground)",
          },
          card: {
            DEFAULT: "var(--card)",
            foreground: "var(--card-foreground)",
          },
        },
        keyframes: {
          "accordion-down": {
            from: { height: '0' },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: '0' },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
);
