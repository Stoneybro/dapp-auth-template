"use client"

import { ChevronsUpDown, LogOut } from "lucide-react"
import CopyText from "./copy"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavUser({
  userAddress
}: {
  userAddress: string
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <div className="relative">
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground relative"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex-1 flex items-center gap-2 overflow-hidden">
                    <span className="truncate font-medium">{userAddress}</span>
                  </div>
                  <ChevronsUpDown className="ml-2 size-4 flex-shrink-0" />
                </div>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <div className="absolute right-22 top-1/2 -translate-y-1/2">
              <CopyText text={userAddress} />
            </div>
          </div>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
