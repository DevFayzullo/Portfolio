export default function ResumeButtons() {
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <a
        href="/resume/resume.pdf"
        download
        className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                   bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        aria-label="Download Resume (EN)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M12 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-4.004 4.004a1 1 0 01-1.414 0l-4.004-4.004a1 1 0 111.414-1.414L11 13.586V4a1 1 0 011-1z" />
          <path d="M5 20a1 1 0 100-2h14a1 1 0 100 2H5z" />
        </svg>
        Resume
      </a>
      <a
        href="/resume/resume-kr.pdf"
        download
        className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                   border border-gray-300 dark:border-gray-700
                   hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Download Resume (KR)">
        🇰🇷 Resume‑KR
      </a>
    </div>
  );
}
