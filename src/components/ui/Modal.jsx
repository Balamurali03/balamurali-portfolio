export default function Modal({ open, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-[#111827] p-6 rounded-xl">
        {children}
      </div>
    </div>
  );
}
