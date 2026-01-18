import Section from "../layout/Section";

export default function About() {
  return (
    <Section id="about">
      <h2 className="section-title text-center mb-16">About Me</h2>

      {/* OFFSET for LEFT SIDEBAR */}
      <div className="grid lg:grid-cols-2 gap-20 items-start md:pl-24">

        {/* LEFT : IMAGE */}
        <div className="relative">
          <div
            className="
              h-[420px]
              rounded-3xl
              overflow-hidden
              border border-white/10
              bg-[#020617]
            "
          >
            <img
              src={`${import.meta.env.BASE_URL}images/about.jpeg`}
              alt="Balamurali"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT : CONTENT */}
        <div className="space-y-8">

          {/* CARD 1 */}
          <div
            className="
              flex gap-5 p-6 rounded-2xl
              bg-[#111827]
              border border-white/10
              text-slate-300 text-lg leading-relaxed
              hover:border-teal-400
              hover:shadow-[0_0_25px_-8px_rgba(45,212,191,0.4)]
              transition
            "
          >
            <span className="text-3xl">🥇</span>
            <p>
              Hello! I’m a{" "}
              <span className="text-white font-medium">
                Backend Java Engineer
              </span>{" "}
              with 3+ years of experience designing, developing, and maintaining
              scalable backend systems using{" "}
              <span className="text-teal-400">Java & Spring Boot</span>.
              I specialize in RESTful APIs, microservice-based architectures,
              and cloud-native solutions on AWS.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="
              flex gap-5 p-6 rounded-2xl
              bg-[#111827]
              border border-white/10
              text-slate-300 text-lg leading-relaxed
              hover:border-teal-400
              hover:shadow-[0_0_25px_-8px_rgba(45,212,191,0.4)]
              transition
            "
          >
            <span className="text-3xl">🥈</span>
            <p>
              I have hands-on experience with{" "}
              <span className="text-white">Apache Kafka</span> for event-driven
              systems, <span className="text-white">DynamoDB & MySQL</span> for
              data persistence, and Docker-based deployments.
              I strongly focus on clean code, performance, and maintainability.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="
              flex gap-5 p-6 rounded-2xl
              bg-[#111827]
              border border-white/10
              text-slate-300 text-lg leading-relaxed
              hover:border-teal-400
              hover:shadow-[0_0_25px_-8px_rgba(45,212,191,0.4)]
              transition
            "
          >
            <span className="text-3xl">🥉</span>
            <p>
              I’m also the creator of an{" "}
              <span className="text-white">
                open-source Spring Boot AutoConfiguration library
              </span>{" "}
              published on Maven Central that automates DynamoDB table creation,
              helping developers reduce boilerplate configuration.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}
