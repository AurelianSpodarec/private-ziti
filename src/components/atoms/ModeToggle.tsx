'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

function ModeToggle () {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-red-500">
          <button type="button" className="">Toggle Theme</button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => { setTheme('light') }}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme('dark') }}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme('system') }}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle
