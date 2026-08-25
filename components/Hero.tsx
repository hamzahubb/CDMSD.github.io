'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import WorkWithUsModal from './WorkWithUsModal';
import { ORG_DATA } from '@/lib/data';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#123047] to-[#17252D] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-[#168A8A]/20 border border-[#168A8A]/40 text-[#99f6e4] text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <ShieldCheck size={15} />
              <span>Multidisciplinary Consulting Initiative &bull; Est. 2013</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
              Building Resilience. <span className="text-[#E49A45]">Advancing Sustainable Development.</span>
            </h1>

            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-2xl">
              The Center for Disaster Management &amp; Sustainable Development (CDMSD) brings multidisciplinary expertise in disaster risk management and sustainable development to support communities, institutions and development initiatives across Pakistan.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/projects"
                className="bg-[#E49A45] hover:bg-[#d98d36] text-[#0c2030] font-bold text-base px-6 py-3 rounded shadow transition-all flex items-center gap-2"
              >
                Explore Our Work
                <ArrowRight size={18} />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="border border-white/40 hover:bg-white hover:text-[#123047] text-white font-semibold text-base px-6 py-3 rounded transition-all"
              >
                Work With Us
              </button>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs text-white/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#168A8A]" />
                <span>Disaster Risk Reduction</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#168A8A]" />
                <span>Climate Adaptation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#168A8A]" />
                <span>WASH &amp; Livelihoods</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#168A8A]" />
                <span>Research &amp; ToT</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/15 rounded-xl p-8 backdrop-blur-md shadow-2xl">
              <div className="border-l-4 border-[#E49A45] pl-4 mb-6">
                <p className="text-base italic text-white/95 leading-relaxed mb-2">
                  &ldquo;{ORG_DATA.mission}&rdquo;
                </p>
                <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">
                  — Documented Mission Statement
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#168A8A]/20 text-[#168A8A] flex items-center justify-center font-bold text-sm shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Grassroots to National Scale</h4>
                    <p className="text-xs text-white/70">From community mobilization to national evaluation assignments.</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#168A8A]/20 text-[#168A8A] flex items-center justify-center font-bold text-sm shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Evidence-Driven Consulting</h4>
                    <p className="text-xs text-white/70">Methodologies aligned with Sendai &amp; OECD-DAC criteria.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkWithUsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
