import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo.jpeg.asset.json";
import { company } from "./company";

const navLinks: { label: string; hash?: string }[] = [
  { label: "الرئيسية" },
  { label: "عن الشركة", hash: "about" },
  { label: "مجالات العمل", hash: "scopes" },
];


export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 shadow-elegant backdrop-blur-md" : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label={company.shortName}>
          <img
            src={logo.url}
            alt={`شعار ${company.shortName}`}
            width={56}
            height={56}
            className="h-12 w-12 rounded-md object-contain sm:h-14 sm:w-14"
          />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-primary sm:text-base">
              {company.shortName}
            </span>
            <span className="block text-[10px] tracking-[0.18em] text-muted-foreground sm:text-[11px]">
              {company.nameEn}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to="/"
              {...(item.hash ? { hash: item.hash } : {})}

              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
          >
            التواصل
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5 hover:bg-navy-deep"
          >
            <Phone className="h-4 w-4 text-gold" />
            تواصل معنا
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-lg border border-border p-2.5 text-primary transition-colors hover:bg-secondary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 pb-5 pt-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to="/"
                  {...(item.hash ? { hash: item.hash } : {})}

                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-accent"
              >
                التواصل
              </Link>
            </li>
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
              >
                <Phone className="h-4 w-4 text-gold" />
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
