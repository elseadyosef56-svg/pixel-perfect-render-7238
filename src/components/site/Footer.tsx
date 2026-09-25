import { Mail, Phone } from "lucide-react";

import logo from "@/assets/logo.jpeg.asset.json";
import { company } from "./company";

export function Footer() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div className="flex items-start gap-4">
          <img
            src={logo.url}
            alt={`شعار ${company.shortName}`}
            loading="lazy"
            width={72}
            height={72}
            className="h-16 w-16 rounded-lg bg-primary-foreground/95 p-1 object-contain"
          />
          <div>
            <p className="text-lg font-extrabold">{company.shortName}</p>
            <p className="mt-2 text-xs tracking-[0.2em] text-gold-soft">{company.nameEn}</p>
            <p className="text-xs tracking-[0.2em] text-gold-soft/80">{company.taglineEn}</p>
          </div>
        </div>

        <ul className="space-y-4 md:justify-self-end">
          <li>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-3 text-sm transition-colors hover:text-gold"
            >
              <Mail className="h-5 w-5 text-gold" />
              <span dir="ltr">{company.email}</span>
            </a>
          </li>
          <li>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center gap-3 text-sm transition-colors hover:text-gold"
            >
              <Phone className="h-5 w-5 text-gold" />
              <span dir="ltr">{company.phone}</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-primary-foreground/15 px-4 py-5 text-center text-xs text-primary-foreground/75">
        © 2026 {company.shortName}. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
