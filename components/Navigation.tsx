"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const { t } = useTranslation("common");

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          Next.js 14 Multi-Language
        </Link>
        <div className="navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
              >
                {t("navigation.Home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}
              >
                {t("navigation.About")}
              </Link>
            </li>
          </ul>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
