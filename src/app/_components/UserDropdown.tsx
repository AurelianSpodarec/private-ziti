import Link from "next/link";

import Avatar from "@/components/atoms/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";


function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-between space-x-2">
          <Avatar src="https://github.com/shadcn.png" fallbackText="JD" name="John Doe" />
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

export default UserDropdown;
