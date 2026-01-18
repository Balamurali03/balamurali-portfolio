import {
  FaJava,
  FaAws,
  FaDocker,
  FaReact,
  FaJenkins,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiApachekafka,
  SiMysql,
  SiHibernate,
  SiAmazondynamodb,
  SiRedhat,
  SiJavascript,
} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GiOctopus } from "react-icons/gi";
import { FaMaxcdn } from "react-icons/fa6";

/* ICON + META */
const skillIcons = {
  "Java (8,17)": { icon: <FaJava />, meta: "3+ yrs" },
  "Spring Boot": { icon: <BiLogoSpringBoot />, meta: "3+ yrs" },
  "REST APIs": { icon: <SiSpringboot />, meta: "Advanced" },
  Microservices: { icon: <FaProjectDiagram />, meta: "Advanced" },

  Hibernate: { icon: <SiHibernate />, meta: "2+ yrs" },
  Maven: { icon: <FaMaxcdn />, meta: "2+ yrs" },
  Kafka: { icon: <SiApachekafka />, meta: "2+ yrs" },
  DynamoDB: { icon: <SiAmazondynamodb />, meta: "2+ yrs" },
  MySQL: { icon: <SiMysql />, meta: "3 yrs" },

  Docker: { icon: <FaDocker />, meta: "2+ yrs" },
  OpenShift: { icon: <SiRedhat />, meta: "1+ yr" },
  Jenkins: { icon: <FaJenkins />, meta: "2 yrs" },
  AWS: { icon: <FaAws />, meta: "2+ yrs" },
  "Docker Compose": { icon: <GiOctopus />, meta: "1+ yr" },

  JavaScript: { icon: <SiJavascript />, meta: "2 yrs" },
  React: { icon: <FaReact />, meta: "2 yrs" },
};

/* GROUPS */
const groups = {
  Primary: ["Java (8,17)", "Spring Boot", "REST APIs", "Microservices"],
  Secondary: ["Hibernate", "Maven", "Kafka", "DynamoDB", "MySQL"],
  DevOps: ["Docker", "OpenShift", "Jenkins", "AWS", "Docker Compose"],
  Support: ["JavaScript", "React"],
};

export default function Skills() {
  return (
    <section id="skills" className="section md:pl-24">
      <h2 className="section-title mb-20">Skills</h2>

      <div className="space-y-24">
        {Object.entries(groups).map(([groupName, skills], idx) => (
          <div
            key={groupName}
            className="animate-fadeUp"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            {/* GROUP TITLE */}
            <h3
              className={`text-xl font-semibold mb-10
              ${groupName === "Primary" ? "text-teal-300" : "text-teal-400"}`}
            >
              {groupName}
            </h3>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill) => {
                const isPrimary = groupName === "Primary";
                const isAdvanced =
                  skillIcons[skill].meta === "Advanced";

                return (
                  <div
                    key={skill}
                    className={`
                      group relative
                      min-h-[140px]
                      flex flex-col items-center justify-center gap-4
                      p-6 rounded-xl
                      border
                      text-center
                      transition-all duration-300
                      ${
                        isPrimary
                          ? "bg-gradient-to-br from-[#0f172a] to-[#020617] border-teal-400/40 shadow-[0_0_30px_rgba(45,212,191,0.2)]"
                          : "bg-[#111827] border-white/10"
                      }
                      hover:border-teal-400
                      hover:shadow-[0_0_40px_rgba(45,212,191,0.35)]
                    `}
                  >
                    {/* ADVANCED BADGE */}
                    {isAdvanced && (
                      <span
                        className="
                          absolute top-2 right-3
                          text-[10px] px-2 py-0.5 rounded-full
                          bg-teal-400/10 text-teal-300
                          border border-teal-400/40
                        "
                      >
                        Advanced
                      </span>
                    )}

                    {/* ICON */}
                    <div
                      className={`
                        text-3xl
                        transition-transform duration-300
                        group-hover:scale-110
                        ${isPrimary ? "text-teal-300" : "text-slate-200"}
                      `}
                    >
                      {skillIcons[skill].icon}
                    </div>

                    {/* LABEL */}
                    <span className="text-sm text-slate-200">
                      {skill}
                    </span>

                    {/* META */}
                    {!isAdvanced && (
                      <span className="text-xs text-slate-400">
                        {skillIcons[skill].meta}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
