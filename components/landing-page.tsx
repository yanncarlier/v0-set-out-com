"use client"
import Image from "next/image"
import Footer from "@/components/footer"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function LandingPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src="/logo.jpeg"
            alt="SET-OUT Logo"
            width={200}
            height={80}
            className="h-auto w-auto max-h-16"
            priority
          />
          <div className="flex items-center gap-6">
            <nav className="hidden md:block">
              <ul className="flex gap-4">
                <li>
                  <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t("services")}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t("contact")}
                  </a>
                </li>
              </ul>
            </nav>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main>
        <section className="bg-black text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-balance">{t("heroTitle")}</h1>
            <p className="text-xl mb-8 text-pretty">{t("heroSubtitle")}</p>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t("technologyServices")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("technologyServicesDesc")}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{t("ourMission")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("ourMissionDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-balance">{t("ourServices")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{t("importExport")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("importExportDesc")}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{t("consultancy")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("consultancyDesc")}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{t("subcontracting")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("subcontractingDesc")}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{t("projectManagement")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("projectManagementDesc")}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{t("training")}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("trainingDesc")}
                  <br />
                  <br />- {t("leadershipDev")}
                  <br />- {t("teamBuilding")}
                  <br />- {t("professionalSkills")}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{t("digitalMarketing")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("digitalMarketingDesc")}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{t("softwareDev")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("softwareDevDesc")}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{t("technicalAssistance")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("technicalAssistanceDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-balance">{t("contactUs")}</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 leading-relaxed">
                {t("companyName")} <br />
                <br />
                {t("address")} <br />
                {t("addressLine1")} <br />
                {t("addressLine2")} <br />
                {t("addressLine3")} <br />
                澳門宋玉生廣場336 <br />
                號誠豐商業中心17樓O座 <br />
                <br />
                Contact: <br />
                {t("phone")} <br />
                {t("email")} <br />
                <br />
                {t("businessHours")} <br />
                <br />
                {t("registration")} <br />
                <br />
                {t("companyObject")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
