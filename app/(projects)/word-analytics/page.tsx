import Stats from "@/components/stats"
import Textarea from "@/components/textarea"

export default function Page() {
  return (
    <div className="bg-[#fff] drop-shadow-sm flex h-[520px] overflow-hidden relative rounded-xl w-[1050px]">
      <Textarea />

      <Stats />
    </div>
  )
}
