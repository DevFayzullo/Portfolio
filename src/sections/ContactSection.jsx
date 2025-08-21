import SectionTitle from "../components/SectionTitle.jsx";

export default function ContactSection({ variant = "full" }) {
  return (
    <section id="contact" className="mt-24 px-6 text-center">
      <SectionTitle
        emoji="📬"
        title="Contact Me"
        subtitle="Let’s work together!"
      />

      {variant === "full" ? (
        <div className="mt-8">
          <form
            className="mx-auto max-w-lg flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (Connect EmailJS here)");
            }}>
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-xl border px-4 py-2 dark:border-gray-700 dark:bg-gray-900"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-xl border px-4 py-2 dark:border-gray-700 dark:bg-gray-900"
              required
            />
            <textarea
              placeholder="Your Message"
              className="rounded-xl border px-4 py-2 h-32 dark:border-gray-700 dark:bg-gray-900"
              required
            />
            <button
              type="submit"
              className="mt-2 rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      ) : (
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="mailto:youremail@example.com"
            className="text-blue-600 hover:underline">
            Email
          </a>
          <a
            href="https://github.com/DevFayzullo"
            className="text-blue-600 hover:underline">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="text-blue-600 hover:underline">
            LinkedIn
          </a>
        </div>
      )}
    </section>
  );
}
