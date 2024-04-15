import type { Config  } from "tailwindcss";

import { shadcnPlugin } from "./shadcn-plugin"
import animatePlugin from "tailwindcss-animate"
import typography from "@tailwindcss/typography";

export const shadcnPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [shadcnPlugin, animatePlugin, typography],
} satisfies Config
