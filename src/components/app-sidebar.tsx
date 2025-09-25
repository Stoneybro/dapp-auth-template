"use client"

import * as React from "react"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { usePrivy } from "@privy-io/react-auth"
import { truncateAddress } from "@/lib/utils"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = usePrivy()
  const userAddress = user?.wallet?.address
    ? truncateAddress(user.wallet.address as `0x${string}`,7,7)
    : ""
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser userAddress={userAddress} />
      </SidebarHeader>
      <SidebarRail />
    </Sidebar>
  )
}
