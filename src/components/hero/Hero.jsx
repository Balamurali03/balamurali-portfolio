import { useState } from "react";
import {
  HiHome,
  HiUser,
  HiCode,
  HiBriefcase,
  HiMenuAlt2,
  HiX,
} from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import { RiContactsBookFill } from "react-icons/ri";

const navItems = [
  { id: "home", icon: <HiHome /> },
  { id: "about", icon: <HiUser /> },
  { id: "skills", icon: <HiCode /> },
  { id: "experience", icon: <HiBriefcase /> },
  { id: "projects", icon: <GiTrophyCup /> },
  { id: "contact", icon: <RiContactsBookFill /> },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start md:items-center pt-24 md:pt-0 bg-[#0b0f1a]"
    >
      {/* LEFT ICON RAIL */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col items-center gap-3">
          {/* TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="w-11 h-11 rounded-xl border border-teal-400/40
                       flex items-center justify-center text-teal-400
                       hover:bg-teal-400 hover:text-black transition"
          >
            {open ? <HiX /> : <HiMenuAlt2 />}
          </button>

          {/* ICONS */}
          <div
            className={`flex flex-col gap-3 transition-all duration-300
              ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
            `}
          >
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(item.id)}
                className="w-11 h-11 rounded-xl border border-teal-400/30
                           flex items-center justify-center text-teal-400
                           hover:bg-teal-400 hover:text-black transition"
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* TEXT */}
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold">
           Software Developer
          </h1>

          <p className="mt-6 text-xl">
            Hey <br />
            I’m <span className="text-teal-400">Balamurali</span>, <br />
            JAVA Full Stack Developer
          </p>

          <p className="mt-6 text-gray-400 max-w-md">
            I love building clean backend systems and modern user experiences.
          </p>

          <button
            onClick={() => scrollTo("contact")}
            className="mt-8 px-6 py-3 border border-teal-400 text-teal-400
                       rounded-full hover:bg-teal-400 hover:text-black transition"
          >
            Let’s Talk
          </button>
        </div>

        {/* PROFILE CARD */}
        <div className="relative flex justify-center animate-float">
          <div className="w-72 h-96 border-2 border-teal-400
                          rounded-[140px] flex flex-col items-center
                          justify-center glow relative overflow-hidden">

            {/* IMAGE */}
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border border-white/20">
              <img
                src={`${import.meta.env.BASE_URL}images/about.jpeg`}
                alt="Balamurali"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-semibold">Balamurali</h3>
            <p className="text-sm text-gray-400">Backend Engineer</p>

            <a
              href="/Balamurali_R_Backend_Engineer.pdf"
              download
              className="mt-6 px-5 py-2 bg-white text-black rounded-full text-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
