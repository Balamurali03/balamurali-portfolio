export default function Blogs() {
  return (
    <section className="section grid-bg">
      <h2 className="section-title">Blogs</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map(i=>(
          <div key={i} className="bg-[#111827] rounded-xl p-6">
            <div className="h-32 bg-gray-700 rounded mb-4" />
            <h3 className="font-semibold">Blog Title</h3>
            <p className="text-sm text-gray-400">
              Placeholder for future markdown / CMS
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
