import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ORG_DATA } from '@/lib/data';
import CdmsdLogo from './CdmsdLogo';

export default function Footer() {
  return (
    <footer className="bg-[#0c2030] text-white/70 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col with Logo */}
          <div>
            <div className="bg-white p-3 rounded-lg w-fit mb-4">
              <CdmsdLogo className="h-10 w-auto" variant="dark" />
            </div>
            <p className="text-sm leading-relaxed text-white/70 mb-4">
              A registered independent multidisciplinary consulting firm established in Pakistan in 2013, providing specialized services in disaster risk management, climate adaptation, WASH, and sustainable development.
            </p>
            <span className="inline-block bg-white/10 text-white/90 text-xs font-semibold px-2.5 py-1 rounded">
              Established 2013 &bull; Pakistan
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Organization</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#168A8A] transition-colors">About CDMSD</Link></li>
              <li><Link href="/expertise" className="hover:text-[#168A8A] transition-colors">Areas of Expertise</Link></li>
              <li><Link href="/projects" className="hover:text-[#168A8A] transition-colors">Documented Projects</Link></li>
              <li><Link href="/resources" className="hover:text-[#168A8A] transition-colors">Knowledge &amp; Resources</Link></li>
              <li><Link href="/news" className="hover:text-[#168A8A] transition-colors">News &amp; Updates</Link></li>
              <li><Link href="/team" className="hover:text-[#168A8A] transition-colors">Multidisciplinary Team</Link></li>
              <li><Link href="/careers" className="hover:text-[#168A8A] transition-colors">Careers &amp; Roster</Link></li>
              <li><Link href="/contact" className="hover:text-[#168A8A] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Domains */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Technical Domains</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/expertise/disaster-risk-reduction" className="hover:text-[#168A8A] transition-colors">Disaster Risk Reduction</Link></li>
              <li><Link href="/expertise/climate-change-adaptation" className="hover:text-[#168A8A] transition-colors">Climate Change Adaptation</Link></li>
              <li><Link href="/expertise/wash" className="hover:text-[#168A8A] transition-colors">WASH Solutions</Link></li>
              <li><Link href="/expertise/community-development" className="hover:text-[#168A8A] transition-colors">Community Development</Link></li>
              <li><Link href="/expertise/food-security-livelihoods" className="hover:text-[#168A8A] transition-colors">Food Security &amp; Livelihoods</Link></li>
              <li><Link href="/expertise/governance" className="hover:text-[#168A8A] transition-colors">Governance &amp; Institutions</Link></li>
              <li><Link href="/expertise/research-training-consulting" className="hover:text-[#168A8A] transition-colors">Research &amp; Consulting</Link></li>
            </ul>
          </div>

          {/* Official Contacts */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Official Inquiries</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#168A8A] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-white/50">Email</span>
                  <span className="font-mono text-xs bg-white/5 px-2 py-0.5 rounded border border-dashed border-white/20">
                    {ORG_DATA.placeholders.email}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#168A8A] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-white/50">Telephone</span>
                  <span className="font-mono text-xs bg-white/5 px-2 py-0.5 rounded border border-dashed border-white/20">
                    {ORG_DATA.placeholders.phone}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#168A8A] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-white/50">Head Office</span>
                  <span className="font-mono text-xs bg-white/5 px-2 py-0.5 rounded border border-dashed border-white/20">
                    {ORG_DATA.placeholders.office}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-xs text-white/70 leading-relaxed mb-8">
          <strong>Institutional Clarity &amp; Fact-Checking Notice:</strong> Center for Disaster Management and Sustainable Development (CDMSD) is an independent consulting firm founded in Pakistan in 2013. It is completely distinct and independent from the Center for Disaster Management (CDM) at the University of Management and Technology (UMT), Lahore. All factual statements on this website are strictly categorized into Verified Public Records, Client-Provided Placeholders, or Editorial Context.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>&copy; 2013–2026 Center for Disaster Management &amp; Sustainable Development (CDMSD). All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white">Fact Verification Policy</Link>
            <Link href="/admin" className="hover:text-white">CMS Inspector</Link>
            <Link href="/contact" className="hover:text-white">Contact &amp; Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
