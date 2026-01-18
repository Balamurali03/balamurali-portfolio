import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

const contacts = [
  { label: "Home", href: "#home" },
  { label: "Blogs", href: "#blogs" },
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

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b1118]/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <span className="text-teal-400 font-semibold tracking-wide">
          &lt;/&gt; Balamurali
        </span>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-gray-400">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              title={item.label}
              className={`
                text-sm font-medium transition
                hover:text-teal-400
                ${item.icon ? "group" : ""}
              `}
            >
              {item.icon ? (
                <span
                  className="
                    text-lg
                    transition
                    group-hover:text-teal-400
                    group-hover:scale-110
                    group-hover:drop-shadow-[0_0_6px_rgba(45,212,191,0.6)]
                  "
                >
                  {item.icon}
                </span>
              ) : (
                item.label
              )}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
