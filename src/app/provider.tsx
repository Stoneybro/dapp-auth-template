"use client"

import { type ReactNode } from "react"
import { PrivyProvider } from "@privy-io/react-auth"

import { privyConfig } from "@/lib/privyConfig"

interface ProviderProps {
  children: ReactNode
}

export function Provider({ children }: ProviderProps) {
  if (!process.env.NEXT_PUBLIC_PRIVY_APP_ID) {
    throw new Error("NEXT_PUBLIC_PRIVY_APP_ID is not set")
  }

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
      config={privyConfig}
    >
      {children}
    </PrivyProvider>
  )
}
