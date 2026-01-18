export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative py-[140px] px-6 max-w-[1200px] mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
