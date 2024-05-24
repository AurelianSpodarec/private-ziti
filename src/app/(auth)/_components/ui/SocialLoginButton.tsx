import { Button } from "@/components/ui/button"

interface ISocialLoginButton {
  onClick: () => void
  name: string
  icon: React.ReactNode
}

function SocialLoginButton ({ onClick, name, icon }: ISocialLoginButton) {
  return (
    <Button
      onClick={onClick}
      kind="outline"
      block
      icon={icon}
    >
      {name}
    </Button>
  )
}

export default SocialLoginButton
