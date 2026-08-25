import type { Metadata } from 'next';
import ProjectFilterGrid from '@/components/ProjectFilterGrid';
import { PROJECTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Documented Projects & Field Portfolio',
  description: 'Verified assignments, project evaluations, and Training-of-Trainers programs delivered by CDMSD in Pakistan.',
};

export default function ProjectsHubPage() {
  return (
    <div>
      <section className="bg-[#123047] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E49A45] block mb-2">
            Evidence-Driven Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Documented Project Experience
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Explore verified field assignments, evaluations, and capacity development programs delivered across Pakistan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <ProjectFilterGrid projects={PROJECTS} />
        </div>
      </section>
    </div>
  );
}
