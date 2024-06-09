// import IconUser from '@/assets/icons/IconUser';
import ModeToggle from '@/components/atoms/ModeToggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

function UserDropdownMenu () {
  return (
    <div className="flex justify-center p-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-slate-700/80 hover:bg-slate-700 rounded-full">
          {/* <IconUser className="w-10 h-10 p-3 fill-slate-300" /> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuItem>
            Theme <ModeToggle />
          </DropdownMenuItem> */}
          <DropdownMenuItem>
            My Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserDropdownMenu
