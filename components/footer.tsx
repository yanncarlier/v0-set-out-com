"use client"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const Footer = () => {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2a2a3a] bg-[#12121a] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href={`/${language}`} className="font-display text-xl font-bold">
              <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                SET-OUT
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              {t("heroEyebrow")}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href={`/${language}#about`}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href={`/${language}/services`}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {t("services")}
            </Link>
            <Link
              href={`/${language}#contact`}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {t("contact")}
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-[#2a2a3a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t("companyName")}. {t("allRightsReserved")}
          </p>
          <p className="text-xs text-muted-foreground/60 italic">
            Crafted with passion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
