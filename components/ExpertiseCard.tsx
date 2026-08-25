import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, CloudSun, Droplets, Users, Wheat, Landmark, BookOpen } from 'lucide-react';
import { ExpertiseSector } from '@/lib/data';

interface Props {
  sector: ExpertiseSector;
}

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  CloudSun,
  Droplets,
  Users,
  Wheat,
  Landmark,
  BookOpen,
};

export default function ExpertiseCard({ sector }: Props) {
  const Icon = iconMap[sector.icon] || ShieldAlert;

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
      <div className="w-12 h-12 rounded-lg bg-[#e6f4f4] text-[#168A8A] group-hover:bg-[#168A8A] group-hover:text-white flex items-center justify-center mb-6 transition-colors">
        <Icon size={24} />
      </div>

      <h3 className="text-xl font-bold text-[#123047] mb-3 leading-snug">
        {sector.title}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {sector.summary}
      </p>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
        <span className="text-[11px] font-semibold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          Verified Practice
        </span>
        <Link
          href={`/expertise/${sector.slug}`}
          className="text-xs font-bold text-[#168A8A] group-hover:text-[#123047] flex items-center gap-1 transition-colors"
        >
          Explore Sector
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
