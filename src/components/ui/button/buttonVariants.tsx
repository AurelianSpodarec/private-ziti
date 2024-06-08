import { cva } from 'class-variance-authority'

// Needs to be dynamic
const buttonVariants = cva(
  'inline-flex items-center duration-75 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-white text-text shadow-button border border-gray-400',
        primary: 'bg-primary text-white hover:bg-primary/90',

        secondary: '',

        // To be deleted below
        warning: 'bg-red-500 text-primary-foreground',
        destructive: 'bg-destructive text-white',
        monochrome: 'bg-black text-white border border-gray-900',
        clean: 'bg-blackBlue-800'
      },
      kind: {
        plain: 'shadow-none bg-transparent border border-current px-2 py-1 text-sm',
        solid: '',
        outline: 'bg-transparent border border-current shadow-[0_0_0_1px_currentColor]',
        ghost: '',
        ring: '',
        glass: 'backdrop-blur-sm bg-opacity-60'
      },
      size: {
        slim: 'text-sm',
        medium: 'text-sm',
        large: 'text-base'
      },
      fullWidth: {
        true: 'w-full'
      },
      spacing: {
        clean: ''
      }
      // disabled: {
      //   true: "bg-surfaceDisabled text-textDisabled",
      // },
    },
    compoundVariants: [
      // ======================================
      // Primary
      // ======================================
      {
        kind: 'outline',
        variant: 'primary',
        className: 'text-primary'
      },
      {
        kind: 'plain',
        variant: 'primary',
        className: 'text-primary'
      },
      // ======================================
      // Monochrome
      // ======================================
      {
        kind: 'solid',
        size: 'medium',
        variant: 'monochrome',
        className: 'hover:bg-[#262626]'
      },
      {
        kind: 'outline',
        size: 'medium',
        variant: 'monochrome',
        className: 'border border-black text-black hover:bg-gray-100'
      },
      // ======================================
      // Other
      // ======================================
      {
        kind: 'outline',
        variant: 'destructive',
        className: 'text-destructive'
      },
      {
        kind: 'outline',
        variant: 'warning',
        className: 'text-red-500'
      },
      {
        kind: 'outline',
        size: 'slim',
        className: 'px-3 py-[3px]'
      },
      // Button Kind
      // ========================================
      {
        kind: 'outline',
        size: 'medium',
        className: 'px-5 py-3'
      },
      {
        kind: 'solid',
        size: 'medium',
        className: 'px-5 py-3'
      },
      {
        kind: 'outline',
        size: 'large',
        className: 'px-5 py-3'
      },
      // Button Kind: Solid
      // ======================================
      {
        kind: 'solid',
        size: 'slim',
        className: 'px-3 py-[3px]'
      },
      {
        kind: 'solid',
        size: 'large',
        className: 'px-5 py-3'
      },
      // ======================================
      // Button Kind: Plain
      // ======================================
      {
        kind: 'plain',
        variant: 'destructive',
        className: 'text-destructive'
      },
      // {
      //   disabled: true,
      //   variant: "default",
      //   className: "border-borderDisabled",
      // },
      // ======================================
      // Button Kind: Glass
      // ======================================
      {
        kind: 'glass',
        size: 'medium',
        className: 'px-3 py-3'
        // variant: "",
      },
      {
        kind: 'glass',
        size: 'medium',
        className: 'px-3 py-3',
        variant: 'clean'
      }
    ],
    defaultVariants: {
      variant: 'monochrome',
      size: 'medium'
    }
  }
)

export default buttonVariants
