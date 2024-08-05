"use client"

import { useCounterContext } from "@/lib/hooks"

export default function Count() {
  const { count } = useCounterContext()

  return <p className="font-[600] text-[200px] text-[#1d2507]">{count}</p>
}
