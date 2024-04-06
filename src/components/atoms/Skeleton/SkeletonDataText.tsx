import React from 'react';
import Skeleton from ".";
import { ISkeleton } from "./ISkeleton";

interface ISkeletonDataText extends ISkeleton {
  children?: React.ReactNode;
  text: string;
  element: string;
  skeletonSize: string;
  isLoading: string | boolean | undefined;
}

function SkeletonDataText({ element, className, text, variant = "rectangular", skeletonSize, isLoading }: ISkeletonDataText) {
  const Comp: any = element

  return (
    <>
      {isLoading ? (
        <Comp className={className}>{text}</Comp>
      ) : (
        <Skeleton variant={variant} className={skeletonSize} gutter="mb-0" />
      )}
    </>
  )
}

export default SkeletonDataText;
