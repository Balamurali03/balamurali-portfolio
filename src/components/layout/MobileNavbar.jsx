import { useState } from "react";
import {
  HiHome,
  HiUser,
  HiCode,
  HiBriefcase
} from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import { RiContactsBookFill } from "react-icons/ri";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: <HiHome /> },
    { id: "summary", label: "Summary", icon: <HiUser /> },
    { id: "skills", label: "Skills", icon: <HiCode /> },
    { id: "experience", label: "Experience", icon: <HiBriefcase /> },
    { id: "projects", label: "Works", icon: <GiTrophyCup /> },
    { id: "contact", label: "Contact", icon: <RiContactsBookFill /> },
  ];

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 
                      bg-[#0b1220]/90 backdrop-blur border-b border-white/10">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-2 text-cyan-400 font-semibold text-lg">
          <span className="text-xl">&lt;/&gt;</span>
          <span>Balamurali</span>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg bg-slate-800 text-white"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="bg-[#0b1220]/95 backdrop-blur 
                        border-b border-white/10 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="
                flex items-center gap-3 px-6 py-4
                text-slate-300 hover:text-white
                hover:bg-slate-800/60 transition
              "
            >
              <span className="text-lg text-cyan-400">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
