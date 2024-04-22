import Image from 'next/image'
import Skeleton from '.'
import { type ISkeleton } from './ISkeleton'
import { configApp } from '@/config/configApp'

interface ISkeletonDataImage extends ISkeleton {
  preconnect?: string
  image: string | undefined
  className: string
}

function SkeletonDataImage ({ image, preconnect = `${configApp.http}${configApp.url}`, type = 'image', variant, className }: ISkeletonDataImage) {
  const buildImage = preconnect ? `${preconnect}${image}` : image
  return (
    <>
      {image
        ? (
        <Image fill className={`object-cover h-full w-full ${className}`} src={buildImage} alt="Skeleton Image" />
          )
        : (
        <Skeleton height="h-full" width="w-full" gutter="mb-0" type={type} variant={variant} />
          )}
    </>
  )
}

export default SkeletonDataImage
