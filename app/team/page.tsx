import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldAlert, CloudSun, Droplets, Users, Wheat, BookOpen } from 'lucide-react';
import { ORG_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Multidisciplinary Team & Expert Network',
  description: 'Multidisciplinary technical expert roster spanning disaster risk management, climate adaptation, WASH, and community resilience in Pakistan.',
};

export default function TeamPage() {
  const disciplines = [
    { title: 'Disaster Risk Management (DRM)', desc: 'Certified CBDRM/SBDRM master trainers, hazard modelers, and emergency contingency planners.', icon: ShieldAlert },
    { title: 'Climate Change Adaptation (CVRA)', desc: 'Environmental scientists, climate vulnerability assessors, and drought resilience policy specialists.', icon: CloudSun },
    { title: 'WASH & Public Health Engineering', desc: 'Water supply engineers, sanitation evaluators, and public health hygiene promotion specialists.', icon: Droplets },
    { title: 'Community Development & Gender', desc: 'Social mobilizers, PRA practitioners, and gender-inclusive protection specialists.', icon: Users },
    { title: 'Food Security & Livelihoods', desc: 'Agronomists, rural economists, and sustainable livelihood assessment specialists.', icon: Wheat },
    { title: 'Monitoring, Evaluation & Learning (MEL)', desc: 'OECD-DAC third-party evaluators, survey statisticians, and qualitative field researchers.', icon: BookOpen },
  ];

  return (
    <div>
      <section className="bg-[#123047] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E49A45] block mb-2">
            Human Capital &amp; Expertise
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Our Multidisciplinary Team
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Our multidisciplinary team brings expertise across disaster risk management, climate change, WASH, community development, livelihoods, governance, research and training.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Official Placeholder Notice */}
          <div className="bg-[#F7F8F5] border border-dashed border-slate-300 rounded-xl p-8 text-center max-w-3xl mx-auto mb-16 shadow-sm">
            <span className="text-xs font-bold uppercase text-slate-600 bg-slate-200 px-2.5 py-1 rounded inline-block mb-3">
              Official Directory Notice
            </span>
            <h2 className="text-xl font-bold text-[#123047] mb-2">
              {ORG_DATA.placeholders.leadership}
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
              In strict compliance with CDMSD&rsquo;s fact-checking policy, individual executive leadership profiles are reserved until verified and provided directly by CDMSD management.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/careers"
                className="bg-[#168A8A] hover:bg-[#0f6363] text-white text-xs font-semibold px-4 py-2 rounded transition-colors"
              >
                Join Technical Consultant Roster
              </Link>
              <Link
                href="/contact"
                className="border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-2 rounded transition-colors"
              >
                Request Expert Profile Roster
              </Link>
            </div>
          </div>

          {/* Expert Disciplines */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
              Technical Roster
            </span>
            <h2 className="text-3xl font-extrabold text-[#123047] mb-2">
              Core Disciplines in our Expert Network
            </h2>
            <p className="text-slate-600">
              CDMSD deploys specialized consultants with deep contextual knowledge across Pakistan&rsquo;s diverse hazard zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {disciplines.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                  <div className="w-10 h-10 rounded bg-[#e6f4f4] text-[#168A8A] flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#123047] mb-2">{d.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
