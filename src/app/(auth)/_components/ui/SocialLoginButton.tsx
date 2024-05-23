import { Button } from "@/components/ui/button"

function SocialLoginButton ({ children, onClick, name, icon }: { onClick: () => void; name: string, icon: React.ReactNode }) {
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
