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

function UserDropdown ({ session }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Avatar src="https://media.licdn.com/dms/image/D4D03AQE8vC6NMPCXyA/profile-displayphoto-shrink_200_200/0/1710696258127?e=2147483647&v=beta&t=_TMmtZ5lFsbXJGRKA01HzRRFmQnIuhxOn7ypfqpUJL0"
            fallbackText="JD"
            name={`Hi! ${session?.user.givenName}`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/settings/membership">
              <span>Messages</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="/settings">
              <span>Whishlist</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link href="#">
              <span>Account</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="#">
              <span>Post Property</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

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
