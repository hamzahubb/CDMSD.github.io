import type { Metadata } from 'next';
import ResourceFilterGrid from '@/components/ResourceFilterGrid';
import { RESOURCES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Knowledge Hub & Resources',
  description: 'Independent evaluation reports, resilience research studies, and training materials authored and delivered by CDMSD.',
};

export default function ResourcesPage() {
  return (
    <div>
      <section className="bg-[#123047] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E49A45] block mb-2">
            Knowledge &amp; Evidence
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Resources &amp; Knowledge Hub
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Explore independent evaluation reports, resilience research studies, training frameworks, and documented institutional literature.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <ResourceFilterGrid resources={RESOURCES} />
        </div>
      </section>
    </div>
  );
}
