import { redirect } from "next/navigation"
import { defaultLanguage } from "@/lib/site"

export default function ServicesRedirectPage() {
  redirect(`/${defaultLanguage}/services`)
}
