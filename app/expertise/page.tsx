import type { Metadata } from 'next';
import ExpertiseCard from '@/components/ExpertiseCard';
import { EXPERTISE_SECTORS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Areas of Expertise — Technical Practice Domains',
  description: 'CDMSD core consulting capabilities across disaster risk reduction, climate adaptation, WASH, community development, livelihoods, and research in Pakistan.',
};

export default function ExpertiseHubPage() {
  return (
    <div>
      <section className="bg-[#123047] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E49A45] block mb-2">
            Technical Practice Areas
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Areas of Expertise
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            CDMSD provides evidence-based consulting, third-party evaluations, and technical capacity building across seven interconnected domains in Pakistan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERTISE_SECTORS.map((sector) => (
              <ExpertiseCard key={sector.id} sector={sector} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
