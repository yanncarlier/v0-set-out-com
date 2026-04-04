import { redirect } from "next/navigation"
import { defaultLanguage } from "@/lib/site"

export default function Page() {
  redirect(`/${defaultLanguage}`)
}
