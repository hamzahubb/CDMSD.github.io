import type { Metadata } from 'next';
import Link from 'next/link';
import { NEWS_ITEMS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'News & Field Insights',
  description: 'Latest news, field updates, training notes, and organizational perspectives from CDMSD.',
};

export default function NewsPage() {
  return (
    <div>
      <section className="bg-[#123047] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E49A45] block mb-2">
            Institutional Updates
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            News &amp; Field Notes
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Updates on disaster risk management consulting, field assessments, and training assignments across Pakistan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item) => (
              <article key={item.id} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col">
                <div className="text-[11px] font-bold text-[#168A8A] uppercase mb-2">
                  {item.category} &bull; {item.date}
                </div>
                <h2 className="text-lg font-bold text-[#123047] mb-3 leading-snug">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {item.content}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                    Verified
                  </span>
                  <span className="text-xs text-slate-400 font-medium">By {item.author}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
