import ModeToggle from '@/components/atoms/ModeToggle'
import UserDropdown from '../UserDropdown'

function MenuDesktop () {
  return (
    <nav className="hidden lg:block text-sm text-white font-montserrat">
      <div className="flex items-center space-x-7">
        <ModeToggle />

        <div className="flex items-center justify-between space-x-2">
          {/* <Avatar />
          <span className="text-black">John Toe</span> */}
          <UserDropdown />
        </div>

      </div>
    </nav>
  )
}

export default MenuDesktop
