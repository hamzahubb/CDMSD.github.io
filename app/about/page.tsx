import type { Metadata } from 'next';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import { ORG_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About CDMSD — Center for Disaster Management & Sustainable Development',
  description: 'Organizational background, verified mandate, quoted mission statement, and institutional fact-checking policy of CDMSD in Pakistan.',
};

export default function AboutPage() {
  const milestones = [
    {
      year: '2013',
      title: 'CDMSD Established in Pakistan',
      desc: 'Founded as a registered independent multi-disciplinary consulting firm with the mission to provide cutting edge solutions based on best practices.',
      status: 'VERIFIED',
    },
    {
      year: '2014–2015',
      title: 'Post-Flood Loss Assessment & WASH Recovery',
      desc: 'Documented professional engagement assessing loss, rural WASH access, and DRR future planning across Jhang, Muzaffargarh (Punjab), and AJK.',
      status: 'VERIFIED',
    },
    {
      year: 'Documented Evaluation',
      title: 'Thar Desert Multi-Sector Emergency Response Evaluation',
      desc: 'Commissioned as the national consultancy firm to conduct independent evaluation of multi-sector drought relief and resilience in Thar Desert, Sindh.',
      status: 'VERIFIED',
    },
    {
      year: '2019',
      title: 'SBDRM Master Trainer Certification (Islamabad)',
      desc: 'Facilitated intensive four-day School-Based Disaster Risk Management training in Islamabad, certifying 35 higher-secondary school teachers as Master Trainers.',
      status: 'VERIFIED',
    },
    {
      year: 'Documented Study',
      title: 'Bajaur & Mohmand Livelihood and DRR Study',
      desc: 'Documented evaluation titled "Livelihood and DRR Initiatives for Community Uplift in Bajaur and Mohmand Agencies" cited in SDC resilience research.',
      status: 'VERIFIED',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#123047] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E49A45] block mb-2">
            Institutional Identity
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            About CDMSD
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            A registered independent multi-disciplinary consulting firm established in Pakistan in 2013 with dedicated expertise across disaster risk management, climate adaptation, and sustainable development.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
                  Who We Are
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] mb-4">
                  Institutional Profile &amp; Founding Purpose
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  The Center for Disaster Management and Sustainable Development (CDMSD) is a registered independent multi-disciplinary consulting firm based in Pakistan.
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed">
                CDMSD was established with cross-sector expertise and experience in disaster risk management, sustainable development, disaster risk reduction (DRR), climate change adaptation, WASH, governance, and community development.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Public institutional records describe CDMSD as <em>&ldquo;the first ever consulting initiative established to provide specialized services in disaster risk management in Pakistan.&rdquo;</em>
              </p>

              {/* Mission Box */}
              <div className="bg-[#F7F8F5] border-l-4 border-[#168A8A] p-6 rounded-r-lg shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-1">
                  Our Documented Mission
                </span>
                <p className="text-lg font-semibold italic text-[#123047] mb-2 leading-relaxed">
                  &ldquo;{ORG_DATA.mission}&rdquo;
                </p>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  — Official Mission Quotation (Public Record)
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#123047] mb-3">Our Approach</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  CDMSD combines technical knowledge, field experience and multidisciplinary approaches to address disaster risk, climate vulnerability and sustainable development challenges.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our work integrates rigorous baseline assessments, international evaluation criteria (OECD-DAC / Sphere Standards), and participatory community mobilization to ensure sustainable, dignified outcomes for vulnerable populations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Scope Box */}
              <div className="bg-[#F7F8F5] border border-slate-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#123047] mb-4">Scope of Work</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  CDMSD’s documented scope ranges from <strong>grassroots-level community work</strong> to <strong>national-level medium- and short-term assignments</strong>.
                </p>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Commissioning Sectors:
                </h4>
                <div className="space-y-2.5">
                  {ORG_DATA.targetCommissioners.map((sec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#123047]">
                      <CheckCircle2 size={16} className="text-[#168A8A] shrink-0" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Institutional Independence Notice */}
              <div className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-500 rounded-r-lg p-5">
                <div className="flex items-start gap-2.5">
                  <Info size={18} className="text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-900 mb-1">
                      Institutional Independence Notice
                    </h4>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      Center for Disaster Management and Sustainable Development (CDMSD) is an independent consulting firm founded in 2013. It is distinct and separate from the academic Center for Disaster Management (CDM) at the University of Management and Technology (UMT), Lahore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Timeline */}
      <section className="py-20 bg-[#F7F8F5]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
              Milestones
            </span>
            <h2 className="text-3xl font-extrabold text-[#123047] mb-4">
              Verified Organizational Timeline
            </h2>
            <p className="text-slate-600">
              In accordance with CDMSD&rsquo;s strict fact-checking policy, this timeline contains only independently documented historical milestones.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative pl-8 border-l-2 border-slate-300 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#168A8A] shadow-sm" />
                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-[#168A8A] bg-[#e6f4f4] px-2.5 py-0.5 rounded">
                      {m.year}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      {m.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#123047] mb-2">{m.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fact-Checking Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-[#123047] rounded-r-xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-[#168A8A]" size={24} />
              <h3 className="text-xl font-bold text-[#123047]">
                Fact-Checking &amp; Evidence Transparency Policy
              </h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Every statement on this website is governed by an explicit three-tier classification standard to ensure absolute credibility for international commissioning entities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded block w-fit mb-2">
                  VERIFIED
                </span>
                <h4 className="text-sm font-bold text-[#123047] mb-1">Directly Supported</h4>
                <p className="text-xs text-slate-600">
                  Statements and deliverables verified against public records or independent evaluation reports.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded block w-fit mb-2">
                  CLIENT-PROVIDED
                </span>
                <h4 className="text-sm font-bold text-[#123047] mb-1">Official Coordination</h4>
                <p className="text-xs text-slate-600">
                  Reserved placeholders for contact coordinates and leadership directories pending official submission.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold uppercase text-sky-700 bg-sky-100 px-2 py-0.5 rounded block w-fit mb-2">
                  EDITORIAL
                </span>
                <h4 className="text-sm font-bold text-[#123047] mb-1">Contextual Framing</h4>
                <p className="text-xs text-slate-600">
                  Professional explanations and sectoral framing without asserting unverified historical claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
