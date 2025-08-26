import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher.jsx"; // ⬅️ qo'shildi

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="header-glass">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-white/10 border border-white/15">
            F
          </span>
          <span>DevFayzullo</span>
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition ${
                isActive ? "bg-white/10 text-white" : ""
              }`
            }>
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-3 py-1 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition ${
                isActive ? "bg-white/10 text-white" : ""
              }`
            }>
            {t("nav.projects")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition ${
                isActive ? "bg-white/10 text-white" : ""
              }`
            }>
            {t("nav.contact")}
          </NavLink>

          {/* ⬇️ Til tugmalari — faqat headerda */}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
