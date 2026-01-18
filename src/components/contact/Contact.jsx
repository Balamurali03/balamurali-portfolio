import Section from "../layout/Section";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    icon: <FaEnvelope />,
    href: "mailto:balamurali03101997@gmail.com",
  },
  {
    label: "Phone",
    icon: <FaPhone />,
    href: "tel:+916381547878",
  },
  {
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/916381547878",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/Balamurali03",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/bala-murali-a56b55168/",
  },
  {
    label: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/murali_3_10",
  },
];

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    window.location.href = `mailto:balamurali03101997@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact" className="md:pl-24">
      <h2 className="section-title text-center mb-16">Contact</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT — CONTACT FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            required
            className="w-full px-4 py-3 rounded-lg bg-[#111827] text-white
                       outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            required
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-[#111827] text-white
                       outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            required
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-[#111827] text-white
                       outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            className="px-8 py-3 bg-teal-400 text-black rounded-xl
                       hover:bg-teal-300 transition"
          >
            Send Message
          </button>
        </form>


        {/* RIGHT — 2x3 ICON GRID */}
        <div className="grid grid-cols-2 gap-6">
          {contacts.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="
                group flex items-center gap-4
                px-5 py-4 rounded-xl
                border border-teal-400/20
                text-teal-400
                hover:bg-teal-400 hover:text-black
                transition
              "
            >
              <span className="text-2xl group-hover:scale-110 transition">
                {item.icon}
              </span>

              <span className="font-medium text-base">
                {item.label}
              </span>
            </a>
          ))}
        </div>

      </div>
    </Section>
  );
}
