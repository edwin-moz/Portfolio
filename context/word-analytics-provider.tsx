"use client"

import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "@/lib/constants"
import { createContext, useState } from "react"

type Stats = {
  numberOfCharacters: number
  numberOfWords: number
  instagramCharactersLeft: number
  facebookCharactersLeft: number
}

type TWordAnalyticsContext = {
  handleSetText: (updatedText: string) => void
  stats: Stats
  text: string
  warningText: string
}

export const WordAnalyticsContext = createContext<TWordAnalyticsContext | null>(
  null
)

type WordAnalyticsContextProviderProps = {
  children: React.ReactNode
}

export default function WordAnalyticsContextProvider({
  children,
}: WordAnalyticsContextProviderProps) {
  const [text, setText] = useState("")
  const [warningText, setWarningText] = useState("")

  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(/\s/).filter((word: string) => word !== "")
      .length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  }

  const handleSetText = (updatedText: string) => {
    let newText = updatedText

    // basic validation
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed!")
      newText = newText.replace("<script>", "")
    } else if (newText.includes("@")) {
      setWarningText("No @ symbol allowed!")
      newText = newText.replace("@", "")
    } else {
      setWarningText("")
    }

    setText(newText)
  }
  return (
    <WordAnalyticsContext.Provider
      value={{
        handleSetText,
        stats,
        text,
        warningText,
      }}
    >
      {children}
    </WordAnalyticsContext.Provider>
  )
}
