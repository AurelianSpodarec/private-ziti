import { Button } from "@/components/ui/button"

function UIKitButton() {
  return (
    <div>

      <h2>Sizes</h2>

      <div>
        <h2 className="text-2xl font-bold mb-4">Button kind</h2>
        <div className="flex items-center space-x-4">
          <Button>Solid</Button>
          <Button kind="outline">Outline</Button>
          <Button kind="plain">Plain</Button>
          <Button isLoading>Is Loading</Button>
          <Button isLoading></Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Button Effects</h2>
        <div className="flex items-center space-x-4 relative">
          <img src="https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg" />
          <div className="absolute top-[4%] right-[53%]">
            <Button ring>Ring</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UIKitButton
