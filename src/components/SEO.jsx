import { useTranslation } from "react-i18next";

export default function SEO({
  page = "home",
  url = "/",
  jsonLdOverride = null,
}) {
  const { t, i18n } = useTranslation();
  const titles = {
    home: t("seo.homeTitle"),
    about: t("seo.aboutTitle"),
    projects: t("seo.projectsTitle"),
    contact: t("seo.contactTitle"),
    notfound: t("seo.siteName"),
  };
  const descs = {
    home: t("seo.homeDesc"),
    about: t("seo.aboutDesc"),
    projects: t("seo.projectsDesc"),
    contact: t("seo.contactDesc"),
    notfound: t("seo.homeDesc"),
  };
  const title = titles[page] || t("seo.siteName");
  const description = descs[page] || t("seo.homeDesc");
  const locale = (i18n.language || "en").split("-")[0];

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "DevFayzullo",
    jobTitle: "Frontend Developer",
    url: url,
    sameAs: ["https://github.com/DevFayzullo"],
  };
  const jsonLd = jsonLdOverride || defaultJsonLd;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />

      <link rel="alternate" hrefLang="en" href="/en" />
      <link rel="alternate" hrefLang="ko" href="/ko" />
      <link rel="alternate" hrefLang="uz" href="/uz" />
      <link rel="alternate" hrefLang="x-default" href="/" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
