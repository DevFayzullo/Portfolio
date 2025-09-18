import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/locales/en/common.json";
import ko from "@/locales/ko/common.json";
import uz from "@/locales/uz/common.json";
import ru from "@/locales/ru/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      ko: { common: ko },
      uz: { common: uz },
      ru: { common: ru },
    },
    supportedLngs: ["en", "ko", "uz", "ru"],
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: { order: ["querystring", "localStorage", "navigator"] },
  });

export default i18n;
