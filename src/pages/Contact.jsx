import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="mt-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle
          emoji="📬"
          title="Contact Me"
          subtitle="Let’s work together!"
        />
      </div>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="mx-auto mt-8 max-w-xl space-y-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        {/* Honeypot (spamdan himoya) */}
        <input
          type="text"
          name="_gotcha"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="text-left">
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border px-4 py-2 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>
          <div className="text-left">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border px-4 py-2 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>
        </div>

        <div className="text-left">
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            required
            rows="6"
            placeholder="Tell me about your project…"
            className="w-full rounded-xl border px-4 py-2 dark:border-gray-700 dark:bg-gray-900"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold
                     bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed
                     transition-colors"
          aria-busy={status === "loading"}>
          <Send className="h-4 w-4" />
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-600 dark:text-green-400 text-sm">
            Thanks! Your message was sent successfully.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 text-sm">
            Oops, something went wrong. Please try again or email me directly.
          </p>
        )}
      </form>
    </section>
  );
}
