'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Project } from '@/lib/data';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

export default function ProjectFilterGrid({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'Training & SBDRM', value: 'Training' },
    { label: 'Evaluations', value: 'Evaluation' },
    { label: 'WASH & Floods', value: 'WASH' },
    { label: 'Livelihoods & DRR', value: 'Livelihoods' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchFilter =
        activeFilter === 'all' ||
        project.sector.toLowerCase().includes(activeFilter.toLowerCase()) ||
        project.thematicTags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase()));

      const matchSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.thematicTags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchFilter && matchSearch;
    });
  }, [projects, activeFilter, searchQuery]);

  return (
    <div>
      {/* Search & Filter Toolbar */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by keyword, region..."
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A] focus:ring-1 focus:ring-[#168A8A]"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
                activeFilter === opt.value
                  ? 'bg-[#123047] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="text-lg font-bold text-[#123047] mb-2">No matching projects found</h3>
          <p className="text-sm text-slate-500">Try adjusting your search terms or filter category.</p>
        </div>
      )}
    </div>
  );
}
