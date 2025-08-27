import { useTranslation } from "react-i18next";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  FileDown,
} from "lucide-react";

const socials = [
  { name: "Email", href: "mailto:fayzullo.coder@gmail.com", icon: Mail },
  { name: "GitHub", href: "https://github.com/DevFayzullo", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abduganiev-fayzullo",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/abduganiyevfayzullo",
    icon: Instagram,
  },
  { name: "X", href: "https://x.com/FayzulloDev", icon: Twitter },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const resumes = [
    { name: t("footer.resumeEn"), href: "/resume/resume.pdf" },
    { name: t("footer.resumeKr"), href: "/resume/resume-kr.pdf" },
  ];

  return (
    <footer className="mt-24">
      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Social icons */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex justify-center">
        <ul className="flex items-center gap-5">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={s.name}
                className="group inline-flex items-center justify-center h-11 w-11 rounded-xl
                           text-gray-600 dark:text-gray-300
                           hover:text-blue-600 dark:hover:text-blue-400
                           hover:-translate-y-0.5 hover:scale-110
                           transition transform-gpu
                           hover:bg-gray-100 dark:hover:bg-gray-800">
                <s.icon className="h-5 w-5" />
                <span className="sr-only">{s.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Resume download */}
      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="flex justify-center gap-6 mt-4">
        {resumes.map((r) => (
          <a
            key={r.name}
            href={r.href}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                       text-gray-700 dark:text-gray-300
                       hover:text-blue-600 dark:hover:text-blue-400
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       transition">
            <FileDown className="h-4 w-4" />
            {r.name}
          </a>
        ))}
      </div>

      <div className="py-6 text-sm flex items-center justify-center">
        {/* i18n interpolation: "© {{year}} DevFayzullo. All rights reserved." */}
        <p>{t("footer.rights", { year })}</p>
      </div>
    </footer>
  );
}
