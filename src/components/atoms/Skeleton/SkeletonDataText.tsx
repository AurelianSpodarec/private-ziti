import React from 'react'
import Skeleton from '.'
import { type ISkeleton } from './ISkeleton'

interface ISkeletonDataText extends ISkeleton {
  children?: React.ReactNode
  text: string
  element: keyof JSX.IntrinsicElements
  skeletonSize: string
  isLoading: boolean | undefined
}

function SkeletonDataText ({ element, className, text, variant = 'rectangular', skeletonSize, isLoading = true }: ISkeletonDataText) {
  const Comp = element

  return (
    <>
      {isLoading
        ? (
          <Comp className={className}>{text}</Comp>
          )
        : (
          <Skeleton variant={variant} className={skeletonSize} gutter="mb-0" />
          )}
    </>
  )
}

export default SkeletonDataText
