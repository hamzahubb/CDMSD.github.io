import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Database, ArrowLeft } from 'lucide-react';
import { ORG_DATA, EXPERTISE_SECTORS, PROJECTS, RESOURCES, NEWS_ITEMS, CMS_STATS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'CMS Data Explorer & Fact Verification Inspector',
  description: 'Inspect the structured headless content models and fact verification tiers governing the CDMSD platform.',
};

export default function AdminCMSPage() {
  const fullData = {
    organization: ORG_DATA,
    expertise: EXPERTISE_SECTORS,
    projects: PROJECTS,
    resources: RESOURCES,
    news: NEWS_ITEMS,
    statistics: CMS_STATS,
  };

  return (
    <div className="bg-slate-100 min-h-screen py-12">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-1">
              Content Governance Engine
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123047]">
              CMS Data Explorer &amp; Verification Console
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 px-4 py-2 rounded transition-colors"
          >
            <ArrowLeft size={14} />
            Return to Live Website
          </Link>
        </div>

        {/* Verification Status Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border-l-4 border-emerald-500 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                VERIFIED
              </span>
              <span className="text-2xl font-black text-emerald-700">100%</span>
            </div>
            <h3 className="text-sm font-bold text-[#123047] mb-1">Public Evidence Base</h3>
            <p className="text-xs text-slate-500">
              4 field projects, 7 geographic locations, 2013 establishment, and core mission quote verified against ALNAP/DEC, SDC, and public records.
            </p>
          </div>

          <div className="bg-white border-l-4 border-amber-500 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                CLIENT_PROVIDED
              </span>
              <span className="text-2xl font-black text-amber-700">4 Items</span>
            </div>
            <h3 className="text-sm font-bold text-[#123047] mb-1">Pending Confirmation</h3>
            <p className="text-xs text-slate-500">
              Official email, telephone, office coordinates, and executive directory reserved as placeholders.
            </p>
          </div>

          <div className="bg-white border-l-4 border-sky-500 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
                EDITORIAL
              </span>
              <span className="text-2xl font-black text-sky-700">Strict</span>
            </div>
            <h3 className="text-sm font-bold text-[#123047] mb-1">Zero Fake Metrics</h3>
            <p className="text-xs text-slate-500">
              Aggregate numbers marked as [VERIFIED DATA REQUIRED] until officially authenticated.
            </p>
          </div>
        </div>

        {/* JSON Inspector View */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Database size={18} className="text-[#168A8A]" />
              <h2 className="text-lg font-bold text-[#123047]">
                Live Next.js Data Layer Inspector (<code>lib/data.ts</code>)
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono">TypeScript Content Contract</span>
          </div>

          <pre className="bg-[#0f172a] text-[#38bdf8] p-6 rounded-lg text-xs font-mono overflow-x-auto max-h-[500px] overflow-y-auto leading-relaxed">
            {JSON.stringify(fullData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
