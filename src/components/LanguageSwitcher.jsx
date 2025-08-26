import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.language || "en").split("-")[0];

  const langs = [
    { code: "en", label: "EN" },
    { code: "ko", label: "KR" },
    { code: "uz", label: "UZ" },
  ];

  const base =
    "px-3 py-1 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/10 transition";
  const active = " bg-white/10 text-white";

  const change = (lng) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem("i18nextLng", lng);
    } catch {}
  };

  return (
    <div className="flex items-center gap-2">
      {langs.map((l) => (
        <button
          key={l.code}
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
