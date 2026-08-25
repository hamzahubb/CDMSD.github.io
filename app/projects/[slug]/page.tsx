import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import { PROJECTS } from '@/lib/data';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Details' };

  return {
    title: `${project.shortTitle} — Documented Experience`,
    description: project.overview,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div>
      {/* Header */}
      <section className="bg-[#123047] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase text-[#E49A45] hover:underline mb-4"
          >
            <ArrowLeft size={14} />
            Back to All Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded">
              {project.verificationStatus}
            </span>
            <span className="text-xs text-white/70 flex items-center gap-1">
              <MapPin size={13} className="text-[#168A8A]" />
              {project.location}
            </span>
            <span className="text-xs text-white/70 flex items-center gap-1">
              <Calendar size={13} className="text-[#168A8A]" />
              {project.period}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-4xl leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
                  Assignment Overview
                </span>
                <h2 className="text-2xl font-bold text-[#123047] mb-3">
                  Context &amp; Objectives
                </h2>
                <p className="text-slate-700 leading-relaxed text-base">
                  {project.overview}
                </p>
              </div>

              {/* Verified Deliverables Box */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="text-emerald-700" size={20} />
                  <h3 className="text-lg font-bold text-emerald-900">
                    Verified Deliverables &amp; Facts
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {project.verifiedFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-emerald-950">
                      <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#123047] mb-3">
                  CDMSD Documented Role &amp; Activities
                </h3>
                <p className="text-sm font-semibold text-slate-700 mb-3">
                  Role: <span className="font-normal text-slate-600">{project.role}</span>
                </p>
                <div className="space-y-2.5">
                  {project.activities.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#168A8A] mt-2 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Source Transparency */}
              <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-[#168A8A] p-5 rounded-r-lg">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Source Reference &amp; Evidence Transparency
                </h4>
                <p className="text-sm text-slate-800 mb-1 font-semibold">
                  {project.sourceMetadata.sourceName}
                </p>
                <p className="text-xs text-slate-500 mb-2">
                  {project.sourceMetadata.details}
                </p>
                <div className="text-[11px] text-emerald-700 font-semibold">
                  Confidence: {project.sourceMetadata.confidence}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F7F8F5] border border-slate-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#123047] mb-4 pb-2 border-b-2 border-[#168A8A]">
                  Assignment Metadata
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block">Location</span>
                    <strong className="text-slate-800">{project.location}</strong>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Region</span>
                    <strong className="text-slate-800">{project.region}</strong>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Sector</span>
                    <strong className="text-slate-800">{project.sector}</strong>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Deliverables</span>
                    <span className="text-xs text-slate-700 leading-relaxed block">{project.deliverables}</span>
                  </div>
                </div>
              </div>

              {/* Fact Policy Note */}
              <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-5 text-xs text-slate-500 leading-relaxed">
                <strong className="text-slate-700 block mb-1">Client Provided Information:</strong>
                {project.clientProvidedPlaceholder || 'Formal project partner co-branding and finalized sample metrics to be provided by CDMSD.'}
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs py-2.5 rounded transition-colors"
              >
                &larr; Back to All Documented Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
