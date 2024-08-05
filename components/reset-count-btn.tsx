"use client"

import { useCounterContext } from "@/lib/hooks"
import { ResetIcon } from "@radix-ui/react-icons"

export default function ResetCountBtn() {
  const { handleResetCount } = useCounterContext()
  return (
    <button
      className="focus:opacity-50 hover:opacity-50 opacity-30 transition"
      onClick={handleResetCount}
    >
      <ResetIcon className="h-[40px] text-[#1d2507] w-[40px]" />
    </button>
  )
}
