import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.language || "en").split("-")[0];

  const langs = [
    { code: "en", label: "EN" },
    { code: "ko", label: "KR" },
    { code: "uz", label: "UZ" },
    { code: "ru", label: "RU" },
  ];

  const base =
    "px-3 py-2 rounded-xl transition-colors hover:bg-gray-100 dark:hover:bg-gray-800";
  const active = " bg-gray-100 dark:bg-gray-800";

  const change = (lng) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem("i18nextLng", lng);
    } catch {}
  };

  return (
    <div className="flex items-center gap-1">
      {langs.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => change(l.code)}
          className={base + (current === l.code ? active : "")}
          aria-current={current === l.code ? "true" : "false"}
          aria-label={`Switch language to ${l.label}`}>
          {l.label}
        </button>
      ))}
    </div>
  );
}
