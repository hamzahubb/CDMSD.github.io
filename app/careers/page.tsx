'use client';

import React, { useState } from 'react';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import ConsultantRosterModal from '@/components/ConsultantRosterModal';
import { ORG_DATA } from '@/lib/data';

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div>
        <section className="bg-[#123047] text-white py-16">
          <div className="max-w-[1240px] mx-auto px-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E49A45] block mb-2">
              Opportunities &amp; Roster
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Careers &amp; Expert Network
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Collaborate with CDMSD on cutting-edge disaster management consulting, third-party evaluations, and capacity development initiatives.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-6">
            {/* Vacancies Status */}
            <div className="bg-[#F7F8F5] border border-slate-200 rounded-xl p-10 text-center max-w-2xl mx-auto mb-16 shadow-sm">
              <Briefcase size={36} className="text-[#168A8A] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#123047] mb-2">
                No current vacancies have been published.
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Please check back for future opportunities or register for our short-term Consultant Roster to be considered for upcoming consulting assignments across Pakistan.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#168A8A] hover:bg-[#0f6363] text-white font-semibold text-sm px-6 py-2.5 rounded shadow transition-colors"
              >
                Register on Consultant Roster
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
                  Consultancy Opportunities
                </span>
                <h3 className="text-2xl font-bold text-[#123047] mb-4">
                  Short- &amp; Medium-Term Technical Assignments
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  CDMSD regularly engages national and international consultants for field evaluations, baseline surveys, curriculum authoring, and training delivery.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-[#168A8A] shrink-0 mt-0.5" />
                    <span>Disaster Risk Reduction (DRR / DRM) &amp; Hazard Modeling</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-[#168A8A] shrink-0 mt-0.5" />
                    <span>Climate Vulnerability and Adaptation Assessments (CVRA)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-[#168A8A] shrink-0 mt-0.5" />
                    <span>WASH &amp; Public Health Technical Infrastructure Monitoring</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-[#168A8A] shrink-0 mt-0.5" />
                    <span>Emergency Food Security and Livelihoods (EFSL)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-[#168A8A] shrink-0 mt-0.5" />
                    <span>Monitoring, Evaluation &amp; Learning (MEL / OECD-DAC)</span>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-[#123047] hover:bg-[#0c2030] text-white font-semibold text-sm px-6 py-3 rounded flex items-center gap-2 transition-colors"
                >
                  Submit Profile to Roster
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="bg-[#F7F8F5] border border-slate-200 rounded-xl p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
                  Capacity Building
                </span>
                <h3 className="text-xl font-bold text-[#123047] mb-3">
                  Research Internships
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  CDMSD periodically offers structured research internships for post-graduate students in disaster management, environmental sciences, development studies, and public policy.
                </p>
                <h4 className="text-xs font-bold text-[#123047] uppercase tracking-wider mb-2">
                  How to Apply
                </h4>
                <p className="text-xs text-slate-600 mb-3">
                  Submit your statement of research interest and academic CV to:
                </p>
                <div className="font-mono text-xs text-slate-700 bg-white p-3 rounded border border-dashed border-slate-300">
                  {ORG_DATA.placeholders.email}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ConsultantRosterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
