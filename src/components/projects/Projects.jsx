import Section from "../layout/Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AWS DynamoDB Auto Table Creator",
    badge: "OSS • Maven Central",
    impact: "Zero manual AWS setup • Plug-and-play annotations",
    description:
      "Annotation-driven Spring Boot AutoConfiguration library that automatically creates DynamoDB tables at startup. Eliminates manual AWS console and infrastructure setup.",
    tech: ["Spring Boot", "AWS DynamoDB", "Annotations", "AutoConfiguration"],
    github: "https://github.com/Balamurali03/aws-dynamodb-auto-table",
    live: "https://central.sonatype.com/artifact/io.github.balamurali03/aws-dynamodb-auto-table",
    highlight: true
  },
  {
    title: "JWT Security & Role-Based Authentication",
    badge: "Full Stack",
    description:
      "Complete authentication system with JWT, role-based authorization, secured APIs, and frontend integration.",
    tech: ["Spring Security", "JWT", "RBAC", "React"],
    github: "https://github.com/Balamurali03/ComprehensiveTaskManagerWebApplication"
  },
  {
    title: "QR Code Generator",
    badge: "Utility App",
    description:
      "Web application to dynamically generate QR codes for URLs with a clean UI and backend processing.",
    tech: ["React", "Java", "REST API"],
    github: "https://github.com/Balamurali03/QR-Generator"
  },
  {
    title: "FLAMES Game",
    badge: "Logic Based",
    description:
      "Classic FLAMES relationship game implemented using clean logic and simple UI.",
    tech: ["Java", "Logic Design"],
    github: "https://github.com/Balamurali03/Flames"
  },
  {
    title: "Microservices with Kong Gateway",
    badge: "In Progress",
    description:
      "Scalable microservice architecture using Kong API Gateway, service discovery, and centralized authentication.",
    tech: ["Microservices", "Kong", "Spring Boot"],
    github: "#"
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="md:pl-24">
      <h2 className="section-title text-center mb-10">Works</h2>

      <div className="
  flex gap-6
  overflow-x-auto
  pt-6 pb-8
  pl-6 pr-6     /* 👈 IMPORTANT */
  scrollbar-hide
">

        {projects.map((p, i) => (
          <div
            key={i}
            className={`min-w-[340px] max-w-[340px] rounded-2xl p-6 bg-gradient-to-br
              ${
                p.highlight
                  ? "from-cyan-500/20 to-blue-500/10 border border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.15)] scale-[1.02]"
                  : "from-slate-800/60 to-slate-900/60 border border-white/10"
              }
              transition-all hover:scale-[1.03]
            `}
          >
            {/* Badge */}
            <div
              className={`text-sm mb-2 font-medium ${
                p.badge === "In Progress"
                  ? "text-yellow-400 animate-pulse"
                  : "text-cyan-400"
              }`}
            >
              {p.badge}
            </div>

            {/* Featured Label */}
            {p.highlight && (
              <p className="text-xs uppercase tracking-widest text-cyan-300 mb-2">
                Featured Project
              </p>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-2">
              {p.title}
            </h3>

            {/* Impact Line */}
            {p.impact && (
              <p className="text-xs text-teal-300 font-medium mb-3">
                {p.impact}
              </p>
            )}

            {/* Description */}
            <p className="text-slate-300 text-sm mb-4">
              {p.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-700/60 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              {p.github !== "#" && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-5 py-2 rounded-full
                    bg-teal-400 text-black text-sm font-medium
                    hover:bg-teal-300 transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>
              )}

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-5 py-2 rounded-full
                    border border-white/20
                    text-white text-sm
                    hover:border-teal-400 hover:text-teal-300 transition
                  "
                >
                  <FaExternalLinkAlt />
                  Maven Central
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
