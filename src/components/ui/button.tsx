// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button"
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"

// export { Button, buttonVariants }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"


const buttonVariants = cva(
  "inline-flex items-center duration-75 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-text shadow-button border border-gray-400",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        warning: "bg-red-500 text-primary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-white",
        monochrome: "bg-black text-white border border-gray-900",
      },
      kind: {
        outline: "bg-transparent border border-current shadow-[0_0_0_1px_currentColor]",
        plain: "shadow-none bg-transparent border border-current px-2 py-1 text-sm",
        solid: "",
      },
      size: {
        slim: "text-sm",
        medium: "text-sm",
        large: "text-base",
      },
      fullWidth: {
        true: "w-full",
      },
      // disabled: {
      //   true: "bg-surfaceDisabled text-textDisabled",
      // },
    },
    compoundVariants: [
      // ======================================
      // Primary
      // ======================================
      {
        kind: "outline",
        variant: "primary",
        className: "text-primary",
      },
      {
        kind: "plain",
        variant: "primary",
        className: "text-primary",
      },
      // ======================================
      // Monochrome
      // ======================================
      {
        kind: "solid",
        size: "medium",
        variant: "monochrome",
        className: "hover:bg-[#262626]"
      },
      {
        kind: "outline",
        size: "medium",
        variant: "monochrome",
        className: "border border-black text-black hover:bg-gray-100"
      },
      // ======================================
      // Other
      // ======================================
      {
        kind: "outline",
        variant: "destructive",
        className: "text-destructive",
      },
      {
        kind: "outline",
        variant: "warning",
        className: "text-red-500",
      },
      {
        kind: "outline",
        size: "slim",
        className: "px-3 py-[3px]",
      },
      // Kins
      // ========================================
      {
        kind: "outline",
        size: "medium",
        className: "px-5 py-3",
      },
      {
        kind: "solid",
        size: "medium",
        className: "px-5 py-3",
      },
      {
        kind: "outline",
        size: "large",
        className: "px-5 py-3",
      },
      // Solid
      // ======================================
      {
        kind: "solid",
        size: "slim",
        className: "px-3 py-[3px]",
      },
      {
        kind: "solid",
        size: "large",
        className: "px-5 py-3",
      },
      // ======================================
      // Plain
      // ======================================
      {
        kind: "plain",
        variant: "destructive",
        className: "text-destructive",
      },
      // {
      //   disabled: true,
      //   variant: "default",
      //   className: "border-borderDisabled",
      // },
    ],
    defaultVariants: {
      variant: "monochrome",
      size: "medium",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  hideTextLoading?: boolean;
  isLoading?: boolean;
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  block?: boolean;
  ring?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  icon, iconPosition, hideTextLoading, block, isLoading, ring, kind = "solid", label, children, className, variant, size, asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button"

  // TODO: If no text, and is loading, take gap-2 away
  return (
    // <div className={`  ${ring ? "bg-blackBlue-600/60 backdrop-blur-sm p-2 rounded-lg" : ""}`}>
    <Comp
      ref={ref}
      className={
        cn(buttonVariants({ variant, kind, size, className }),`
          inline-flex justify-center gap-2 leading-4 items-center
          ${iconPosition === "right" && !isLoading ? "flex-row-reverse" : ""} 
          ${block ? "w-full" : ""}
          ${ring ? "ring-blackBlue-600/30 backdrop-blur-sm" : ""}
        `)
      }
      {...props}
    >
      <>

        {icon && (
          !isLoading || iconPosition !== "right" &&
          <div className="flex items-center max-h-4 max-w-4 h-4 w-4 select-none pointer-events-none wop">
            {icon}
          </div>
        )}
        {icon && (
          !isLoading &&
          <div className="flex items-center max-h-4 max-w-4 h-4 w-4 select-none pointer-events-none">
            {icon}
          </div>
        )}

        {!hideTextLoading &&
          <span>{children ? children : label}</span>
        }

        {isLoading && (
          <svg className="max-h-3 max-w-3 h-3 w-3 inline-block animate-spin text-white select-none pointer-events-none" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}

      </>
    </Comp>
    // </div>
  )
}
)
Button.displayName = "Button"

export { Button, buttonVariants }
