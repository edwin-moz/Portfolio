import Return from "@/components/return"
import CounterCountextProvider from "@/context/counter-context-provider"
import WordAnalyticsContextProvider from "@/context/word-analytics-provider"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CounterCountextProvider>
      <WordAnalyticsContextProvider>
        <Return />
        <div className="flex justify-center">{children}</div>
      </WordAnalyticsContextProvider>
    </CounterCountextProvider>
  )
}
