import { cva } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'text-white border-transparent bg-blackBlue-700',
        secondary: 'text-black border',
        destructive: 'border-transparent bg-destructiv',
        outline: 'text-foreground'
      },
      kind: {
        solid: '',
        outline: 'bg-transparent border border-current',
        glass: 'blackdrop-blur-sm'
      },
      // Move blur to kind as glass
      blur: {
        base: 'backdrop-blur-sm'
      },
      opacity: {
        base: 'bg-opacity-60'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export default badgeVariants
