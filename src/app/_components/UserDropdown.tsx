import Link from 'next/link'

import Avatar from '@/components/atoms/Avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

function UserDropdown () {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-between space-x-2">
          <Avatar src="https://media.ziti.io/profile/bacbf896-83d1-4b0a-bf8d-78f4a4ddf42e/e1839b5b-1820-4f52-842e-77f0cfe4e79c.webp" fallbackText="JD" name="John Doe" />
          <span className="text-black">
            John Doe
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="#">
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/settings/membership">
              <span>Membership</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="/settings">
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <form action="/api/auth/sign-out" method="post">
              <button className="">
                Logout
              </button>
            </form>
          </DropdownMenuItem>

        </DropdownMenuGroup>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
