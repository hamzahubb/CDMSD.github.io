import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import Hero from '@/components/Hero';
import CredibilityStrip from '@/components/CredibilityStrip';
import ExpertiseCard from '@/components/ExpertiseCard';
import ProjectCard from '@/components/ProjectCard';
import PakistanMap from '@/components/PakistanMap';
import { EXPERTISE_SECTORS, PROJECTS, RESOURCES, NEWS_ITEMS, ORG_DATA } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: ORG_DATA.fullName,
            alternateName: ORG_DATA.shortName,
            foundingDate: '2013',
            description: ORG_DATA.positioning,
            areaServed: 'Pakistan',
            knowsAbout: [
              'Disaster Risk Management',
              'Climate Change Adaptation',
              'WASH',
              'Community Development',
              'Food Security & Livelihoods',
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Credibility Strip */}
      <CredibilityStrip />

      {/* About CDMSD Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
                About the Center
              </span>
              <h2 className="text-3xl font-extrabold text-[#123047] mb-6 leading-tight">
                Experience rooted in disaster risk management and sustainable development.
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-4 font-medium">
                The Center for Disaster Management and Sustainable Development (CDMSD) is a registered independent multi-disciplinary consulting firm established in Pakistan in 2013.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Its scope of work ranges from grassroots-level work to national-level medium- and short-term assignments, with technical expertise spanning disaster risk reduction, climate adaptation, emergency WASH, livelihoods, governance, and community uplift.
              </p>

              <div className="bg-[#F7F8F5] border-l-4 border-[#123047] p-5 rounded-r-lg mb-8">
                <h4 className="text-sm font-bold text-[#123047] mb-1">
                  Documented Mandate &amp; Scope
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Public records describe CDMSD as &ldquo;the first ever consulting initiative established to provide specialized services in disaster risk management in Pakistan,&rdquo; established to provide cutting-edge solutions based on best practices.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#123047] hover:bg-[#0c2030] text-white font-semibold text-sm px-6 py-3 rounded transition-colors"
              >
                Read Full Organizational Profile
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F7F8F5] border border-slate-200 rounded-xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#123047] mb-6 pb-3 border-b-2 border-[#168A8A]">
                  Commissioning Sectors
                </h3>
                <div className="space-y-4">
                  {ORG_DATA.targetCommissioners.map((comm, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-[#168A8A]/10 text-[#168A8A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div>
                        <strong className="text-sm text-[#123047] block font-semibold">{comm}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-[#F7F8F5]" id="expertise">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
              Technical Domains
            </span>
            <h2 className="text-3xl font-extrabold text-[#123047] mb-4">
              Where technical knowledge meets practical action.
            </h2>
            <p className="text-slate-600">
              CDMSD delivers specialized consulting across seven core practice areas spanning risk reduction, climate resilience, and sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {EXPERTISE_SECTORS.slice(0, 6).map((sector) => (
              <ExpertiseCard key={sector.id} sector={sector} />
            ))}
          </div>

          {/* 7th Sector Wide Card */}
          <div className="bg-gradient-to-r from-white to-[#f0f7f9] border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] font-bold uppercase text-[#168A8A] bg-[#e6f4f4] px-2 py-0.5 rounded mb-2 inline-block">
                  Cross-Cutting Practice
                </span>
                <h3 className="text-xl font-bold text-[#123047] mb-2">
                  Research, Training &amp; Consulting
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Delivering independent third-party monitoring, evaluation (baseline/mid-term/endline), Master Trainer certifications (ToT), and technical knowledge products for development partners across Pakistan.
                </p>
              </div>
              <Link
                href="/expertise/research-training-consulting"
                className="bg-[#168A8A] hover:bg-[#0f6363] text-white font-semibold text-sm px-6 py-3 rounded shrink-0 flex items-center gap-2 transition-colors"
              >
                Explore Research &amp; Training
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documented Projects Section */}
      <section className="py-20 bg-white" id="projects">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
                Documented Experience
              </span>
              <h2 className="text-3xl font-extrabold text-[#123047] mb-2">
                Verified assignments. Practical impact.
              </h2>
              <p className="text-slate-600 max-w-xl">
                CDMSD presents documented field assignments verified through independent evaluation reports and international humanitarian repositories.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-bold text-[#168A8A] hover:text-[#123047] flex items-center gap-1 shrink-0"
            >
              View Complete Portfolio &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pakistan Map */}
      <section className="py-20 bg-[#F7F8F5]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
              Geographic Presence
            </span>
            <h2 className="text-3xl font-extrabold text-[#123047] mb-2">
              Documented Areas of Work
            </h2>
            <p className="text-slate-600">
              Interactive map highlighting verified project locations and field touchpoints across Pakistan.
            </p>
          </div>

          <PakistanMap />
        </div>
      </section>

      {/* Tri-Pillar Approach */}
      <section className="py-20 bg-[#123047] text-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E49A45] block mb-2">
              Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Our Tri-Pillar Approach
            </h2>
            <p className="text-white/80">
              CDMSD combines technical knowledge, field experience and multidisciplinary approaches to address disaster risk and climate vulnerability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-2xl font-black text-[#E49A45] mb-3">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Understand Risk</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Evidence, multi-hazard assessment, and empirical research. We analyze baseline vulnerabilities, meteorological patterns, and community hazard profiles.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-2xl font-black text-[#168A8A] mb-3">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Strengthen Resilience</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Capacity development, community mobilization, and institutional readiness. We train Master Trainers, equip local committees, and build resilient systems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-2xl font-black text-green-400 mb-3">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Support Sustainable Development</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Long-term, practical, and context-sensitive solutions. We ensure that recovery transitions smoothly into sustainable livelihood security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience in Action Counter Strip */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#F7F8F5] p-6 rounded-lg border border-slate-200">
              <div className="text-3xl font-black text-[#123047] mb-1">2013</div>
              <div className="text-xs font-bold text-slate-500 uppercase">Established Year</div>
              <span className="inline-block mt-2 text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">Verified</span>
            </div>
            <div className="bg-[#F7F8F5] p-6 rounded-lg border border-slate-200">
              <div className="text-3xl font-black text-[#123047] mb-1">7</div>
              <div className="text-xs font-bold text-slate-500 uppercase">Core Domains</div>
              <span className="inline-block mt-2 text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">Verified</span>
            </div>
            <div className="bg-[#F7F8F5] p-6 rounded-lg border border-slate-200">
              <div className="text-3xl font-black text-[#123047] mb-1">35+</div>
              <div className="text-xs font-bold text-slate-500 uppercase">Master Trainers Certified</div>
              <span className="inline-block mt-2 text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">SBDRM Record</span>
            </div>
            <div className="bg-[#F7F8F5] p-6 rounded-lg border border-dashed border-slate-300">
              <div className="text-sm font-mono font-bold text-slate-500 mb-1 py-1">[DATA REQUIRED]</div>
              <div className="text-xs font-bold text-slate-500 uppercase">Total Beneficiaries</div>
              <span className="inline-block mt-2 text-[10px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded font-semibold">Pending CDMSD Data</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Knowledge Hub Preview */}
      <section className="py-20 bg-[#F7F8F5]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
                Knowledge Hub
              </span>
              <h2 className="text-3xl font-extrabold text-[#123047] mb-2">
                Publications, Evaluations &amp; Research
              </h2>
              <p className="text-slate-600">
                Access documented project evaluation reports and technical reference materials.
              </p>
            </div>
            <Link
              href="/resources"
              className="text-sm font-bold text-[#168A8A] hover:text-[#123047] flex items-center gap-1"
            >
              Browse All Resources &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESOURCES.slice(0, 3).map((res) => (
              <div key={res.id} className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-bold text-[#168A8A] bg-[#e6f4f4] px-2 py-0.5 rounded">
                    {res.category}
                  </span>
                  <span className="text-[11px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                    Verified
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#123047] mb-2 leading-snug">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-600 mb-4 flex-grow leading-relaxed">
                  {res.description}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-auto">
                  <span>{res.fileType}</span>
                  {res.relatedProjectSlug && (
                    <Link
                      href={`/projects/${res.relatedProjectSlug}`}
                      className="font-bold text-[#168A8A] hover:text-[#123047]"
                    >
                      View Details &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
                Institutional Updates
              </span>
              <h2 className="text-3xl font-extrabold text-[#123047] mb-2">
                News &amp; Field Notes
              </h2>
              <p className="text-slate-600">
                Insights on disaster risk management consulting and field assessments in Pakistan.
              </p>
            </div>
            <Link
              href="/news"
              className="text-sm font-bold text-[#168A8A] hover:text-[#123047] flex items-center gap-1"
            >
              View All News &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item) => (
              <article key={item.id} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col">
                <div className="text-[11px] font-bold text-[#168A8A] uppercase mb-2">
                  {item.category} &bull; {item.date}
                </div>
                <h3 className="text-base font-bold text-[#123047] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                  {item.summary}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                    Verified
                  </span>
                  <Link href="/news" className="text-xs font-bold text-[#168A8A] hover:text-[#123047]">
                    Read Note &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#123047] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E49A45] block mb-2">
            Institutional Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Have a development challenge in mind?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Let&rsquo;s explore how CDMSD&rsquo;s multidisciplinary expertise can support your next initiative, project evaluation, or capacity development program in Pakistan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#E49A45] hover:bg-[#d98d36] text-[#0c2030] font-bold text-base px-8 py-3.5 rounded shadow transition-colors"
            >
              Contact CDMSD
            </Link>
            <Link
              href="/careers"
              className="border border-white/40 hover:bg-white hover:text-[#123047] text-white font-semibold text-base px-8 py-3.5 rounded transition-colors"
            >
              Join Consultant Roster
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
