"use client"
import Link from "next/link"
import Footer from "@/components/footer"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import { ArrowLeft } from "lucide-react"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors">
            SET-OUT
          </Link>
          <div className="flex items-center gap-8">
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                <li>
                  <Link
                    href="/#about"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium tracking-wide"
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-accent text-sm font-medium tracking-wide"
                  >
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium tracking-wide"
                  >
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </nav>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main>
        {/* Back Link */}
        <div className="container mx-auto px-6 pt-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 text-center text-balance tracking-tight">
              {t("ourServices")}
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service Card 1 */}
              <div className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-medium mb-3 text-foreground group-hover:text-accent transition-colors">
                  {t("importExport")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("importExportDesc")}</p>
              </div>

              {/* Service Card 2 */}
              <div className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-medium mb-3 text-foreground group-hover:text-accent transition-colors">
                  {t("consultancy")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("consultancyDesc")}</p>
              </div>

              {/* Service Card 3 */}
              <div className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-medium mb-3 text-foreground group-hover:text-accent transition-colors">
                  {t("subcontracting")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("subcontractingDesc")}</p>
              </div>

              {/* Service Card 4 */}
              <div className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-medium mb-3 text-foreground group-hover:text-accent transition-colors">
                  {t("projectManagement")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("projectManagementDesc")}</p>
              </div>

              {/* Service Card 5 */}
              <div className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-medium mb-3 text-foreground group-hover:text-accent transition-colors">
                  {t("training")}
                </h3>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                  <p>{t("trainingDesc")}</p>
                  <ul className="space-y-1 mt-3">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {t("leadershipDev")}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {t("teamBuilding")}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {t("professionalSkills")}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service Card 6 */}
              <div className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-medium mb-3 text-foreground group-hover:text-accent transition-colors">
                  {t("digitalMarketing")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("digitalMarketingDesc")}</p>
              </div>

              {/* Service Card 7 */}
              <div className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-medium mb-3 text-foreground group-hover:text-accent transition-colors">
                  {t("softwareDev")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("softwareDevDesc")}</p>
              </div>

              {/* Service Card 8 */}
              <div className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-medium mb-3 text-foreground group-hover:text-accent transition-colors">
                  {t("technicalAssistance")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("technicalAssistanceDesc")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
