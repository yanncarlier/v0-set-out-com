"use client"
import Footer from "@/components/footer"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function LandingPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-lg font-semibold tracking-tight text-foreground">SET-OUT</span>
          <div className="flex items-center gap-8">
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium tracking-wide"
                  >
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium tracking-wide"
                  >
                    {t("services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium tracking-wide"
                  >
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
        {/* Hero Section */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-balance tracking-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              {t("heroSubtitle")}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">{t("technologyServices")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("technologyServicesDesc")}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">{t("ourMission")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("ourMissionDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24 border-t border-border">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-balance tracking-tight">
              {t("contactUs")}
            </h2>
            <div className="w-4/5 mx-auto space-y-8">
              <div className="p-8 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-medium text-foreground mb-4">{t("companyName")}</h3>
                
                <div className="space-y-6 text-sm text-muted-foreground">
                  <div className="space-y-1">
                    <p className="text-foreground font-medium">{t("address")}</p>
                    <p>{t("addressLine1")}</p>
                    <p>{t("addressLine2")}</p>
                    <p>{t("addressLine3")}</p>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-1">
                    <p className="text-foreground font-medium">Contact</p>
                    <p>{t("phone")}</p>
                    <p className="text-accent">{t("email")}</p>
                  </div>

                  <div className="h-px bg-border" />

                  <p>{t("businessHours")}</p>

                  <div className="h-px bg-border" />

                  <p className="text-xs">{t("registration")}</p>

                  <div className="h-px bg-border" />

                  <p className="text-xs">{t("companyObject")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
