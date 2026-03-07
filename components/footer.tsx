"use client"
import { useLanguage } from "@/contexts/language-context"

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} {t("companyName")}. <br />
          {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  )
}

export default Footer
