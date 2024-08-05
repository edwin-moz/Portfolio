"use client"

import { useWordAnalyticsContext } from "@/lib/hooks"

export default function Textarea() {
  const { handleSetText, text, warningText } = useWordAnalyticsContext()
  return (
    <div className="flex flex-1 flex-col gap-3 h-full text-2xl p-10">
      <textarea
        className="font-[500] h-full outline-none placeholder:text-[#959c9f] resize-none text-[#000000]/90 w-full"
        onChange={(event) => handleSetText(event?.target.value)}
        placeholder="Enter your text"
        spellCheck="false"
        value={text}
      ></textarea>
      <WarningText warningText={warningText} />
    </div>
  )
}

function WarningText({ warningText }: { warningText: string }) {
  return (
    <p className="absolute bottom-[15px] left-[35px] text-md text-red-500">
      {warningText}
    </p>
  )
}
