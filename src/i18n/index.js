import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/locales/en/common.json";
import ko from "@/locales/ko/common.json";
import uz from "@/locales/uz/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { common: en }, ko: { common: ko }, uz: { common: uz } },
    supportedLngs: ["en", "ko", "uz"],
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: { order: ["querystring", "localStorage", "navigator"] },
  });

export default i18n;
