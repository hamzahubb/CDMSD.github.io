import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Project } from '@/lib/data';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
      <div className="bg-slate-50 px-6 py-3.5 border-b border-slate-200 flex justify-between items-center text-xs">
        <span className="font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
          {project.verificationStatus}
        </span>
        <div className="flex items-center gap-1 text-slate-500">
          <Calendar size={13} />
          <span>{project.period}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#168A8A] mb-2">
          <MapPin size={14} />
          <span>{project.location}</span>
        </div>

        <h3 className="text-lg font-bold text-[#123047] mb-3 leading-snug">
          <Link href={`/projects/${project.slug}`} className="hover:text-[#168A8A] transition-colors">
            {project.title}
          </Link>
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
          {project.overview}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.thematicTags.map((tag, idx) => (
            <span key={idx} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-slate-50 p-3 rounded text-[11px] text-slate-500 border-l-2 border-[#168A8A] mb-4">
          <strong>Source:</strong> {project.sourceMetadata.sourceName}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-bold text-[#168A8A] hover:text-[#123047] flex items-center gap-1 mt-auto"
        >
          View Full Assignment Details
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
