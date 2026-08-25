import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXPERTISE_SECTORS, PROJECTS } from '@/lib/data';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return EXPERTISE_SECTORS.map((sec) => ({
    slug: sec.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sector = EXPERTISE_SECTORS.find((s) => s.slug === params.slug);
  if (!sector) return { title: 'Expertise Sector' };

  return {
    title: `${sector.title} — Technical Domain`,
    description: sector.summary,
  };
}

export default function ExpertiseDetailPage({ params }: Props) {
  const sector = EXPERTISE_SECTORS.find((s) => s.slug === params.slug);
  if (!sector) notFound();

  // Find related projects
  const relatedProjects = PROJECTS.filter((p) =>
    p.sector.toLowerCase().includes(sector.shortTitle.toLowerCase()) ||
    p.thematicTags.some((t) => t.toLowerCase().includes(sector.shortTitle.toLowerCase()))
  );

  return (
    <div>
      <section className="bg-[#123047] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase text-[#E49A45] hover:underline mb-4"
          >
            <ArrowLeft size={14} />
            Back to All Expertise Areas
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {sector.title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            {sector.summary}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
                  Technical Practice Overview
                </span>
                <h2 className="text-2xl font-bold text-[#123047] mb-4 leading-tight">
                  Consulting Scope &amp; Implementation
                </h2>
                <p className="text-slate-700 leading-relaxed text-base mb-4 font-medium">
                  {sector.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#123047] mb-4">
                  Core Technical Capabilities
                </h3>
                <div className="space-y-3">
                  {sector.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#168A8A] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#123047] mb-3">
                  Methodology &amp; Standards
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed bg-[#F7F8F5] p-5 rounded-lg border border-slate-200">
                  {sector.methodology}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F7F8F5] border border-slate-200 rounded-xl p-6 shadow-sm">
                <span className="text-[11px] font-bold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded inline-block mb-3">
                  Verified Touchpoints
                </span>
                <h3 className="text-base font-bold text-[#123047] mb-2">
                  Documented Field Experience
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {sector.verifiedTouchpoints}
                </p>

                {relatedProjects.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-slate-200">
                    <h4 className="text-xs font-bold text-slate-500 uppercase">Related Assignments:</h4>
                    {relatedProjects.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="block bg-white p-3 rounded border border-slate-200 hover:border-[#168A8A] transition-colors"
                      >
                        <strong className="text-xs text-[#123047] block mb-1">{p.shortTitle}</strong>
                        <span className="text-[11px] text-slate-500">{p.location}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-[#123047] text-white p-6 rounded-xl text-center">
                <h4 className="text-base font-bold text-white mb-2">
                  Commission Work in this Domain
                </h4>
                <p className="text-xs text-white/80 mb-4">
                  Connect with CDMSD technical leads for advisory, baseline surveys, or evaluations.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 w-full bg-[#E49A45] hover:bg-[#d98d36] text-[#0c2030] font-bold text-xs py-2.5 rounded transition-colors"
                >
                  Submit Inquiry
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
