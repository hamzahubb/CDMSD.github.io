'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { ResourceItem } from '@/lib/data';

interface Props {
  resources: ResourceItem[];
}

export default function ResourceFilterGrid({ resources }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { label: 'All Resources', value: 'all' },
    { label: 'Evaluations', value: 'Evaluations' },
    { label: 'Reports & Studies', value: 'Reports' },
    { label: 'Training Materials', value: 'Training Materials' },
    { label: 'Institutional Briefs', value: 'Institutional' },
  ];

  const filteredResources = useMemo(() => {
    return resources.filter((res) => {
      return activeCategory === 'all' || res.category === activeCategory;
    });
  }, [resources, activeCategory]);

  return (
    <div>
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              activeCategory === cat.value
                ? 'bg-[#123047] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredResources.map((res) => (
          <div key={res.id} className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[11px] font-bold text-[#168A8A] bg-[#e6f4f4] px-2 py-0.5 rounded">
                {res.category}
              </span>
              <span className="text-[11px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                {res.verificationStatus}
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#123047] mb-2 leading-snug">
              {res.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
              {res.description}
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <FileText size={14} className="text-slate-400" />
                <span>{res.fileType}</span>
              </div>
              {res.relatedProjectSlug ? (
                <Link
                  href={`/projects/${res.relatedProjectSlug}`}
                  className="text-xs font-bold text-[#168A8A] hover:text-[#123047] flex items-center gap-1"
                >
                  View Assignment
                  <ArrowRight size={13} />
                </Link>
              ) : (
                <Link
                  href="/about"
                  className="text-xs font-bold text-[#168A8A] hover:text-[#123047] flex items-center gap-1"
                >
                  View Profile
                  <ArrowRight size={13} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
