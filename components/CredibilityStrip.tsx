import React from 'react';
import { Calendar, Shield, AlertTriangle, Globe } from 'lucide-react';

export default function CredibilityStrip() {
  const items = [
    { label: 'Founded', value: 'ESTABLISHED 2013', icon: Calendar },
    { label: 'Institutional Status', value: 'MULTIDISCIPLINARY FIRM', icon: Shield },
    { label: 'Core Specialization', value: 'DISASTER RISK MANAGEMENT', icon: AlertTriangle },
    { label: 'Development Focus', value: 'SUSTAINABLE DEVELOPMENT', icon: Globe },
  ];

  return (
    <section className="bg-[#0c2030] text-white py-5 border-b border-white/10" aria-label="Organizational Credentials">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 sm:border-r last:border-none border-white/10 pr-4"
              >
                <div className="w-10 h-10 rounded bg-[#168A8A]/20 text-[#168A8A] flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#E49A45] leading-none mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-white leading-tight">
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
