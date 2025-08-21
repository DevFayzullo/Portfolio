export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} DevFayzullo. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/DevFayzullo" className="hover:underline">
            GitHub
          </a>
          <a href="/resume/resume.pdf" className="hover:underline">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
