import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { company } from "@/components/site/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | شركة العمارة الرائدة" },
      {
        name: "description",
        content:
          "تواصلوا مع شركة العمارة الرائدة لاستيراد مواد البناء والمواد الصحية عبر الهاتف أو البريد الإلكتروني.",
      },
      { property: "og:title", content: "تواصل معنا | شركة العمارة الرائدة" },
      {
        property: "og:description",
        content: "نحن هنا لاستقبال استفساراتكم. الهاتف والبريد الإلكتروني لشركة العمارة الرائدة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="surface-navy px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h1 className="text-3xl sm:text-4xl">تواصل معنا</h1>
              <div className="gold-rule mx-auto mt-5 h-px w-28" />
              <p className="mt-5 text-base text-primary-foreground/80">
                نحن هنا لاستقبال استفساراتكم.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
            <div className="space-y-5 lg:col-span-2">
              <Reveal>
                <div className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-elegant">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                    <Phone className="h-5 w-5 text-gold" />
                  </span>
                  <p className="mt-5 text-sm text-muted-foreground">رقم الهاتف</p>
                  <p dir="ltr" className="mt-1 text-right text-2xl font-extrabold text-primary">
                    {company.phone}
                  </p>
                  <a
                    href={`tel:${company.phone}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-navy-deep"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    اتصل بنا
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-elegant">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                    <Mail className="h-5 w-5 text-gold" />
                  </span>
                  <p className="mt-5 text-sm text-muted-foreground">البريد الإلكتروني</p>
                  <p dir="ltr" className="mt-1 text-right text-lg font-extrabold text-primary">
                    {company.email}
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="h-4 w-4" />
                    راسلنا عبر البريد
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={80} className="lg:col-span-3">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
                className="rounded-2xl border border-border bg-card p-7 shadow-elegant sm:p-9"
              >
                <h2 className="text-2xl text-primary">أرسل استفسارك</h2>
                <div className="gold-rule mt-4 h-px w-24" />

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-foreground">
                    الاسم
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
                    />
                  </label>
                  <label className="block text-sm font-medium text-foreground">
                    رقم الهاتف
                    <input
                      type="tel"
                      name="phone"
                      required
                      dir="ltr"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-right text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
                    />
                  </label>
                  <label className="block text-sm font-medium text-foreground sm:col-span-2">
                    البريد الإلكتروني
                    <input
                      type="email"
                      name="email"
                      required
                      dir="ltr"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-right text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
                    />
                  </label>
                  <label className="block text-sm font-medium text-foreground sm:col-span-2">
                    الرسالة
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full resize-y rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5 hover:bg-navy-deep"
                >
                  <Send className="h-4 w-4 text-gold" />
                  إرسال الرسالة
                </button>

                {sent && (
                  <p
                    role="status"
                    className="mt-6 rounded-lg border border-accent/40 bg-secondary p-4 text-sm font-medium text-primary"
                  >
                    شكرًا لتواصلك معنا. يمكنك أيضًا مراسلتنا مباشرة عبر البريد الإلكتروني.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
