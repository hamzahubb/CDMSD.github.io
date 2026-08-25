import type { Metadata } from 'next';
import { Mail, Phone, MapPin, ShieldAlert } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { ORG_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact & Institutional Inquiries',
  description: 'Connect with CDMSD for technical consulting, project evaluations, Training-of-Trainers programs, or consortium partnerships in Pakistan.',
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[#123047] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E49A45] block mb-2">
            Direct Coordination
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Contact CDMSD
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Engage CDMSD for technical consulting, third-party project evaluations, Training-of-Trainers programs, or consortium partnerships in Pakistan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#168A8A] block mb-2">
                Inquiry Portal
              </span>
              <h2 className="text-2xl font-bold text-[#123047] mb-3">
                Send an Institutional Request
              </h2>
              <p className="text-sm text-slate-600 mb-8">
                Complete the form below with your assignment scope, RFP, or general inquiry. Our technical team will follow up promptly.
              </p>
              <ContactForm />
            </div>

            {/* Contact Coordinates & Placeholders */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F7F8F5] border border-slate-200 rounded-xl p-8 shadow-sm">
                <span className="text-[11px] font-bold uppercase text-slate-500 bg-slate-200 px-2 py-0.5 rounded inline-block mb-4">
                  Official Coordinates
                </span>
                <h3 className="text-lg font-bold text-[#123047] mb-6">
                  Institutional Details
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-[#e6f4f4] text-[#168A8A] flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <strong className="text-xs text-slate-500 uppercase block mb-0.5">Official Email</strong>
                      <span className="font-mono text-xs bg-white px-2 py-1 rounded border border-dashed border-slate-300 inline-block text-slate-700">
                        {ORG_DATA.placeholders.email}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-[#e6f4f4] text-[#168A8A] flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <strong className="text-xs text-slate-500 uppercase block mb-0.5">Official Telephone</strong>
                      <span className="font-mono text-xs bg-white px-2 py-1 rounded border border-dashed border-slate-300 inline-block text-slate-700">
                        {ORG_DATA.placeholders.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-[#e6f4f4] text-[#168A8A] flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <strong className="text-xs text-slate-500 uppercase block mb-0.5">Office Address</strong>
                      <span className="font-mono text-xs bg-white px-2 py-1 rounded border border-dashed border-slate-300 inline-block text-slate-700">
                        {ORG_DATA.placeholders.office}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Protocol Callout */}
              <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-[#123047] p-5 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert size={16} className="text-[#168A8A]" />
                  <h4 className="text-xs font-bold uppercase text-[#123047]">
                    Fact Verification Transparency
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Official email addresses, phone lines, and physical office registration credentials will be updated in this section as verified and supplied directly by CDMSD administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
