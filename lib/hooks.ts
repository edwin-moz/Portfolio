import { useActiveSectionContext } from "@/context/active-section-context"
import { useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { SectionName } from "./types"
import { CounterContext } from "@/context/counter-context-provider"
import { WordAnalyticsContext } from "@/context/word-analytics-provider"

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  })

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
  }
}

export function useCounterContext() {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error(
      "useCounterContext must be used within a CounterContextProvider component."
    )
  }

  return context
}

export function useWordAnalyticsContext() {
  const context = useContext(WordAnalyticsContext)

  if (!context) {
    throw new Error(
      "useWordAnalyticsContext must be used within a WordAnalyticsContextProvider component."
    )
  }

  return context
}
