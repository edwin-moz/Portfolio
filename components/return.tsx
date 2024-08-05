import { ArrowLeftIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Return() {
  return (
    <Link className="fixed flex gap-3 group items-center left-5 top-5" href="/">
      <ArrowLeftIcon className="h-[40px] group-hover:-translate-x-2 opacity-80 transition w-[40px]" />
      <p className="opacity-80 text-2xl">Back</p>
    </Link>
  )
}
