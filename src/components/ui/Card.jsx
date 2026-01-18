export default function Card({ children }) {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/10 p-6">
      {children}
    </div>
  );
}
