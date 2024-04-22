import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import badgeVariants from './badgeVariants'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  label?: string
  icon?: any
  iconPosition?: 'left' | 'right'
}

function Badge ({ children, onClick, label, className, blur, variant, opacity, kind, iconPosition = 'right', icon, ...props }: BadgeProps) {
  return (
    <div onClick={onClick} className={cn(badgeVariants({ variant, blur, opacity, kind }),
      `
      ${className} 
      inline-flex justify-center leading-4 items-center gap-2
      ${iconPosition === 'right' ? 'flex-row-reverse' : ''}
    `)} {...props}>

      {icon &&
        <div className="flex items-center max-h-4 max-w-4 h-4 w-4 select-none pointer-events-none wop">
          {icon}
        </div>
      }

      {children || label}
    </div >
  )
}

export { Badge, badgeVariants }
