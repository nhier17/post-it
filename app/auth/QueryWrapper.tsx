'use client'

import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient()
interface Props {
    children?: ReactNode
  }

export default function QueryWrapper({children}: Props) {
    return (
      <QueryClientProvider client={queryClient}>
        <Toaster/>
        {children}
      </QueryClientProvider>
    )
  }
