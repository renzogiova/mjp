"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Actividades", href: "/actividades" },
  { label: "Recursos", href: "/recursos" },
  { label: "Música", href: "/musica" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Donar", href: "/donar" },
  { label: "Contacto", href: "/contacto" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  function closeOnEscape(event) {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={closeOnEscape}>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="Movimiento Juvenil Peregrinos — Inicio"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo-mjp-color.png"
            alt="Movimiento Juvenil Peregrinos"
            width={1781}
            height={1818}
            sizes="(min-width: 1024px) 56px, 48px"
            priority
            className="brand-logo"
          />
          <span className="brand-caption">Movimiento Juvenil Peregrinos</span>
        </Link>

        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="navegacion-principal"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "Cerrar" : "Menú"}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="m6 6 12 12M6 18 18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav
          id="navegacion-principal"
          className={`main-navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Principal"
        >
          <ul className="navigation-list">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`navigation-link${href === "/donar" ? " donate-link" : ""}`}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
