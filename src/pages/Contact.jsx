import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO.jsx";

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800)); // demo
    setStatus("idle");
    formRef.current?.reset();
  }

  return (
    <>
      <SEO page="contact" url="/contact" />

      <section className="container pt-28 pb-24 text-center">
        <h1 className="text-3xl font-bold">📬 {t("contact.heading")}</h1>
        <p className="subtle mt-2">{t("contact.sub")}</p>

        <div className="mt-8 form-card text-left max-w-3xl mx-auto">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm block mb-1">Name</label>
              <input
                name="name"
                className="input"
                placeholder={t("form.name")}
                required
              />
            </div>
            <div>
              <label className="text-sm block mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder={t("form.email")}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm block mb-1">Message</label>
              <textarea
                rows="6"
                name="message"
                className="input"
                placeholder={t("form.message")}
                required
              />
            </div>
            <div className="md:col-span-2">
              <button
                disabled={status === "loading"}
                className="btn btn-primary">
                {status === "loading"
                  ? t("contact.sending")
                  : t("contact.send")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
