export default function ArchitectureModal({ open, onClose, architecture }) {
if (!open) return null;


return (
<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
<div className="bg-slate-900 rounded-xl p-6 max-w-lg w-full">
<h3 className="text-xl font-semibold mb-4">Architecture Overview</h3>
<pre className="text-sm text-slate-300 whitespace-pre-wrap">
{architecture}
</pre>
<button
onClick={onClose}
className="mt-4 px-4 py-2 rounded bg-teal-400 text-black"
>
Close
</button>
</div>
</div>
);
}