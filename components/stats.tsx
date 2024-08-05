"use client"

import { useWordAnalyticsContext } from "@/lib/hooks"
import { cn } from "@/lib/utils"

export default function Stats() {
  const { stats } = useWordAnalyticsContext()

  return (
    <section className="bg-[#4d5457]/30 flex flex-wrap w-[300px]">
      <Stat label="Words" number={stats.numberOfWords} />
      <Stat label="Characters" number={stats.numberOfCharacters} />
      <Stat label="Instagram" number={stats.instagramCharactersLeft} />
      <Stat label="Facebook" number={stats.facebookCharactersLeft} />
    </section>
  )
}

function Stat({ label, number }: { label: string; number: number }) {
  return (
    <section className="flex flex-col items-center justify-center w-[150px]">
      <span
        className={cn("font-semibold text-[#4d5457] text-[35px]", {
          "text-red-500": number < 0,
        })}
      >
        {number}
      </span>

      <h2 className="font-medium text-[14px] text-[#747a7c] uppercase">
        {label}
      </h2>
    </section>
  )
}
