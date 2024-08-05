"use client"

import { createContext, useEffect, useState } from "react"

type TCounterContext = {
  count: number
  disabled: boolean
  handleAddCount: () => void
  handleResetCount: () => void
  handleSubtractCount: () => void
}

export const CounterContext = createContext<TCounterContext | null>(null)

type CounterContextProviderProps = {
  children: React.ReactNode
}

export default function CounterCountextProvider({
  children,
}: CounterContextProviderProps) {
  const [count, setCount] = useState(0)

  const disabled = count === 50

  const handleAddCount = () => {
    setCount((prev) => {
      return prev + 1
    })
  }

  const handleResetCount = () => {
    setCount(0)
  }

  const handleSubtractCount = () => {
    if (count > 0) {
      setCount((prev) => {
        return prev - 1
      })
    }
  }

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        const newCount = count + 1

        if (newCount > 50) {
          setCount(50)
        } else {
          setCount(newCount)
        }
      }
    }

    window.addEventListener("keydown", handleKeydown)

    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [count])

  return (
    <CounterContext.Provider
      value={{
        count,
        disabled,
        handleAddCount,
        handleResetCount,
        handleSubtractCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}
