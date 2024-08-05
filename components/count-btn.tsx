"use client"

import { useCounterContext } from "@/lib/hooks"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

export default function CountBtn({ type }: { type: string }) {
  const { disabled, handleAddCount, handleSubtractCount } = useCounterContext()
  // MouseEvent<HTMLButtonElement, MouseEvent>
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (type === "plus") {
      handleAddCount()
    } else if (type === "minus") {
      handleSubtractCount()
    }

    event.currentTarget.blur()
  }

  return (
    <button
      className="flex hover:bg-[#212b06] items-center justify-center transition w-full"
      disabled={disabled}
      onClick={handleClick}
    >
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  )
}
