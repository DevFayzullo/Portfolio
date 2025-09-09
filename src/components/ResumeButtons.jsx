import { useTranslation } from "react-i18next";

export default function ResumeButtons({
  cvUrl = "/cv.pdf",
  resumeUrl = "/resume.pdf",
}) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={cvUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium
                   border hover:shadow transition"
        aria-label={t("about.downloadCv")}>
        {t("about.downloadCv")}
      </a>

      <a
        href={resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium
                   bg-blue-600 text-white hover:bg-blue-700 transition"
        aria-label={t("about.viewResume")}>
        {t("about.viewResume")}
      </a>
    </div>
  );
}
