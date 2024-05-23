import Avatar from '@/components/atoms/Avatar'

interface IUserAvatarBox {
  src: string
  name: string
  fallbackText: string
  subTitle?: string
}

function UserAvatarBox ({ src, name, fallbackText, subTitle }: IUserAvatarBox) {
  return (
    <div className="flex items-center space-x-2">
      <Avatar src={src} name={name} fallbackText={fallbackText} size="h-10 w-10" />
      <div className="flex flex-col">
        <span className="text-foreground-500">{name}</span>
        <span className="text-foreground-500">{subTitle}</span>
      </div>
    </div>
  )
}

export default UserAvatarBox
