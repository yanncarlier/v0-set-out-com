"use client"
import Footer from "@/components/footer"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function LandingPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-lg font-semibold tracking-[0.2em] text-foreground">SET-OUT</span>
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
        <section className="relative overflow-hidden border-b border-border/80 py-24 md:py-32">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          <div className="container relative mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-card/75 px-8 py-12 shadow-[0_24px_80px_rgba(5,15,31,0.45)] backdrop-blur-sm md:px-12 md:py-14">
              <div className="mb-6 h-1 w-16 rounded-full bg-cyan-300" />
              <h2 className="mb-5 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {t("heroEyebrow")}
              </h2>
              <p className="max-w-3xl text-left text-lg leading-relaxed text-muted-foreground md:text-[1.75rem] md:leading-relaxed">
                {t("heroSubtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
              <div className="space-y-4 rounded-3xl border border-border/80 bg-card/70 p-8 shadow-[0_18px_50px_rgba(4,12,27,0.28)]">
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-accent to-cyan-300" />
                <h3 className="text-xl font-medium text-foreground">{t("technologyServices")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("technologyServicesDesc")}</p>
              </div>
              <div className="space-y-4 rounded-3xl border border-border/80 bg-card/70 p-8 shadow-[0_18px_50px_rgba(4,12,27,0.28)]">
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-accent to-cyan-300" />
                <h3 className="text-xl font-medium text-foreground">{t("ourMission")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("ourMissionDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-border/80 py-20 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-12 text-3xl font-semibold text-balance tracking-tight md:text-4xl">
              {t("contactUs")}
            </h2>
            <div className="w-4/5 mx-auto space-y-8">
              <div className="rounded-[2rem] border border-border/80 bg-card/80 p-8 shadow-[0_22px_65px_rgba(4,12,27,0.32)] backdrop-blur-sm">
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
                    <p className="text-foreground font-medium">{t("contact")}</p>
                    <p>{t("phone")}</p>
                    <p className="font-medium text-accent">{t("email")}</p>
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
