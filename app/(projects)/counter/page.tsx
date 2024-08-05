import Count from "@/components/count"
import CountBtn from "@/components/count-btn"
import ResetCountBtn from "@/components/reset-count-btn"

export default function Page() {
  return (
    <div className="bg-[#bef227]  flex flex-col h-[615px] items-center justify-between overflow-hidden rounded-lg shadow w-[476px]">
      <p className="mt-[60px] opacity-60 text-[#1d2507] text-4xl">
        Smiley's Counter
      </p>

      <div className="flex flex-col items-center">
        <Count />

        <ResetCountBtn />
      </div>

      <div className="bg-[#1d2507] flex h-[116px] justify-around w-full">
        <CountBtn type="minus" />

        <CountBtn type="plus" />
      </div>
    </div>
  )
}
