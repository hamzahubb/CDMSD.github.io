'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <Check size={24} />
        </div>
        <h3 className="text-xl font-bold text-[#123047] mb-2">Inquiry Successfully Submitted</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Thank you for reaching out to CDMSD. Your institutional request has been forwarded to our technical coordination desk.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs font-bold text-[#123047] mb-1.5">Full Name *</label>
        <input
          type="text"
          required
          placeholder="e.g. Dr. Salman Malik"
          className="w-full px-4 py-2.5 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A] focus:ring-1 focus:ring-[#168A8A]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#123047] mb-1.5">Organization / Agency *</label>
          <input
            type="text"
            required
            placeholder="e.g. INGO / Government / Donor"
            className="w-full px-4 py-2.5 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A] focus:ring-1 focus:ring-[#168A8A]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#123047] mb-1.5">Official Email *</label>
          <input
            type="email"
            required
            placeholder="name@organization.org"
            className="w-full px-4 py-2.5 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A] focus:ring-1 focus:ring-[#168A8A]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#123047] mb-1.5">Phone / WhatsApp</label>
          <input
            type="tel"
            placeholder="+92 300 0000000"
            className="w-full px-4 py-2.5 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A] focus:ring-1 focus:ring-[#168A8A]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#123047] mb-1.5">Inquiry Type *</label>
          <select
            required
            className="w-full px-4 py-2.5 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A] focus:ring-1 focus:ring-[#168A8A]"
          >
            <option value="">Select Category...</option>
            <option value="General">General Inquiry</option>
            <option value="Consulting">Consulting &amp; Technical Advisory</option>
            <option value="Partnership">Partnership &amp; Consortium</option>
            <option value="Research">Research &amp; Third-Party Evaluation</option>
            <option value="Training">Training &amp; Capacity Development</option>
            <option value="Careers">Careers &amp; Consultant Roster</option>
            <option value="Media">Media &amp; Communications</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#123047] mb-1.5">Message / Assignment Scope *</label>
        <textarea
          required
          rows={5}
          placeholder="Provide background on the project, geographic requirements, timeline, or specific consulting services required..."
          className="w-full px-4 py-2.5 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A] focus:ring-1 focus:ring-[#168A8A]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#168A8A] hover:bg-[#0f6363] text-white font-bold py-3 rounded shadow transition-colors"
      >
        Submit Institutional Inquiry
      </button>
    </form>
  );
}
