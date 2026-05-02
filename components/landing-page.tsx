"use client"
import Link from "next/link"
import Footer from "@/components/footer"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function LandingPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
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
                    className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-accent"
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

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
                <span className="block">{t("heroTitle") || "SET-OUT"}</span>
                              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("heroSubtitle")}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`/${language}/services`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card/75 px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]"
                >
                  {t("exploreServices")}
                </Link>
                <Link
                  href={`/${language}#contact`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card/75 px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]"
                >
                  {t("getInTouch")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center rounded-xl border border-border/90 bg-background/70 px-4 py-2 backdrop-blur-sm">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-accent">
                  {t("aboutTag")}
                </span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
                {t("aboutTitle")}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("technologyServices")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("technologyServicesDesc")}</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("ourMission")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("ourMissionDesc")}</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("globalReach")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("globalReachDesc")}</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("expertTeam")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("expertTeamDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center rounded-xl border border-border/90 bg-background/70 px-4 py-2 backdrop-blur-sm">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-accent">
                  {t("contactTag")}
                </span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
                {t("contactTitle")}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("contactDesc")}
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("address")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("addressLine1")} {t("addressLine2")}
                </p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("phone")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">+853-28389275</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)]">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("email")}
                </h3>
                <p className="text-sm leading-relaxed text-accent">Contact@set-out.com</p>
              </div>

              <div className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-[0_18px_50px_rgba(4,12,27,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_65px_rgba(6,24,44,0.4)] md:col-span-2 lg:col-span-3">
                <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {t("companyName")}
                </h3>
                <div className="space-y-4">
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    <p className="font-medium text-foreground mb-2">{t("businessHours")}</p>
                    <p>Monday - Friday: 9:00AM - 5:00PM</p>
                  </div>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    <p className="font-medium text-foreground mb-2">{t("registration")}</p>
                    <p>44438(SO)</p>
                  </div>
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
