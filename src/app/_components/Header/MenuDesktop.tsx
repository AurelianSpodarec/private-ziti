'use client'

// import useModal from '@/context/useModal'
import { Button } from '@/components/ui/button'
import UserDropdown from '../UserDropdown'

function MenuDesktop () {
  const isLogged = false
  // const { openModal } = useModal()

  return (
    <nav className="hidden lg:block text-sm text-white font-montserrat">
      <div className="flex items-center space-x-7">
        {/* <ModeToggle /> */}

        <div className="flex items-center justify-between space-x-2">
          {isLogged &&
            <UserDropdown />
          }

          {/* <Button onClick={() => openModal()}> */}
          <Button>
            Login Button
          </Button>

        </div>

      </div>
    </nav>
  )
}

export default MenuDesktop
