"use client"

import Link from "next/link"
import Footer from "@/components/footer"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import { ArrowLeft } from "lucide-react"

export default function ServicesPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center justify-between px-6 py-5">
          <Link href={`/${language}`} className="text-lg font-semibold tracking-[0.2em] text-foreground transition-colors hover:text-accent">
            SET-OUT
          </Link>
          <div className="flex items-center gap-8">
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                <li>
                  <Link
                    href={`/${language}#about`}
                    className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-accent"
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${language}/services`}
                    className="text-sm font-medium tracking-wide text-accent"
                  >
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${language}#contact`}
                    className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-accent"
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
        <div className="container mx-auto px-6 pt-8">
          <Link
            href={`/${language}`}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToHome")}
          </Link>
        </div>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center rounded-xl border border-border/90 bg-background/70 px-4 py-2 backdrop-blur-sm">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-accent">
                  {t("servicePortfolio")}
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
                {t("ourServices")}
              </h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("importExport")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("importExportDesc")}</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("consultancy")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("consultancyDesc")}</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("subcontracting")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("subcontractingDesc")}</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("projectManagement")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("projectManagementDesc")}</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("training")}
                </h3>
                <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <p>{t("trainingDesc")}</p>
                  <ul className="mt-3 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {t("leadershipDev")}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {t("teamBuilding")}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {t("professionalSkills")}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("digitalMarketing")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("digitalMarketingDesc")}</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("softwareDev")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("softwareDevDesc")}</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("technicalAssistance")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("technicalAssistanceDesc")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
