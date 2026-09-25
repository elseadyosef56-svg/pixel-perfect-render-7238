import { Link, createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Droplets,
  FileText,
  Hammer,
  Layers,
  Mail,
  Package,
  Phone,
  Receipt,
  ShieldCheck,
} from "lucide-react";

import heroImage from "@/assets/hero-architecture.jpg";
import materialsImage from "@/assets/materials.jpg";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { company, scopes } from "@/components/site/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "شركة العمارة الرائدة | لاستيراد مواد البناء والمواد الصحية" },
      {
        name: "description",
        content: "شركة العمارة الرائدة لاستيراد مواد البناء والمواد الصحية وملحقاتها.",
      },
      {
        name: "keywords",
        content: "مواد البناء, المواد الصحية, الإسمنت, الحديد, الرخام, شركة العمارة الرائدة",
      },
      {
        property: "og:title",
        content: "شركة العمارة الرائدة | لاستيراد مواد البناء والمواد الصحية",
      },
      {
        property: "og:description",
        content: "شركة العمارة الرائدة لاستيراد مواد البناء والمواد الصحية وملحقاتها.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const scopeIcons = [Package, Hammer, Droplets, Layers, Building2, ShieldCheck];

const credentials = [
  { label: "رقم القيد", value: company.registryNumber, icon: FileText },
  { label: "تاريخ القيد", value: company.registryDate, icon: CalendarDays },
  { label: "رقم الترخيص", value: company.licenseNumber, icon: BadgeCheck },
  { label: "الرقم الضريبي", value: company.taxNumber, icon: Receipt },
];

function Index() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.fullName,
    alternateName: company.nameEn,
    email: company.email,
    telephone: company.phone,
    taxID: company.taxNumber,
    foundingDate: "2006-01-18",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImage}
            alt="واجهة مبنى حديث تعبّر عن أعمال البناء والعمارة"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/85" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
            <Reveal>
              <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary-foreground">
                <ShieldCheck className="h-4 w-4 text-gold" />
                شركة ذات مسؤولية محدودة
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl">
                {company.shortName}
              </h1>
              <p className="mt-4 text-xl font-semibold text-gradient-gold sm:text-2xl">
                لاستيراد مواد البناء والمواد الصحية
              </p>
              <p
                dir="ltr"
                className="mt-5 text-right text-[11px] font-medium tracking-[0.3em] text-primary-foreground/70 sm:text-xs"
              >
                {company.nameEn}
                <br />
                {company.taglineEn}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                متخصصون في استيراد مواد البناء والمواد الصحية وملحقاتها، ومنتجات وتجهيزات البناء
                المختلفة.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-gold transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  تواصل معنا
                </Link>
                <a
                  href="#scopes"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/35 px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  اكتشف خدماتنا
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-sm font-bold tracking-[0.25em] text-accent">عن الشركة</p>
              <div className="gold-rule mt-3 h-px w-28" />
              <h2 className="mt-6 max-w-3xl text-2xl leading-snug text-primary sm:text-3xl">
                {company.fullName}
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {credentials.map((item, index) => (
                <Reveal key={item.label} delay={index * 90}>
                  <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-elegant">
                    <item.icon className="h-6 w-6 text-accent" />
                    <p className="mt-5 text-sm text-muted-foreground">{item.label}</p>
                    <p dir="ltr" className="mt-1 text-right text-xl font-extrabold text-primary">
                      {item.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Scopes */}
        <section id="scopes" className="scroll-mt-24 bg-secondary px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-sm font-bold tracking-[0.25em] text-accent">مجالات العمل</p>
              <div className="gold-rule mt-3 h-px w-28" />
              <h2 className="mt-6 text-3xl text-primary sm:text-4xl">مجالات عملنا</h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {scopes.map((scope, index) => {
                const Icon = scopeIcons[index] ?? Package;
                return (
                  <Reveal key={scope} delay={index * 80}>
                    <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-elegant">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary transition-colors group-hover:bg-accent">
                          <Icon className="h-6 w-6 text-gold transition-colors group-hover:text-accent-foreground" />
                        </span>
                        <span className="text-3xl font-extrabold text-border transition-colors group-hover:text-gold-soft">
                          {index + 1}
                        </span>
                      </div>
                      <p className="mt-6 text-base leading-relaxed font-medium text-foreground">
                        {scope}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <img
                src={materialsImage}
                alt="رخام وحنفيات ومواسير وحديد وإسمنت من مواد البناء والمواد الصحية"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-2xl object-cover shadow-elegant"
              />
            </Reveal>
            <Reveal delay={120}>
              <h2 className="text-3xl leading-snug text-primary sm:text-4xl">
                خبرة في مجال مواد البناء والمواد الصحية
              </h2>
              <div className="gold-rule mt-5 h-px w-28" />
              <ul className="mt-8 space-y-4">
                {[
                  "الرخام وبلاط الأرضيات والجدران",
                  "الإسمنت والحديد وأخشاب البناء",
                  "المواسير والحنفيات وأنظمة الحمامات",
                  "المواد العازلة بأنواعها",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-foreground">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <BadgeCheck className="h-4 w-4 text-accent" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="surface-navy px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl">
                هل ترغب في التواصل مع {company.shortName}؟
              </h2>
              <p className="mt-4 text-base text-primary-foreground/80">
                يسعدنا استقبال استفساراتكم والتواصل معكم.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-gold transition-transform hover:-translate-y-0.5"
                >
                  تواصل معنا
                </Link>
                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/35 px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Phone className="h-4 w-4" />
                  اتصل الآن
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/35 px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Mail className="h-4 w-4" />
                  راسلنا عبر البريد
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </div>
  );
}
