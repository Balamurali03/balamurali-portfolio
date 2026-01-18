export default function Button({ children }) {
  return (
    <button className="px-6 py-3 rounded-xl bg-teal-400 text-black">
      {children}
    </button>
  );
}
