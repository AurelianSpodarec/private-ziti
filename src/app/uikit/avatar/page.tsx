import Avatar from '@/components/atoms/Avatar'

function UIKitAvatar () {
  return (
    <div>

      <h2>Sizes</h2>

      <Avatar name="John Doe" fallbackText="JD" />
      <Avatar name="Jane Doe" fallbackText="JD" verified />
    </div>
  )
}

export default UIKitAvatar
