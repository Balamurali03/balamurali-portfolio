import Section from "../layout/Section";
import { motion } from "framer-motion";

const experience = [
  {
    company: "DEXTRIS Infoservices Pvt Ltd",
    role: "Software Engineer",
    period: "Jan 2024 – Present",
    points: [
      "Developing and maintaining scalable backend services using Java and Spring Boot.",
      "Designing RESTful APIs and microservices for enterprise and automotive domain clients.",
      "Implementing asynchronous communication using Apache Kafka.",
      "Integrating AWS services including DynamoDB, EC2, and S3.",
      "Following clean architecture principles and best coding practices."
    ]
  },
  {
    company: "Career Break (Upskilling Phase)",
    role: "Backend Engineering Focus",
    period: "Jul 2023 – Dec 2023",
    points: [
      "Strengthened expertise in Java, Spring Boot, and Microservices architecture.",
      "Built personal projects and contributed to open-source repositories.",
      "Focused on cloud-native design and distributed system fundamentals."
    ]
  },
  {
    company: "DheeYantra Research Labs Pvt Ltd",
    role: "Software Engineer",
    period: "Aug 2022 – Jun 2023",
    points: [
      "Designed and implemented backend services using Java and Spring Boot.",
      "Developed REST APIs and handled database integrations.",
      "Collaborated with cross-functional teams to deliver production-ready solutions."
    ]
  },
  {
    company: "JSpiders – Java Full Stack Internship",
    role: "Intern",
    period: "",
    points: [
      "Trained in Java, Spring, SQL, HTML, CSS, and JavaScript.",
      "Built full-stack applications with proper documentation and best practices."
    ]
  }
];

export default function Experience() {
  return (
    <Section id="experience" className="md:pl-24">
      <h2 className="section-title mb-20">Experience</h2>

      <div className="space-y-12 max-w-5xl">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="
              relative
              p-8 rounded-2xl
              bg-[#0f172a]
              border border-white/10
              hover:border-teal-400/40
              hover:shadow-[0_0_40px_rgba(45,212,191,0.15)]
              transition
            "
          >
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.company}
                </h3>
                {item.role && (
                  <p className="text-sm text-teal-300 font-medium">
                    {item.role}
                  </p>
                )}
              </div>

              {item.period && (
                <span className="text-sm text-slate-400">
                  {item.period}
                </span>
              )}
            </div>

            {/* BULLETS */}
            <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
