// src/sections/ContactSection.jsx
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import { Send, Newspaper, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="mt-24 px-6 text-center">
      <SectionTitle
        emoji="📬"
        title="Contact Me"
        subtitle="Let’s work together!"
      />

      {/* Go to Contact page (Navbar route) */}
      <div className="mt-6">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                     bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          aria-label="Open Contact page">
          <Send className="h-4 w-4" />
          Open Contact Page
        </Link>
      </div>

      {/* Blogs */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <a
          href="https://t.me/your_telegram_blog" // TODO: o‘zingizning linkingiz
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium
                     border border-gray-300 dark:border-gray-700
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <Send className="h-4 w-4" />
          Telegram Blog
          <ExternalLink className="h-4 w-4 opacity-70" />
        </a>

        <a
          href="https://blog.naver.com/your_naver_id" // TODO: o‘zingizning linkingiz
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium
                     border border-gray-300 dark:border-gray-700
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <Newspaper className="h-4 w-4" />
          Naver Blog
          <ExternalLink className="h-4 w-4 opacity-70" />
        </a>
      </div>
    </section>
  );
}
