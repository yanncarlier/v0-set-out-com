"use client"
import Link from "next/link"
import Footer from "@/components/footer"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function LandingPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between rounded-2xl border border-[#2a2a3a]/80 bg-[#0a0a0f]/80 px-6 py-3 backdrop-blur-xl">
            {/* Logo */}
            <Link href={`/${language}`} className="font-display text-xl font-bold">
              <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                SET-OUT
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href={`/${language}#about`}
                className="text-sm font-medium text-muted-foreground nav-link-underline hover:text-white transition-colors"
              >
                {t("about")}
              </Link>
              <Link
                href={`/${language}/services`}
                className="text-sm font-medium text-muted-foreground nav-link-underline hover:text-white transition-colors"
              >
                {t("services")}
              </Link>
              <Link
                href={`/${language}#contact`}
                className="text-sm font-medium text-muted-foreground nav-link-underline hover:text-white transition-colors"
              >
                {t("contact")}
              </Link>
            </div>

            {/* Language Selector & CTA */}
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <Link
                href={`/${language}#contact`}
                className="hidden sm:inline-flex items-center gap-2 rounded-xl btn-gradient px-5 py-2.5 text-sm font-semibold"
              >
                {t("contact")}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] animate-float" />
            <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px] animate-float" style={{ animationDelay: '-10s' }} />
            <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-pink/10 blur-[100px] animate-float" style={{ animationDelay: '-5s' }} />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2a2a3a] bg-[#1a1a25] px-4 py-2 animate-fade-in-up">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">{t("heroEyebrow")}</span>
              </div>

              {/* Main Title */}
              <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="block">{t("heroTitle") || "SET-OUT"}</span>
                <span className="block bg-gradient-to-r from-primary-light via-accent to-accent-pink bg-clip-text text-transparent">
                  {t("heroTitleAccent") || "INTERNATIONAL"}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t("heroSubtitle")}
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href={`/${language}/services`}
                  className="inline-flex items-center gap-2 rounded-xl btn-gradient px-8 py-4 text-base font-semibold"
                >
                  {t("exploreServices")}
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href={`/${language}#contact`}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#2a2a3a] bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:border-primary-light hover:bg-[#1a1a25]"
                >
                  {t("getInTouch")}
                </Link>
              </div>

            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/50 p-1">
              <div className="h-2 w-1.5 rounded-full bg-muted-foreground/50 mx-auto" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-24 md:py-32 bg-[#12121a]">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16">
                <span className="section-tag mb-4 block">{t("aboutTag")}</span>
                <h2 className="font-display text-4xl font-bold md:text-5xl">{t("aboutTitle")}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Value Cards */}
                <div className="value-card group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{t("technologyServices")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t("technologyServicesDesc")}</p>
                </div>

                <div className="value-card group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{t("ourMission")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t("ourMissionDesc")}</p>
                </div>

                <div className="value-card group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-pink to-accent-purple">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{t("globalReach")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t("globalReachDesc")}</p>
                </div>

                <div className="value-card group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-success to-accent">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{t("expertTeam")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t("expertTeamDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div>
                  <span className="section-tag mb-4 block">{t("contactTag")}</span>
                  <h2 className="font-display text-4xl font-bold mb-4">{t("contactTitle")}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{t("contactDesc")}</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a25] border border-[#2a2a3a]">
                        <svg className="h-5 w-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{t("address")}</p>
                        <p className="text-sm text-muted-foreground">{t("addressLine1")} {t("addressLine2")}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a25] border border-[#2a2a3a]">
                        <svg className="h-5 w-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{t("phone")}</p>
                        <p className="text-sm text-muted-foreground">+853-28389275</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a25] border border-[#2a2a3a]">
                        <svg className="h-5 w-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{t("email")}</p>
                        <p className="text-sm text-accent">info@set-out.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="rounded-2xl border border-[#2a2a3a] bg-[#1a1a25] p-8">
                  <h3 className="font-display text-xl font-semibold mb-6">{t("companyName")}</h3>
                  
                  <div className="space-y-6">
                    {/* Business Hours */}
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0a0a0f] border border-[#2a2a3a]">
                        <svg className="h-5 w-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 - 17:00</p>
                      </div>
                    </div>

                    {/* Company Activities */}
                    <div className="pt-4 border-t border-[#2a2a3a]">
                      <p className="text-sm font-medium text-white mb-3">Our Services</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-light mt-1">•</span>
                          <span>Import/Export of hardware & software</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-light mt-1">•</span>
                          <span>IT & Electrical Engineering Consultancy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-light mt-1">•</span>
                          <span>IT Subcontracting & Project Management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-light mt-1">•</span>
                          <span>Training & Professional Development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-light mt-1">•</span>
                          <span>Digital Marketing & Software Development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-light mt-1">•</span>
                          <span>Technical Assistance</span>
                        </li>
                      </ul>
                    </div>
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
