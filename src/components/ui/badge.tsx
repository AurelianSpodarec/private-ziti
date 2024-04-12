import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "text-white border-transparent bg-blackBlue-700",
        secondary: "text-black border",
        destructive: "border-transparent bg-destructiv",
        outline: "text-foreground",
      },
      kind: {
        solid: "",
        outline: "bg-transparent border border-current",
      },
      blur: {
        base: "backdrop-blur-sm"
      },
      opacity: {
        base: "bg-opacity-60",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  label?: string;
  icon?: any;
  iconPosition?: "left" | "right";
}

function Badge({ children, onClick, label, className, blur, variant, opacity, kind, iconPosition = "right", icon, ...props }: BadgeProps) {
  return (
    <div onClick={onClick} className={cn(badgeVariants({ variant, blur, opacity, kind }),
      `
      ${className} 
      inline-flex justify-center leading-4 items-center gap-2
      ${iconPosition === "right" ? "flex-row-reverse" : ""}
    `)} {...props}>

      {icon &&
        <div className="flex items-center max-h-4 max-w-4 h-4 w-4 select-none pointer-events-none wop">
          {icon}
        </div>
      }

      {children ? children : label}
    </div >
  )
}

export { Badge, badgeVariants }
