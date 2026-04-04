"use client"
import { useLanguage } from "@/contexts/language-context"

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/80 bg-background/80 py-8 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {t("companyName")}
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  )
}

export default Footer
