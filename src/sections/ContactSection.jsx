import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Send, Newspaper, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mt-24 px-6 text-center">
      {/* Eski SectionTitle o‘rniga i18n bilan sarlavha/subtitle */}
      <h2 className="text-3xl md:text-4xl font-bold">
        📬 {t("contact.heading")}
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {t("contact.sub")}
      </p>

      <div className="mt-6">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                     bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          aria-label={t("contact.openPageAria")}>
          <Send className="h-4 w-4" />
          {t("contact.openPage")}
        </Link>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <a
          href="https://t.me/devFayzullo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium
                     border border-gray-300 dark:border-gray-700
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label={t("contact.telegramAria")}>
          <Send className="h-4 w-4" />
          {t("contact.telegram")}
          <ExternalLink className="h-4 w-4 opacity-70" />
        </a>

        <a
          href="https://blog.naver.com/devfayzullo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium
                     border border-gray-300 dark:border-gray-700
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label={t("contact.naverAria")}>
          <Newspaper className="h-4 w-4" />
          {t("contact.naver")}
          <ExternalLink className="h-4 w-4 opacity-70" />
        </a>
      </div>
    </section>
  );
}
