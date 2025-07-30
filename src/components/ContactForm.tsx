import { useState } from "react";
import CustomButton from "./CustomButton";

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (!form.fullName || !form.email || !form.subject || !form.message) {
      setError("Please fill out all fields.");
      clearErrorAfterTimeout();
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      clearErrorAfterTimeout();
      return;
    }

    setLoading(true);

    try {
      await fetch("https://formspree.io/f/xjkooklw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      setForm({ fullName: "", email: "", subject: "", message: "" });
      clearSuccessAfterTimeout();
    } catch {
      setError("Something went wrong. Please try again later.");
      clearErrorAfterTimeout();
    } finally {
      setLoading(false);
    }
  };

  const clearErrorAfterTimeout = () => {
    setTimeout(() => setError(""), 5000);
  };

  const clearSuccessAfterTimeout = () => {
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-10 md:py-20">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10 text-center">
          Let's talk about your project!
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div
            className="bg-cover bg-center h-[300px] md:h-auto"
            style={{ backgroundImage: "url('/tower.webp')" }}
          />

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md flex flex-col gap-4"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded h-32 resize-none"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {submitted && (
              <p className="text-green-600 text-sm">
                Your message was sent successfully!
              </p>
            )}

            <div className="mt-4">
              <CustomButton
                type="submit"
                showArrow
                disabled={loading}
                className="bg-[var(--color-primary)] p-5 cursor-pointer transform transition duration-300 hover:text-[var(--color-secondary)] disabled:opacity-50 disabled:cursor-not-allowed w-full text-white"
              >
                {loading ? "Sending..." : "Get a Quote"}
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
