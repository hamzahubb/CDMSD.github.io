'use client';

import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultantRosterModal({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123047]/75 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <div>
            <span className="text-[11px] font-bold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              Technical Expert Network
            </span>
            <h3 className="text-xl font-bold text-[#123047] mt-1">Register for Consultant Roster</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <Check size={24} />
              </div>
              <h4 className="text-lg font-bold text-[#123047] mb-1">Application Submitted</h4>
              <p className="text-sm text-slate-600">
                Your profile has been recorded in the CDMSD Technical Consultant Roster.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#123047] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Engr. Asad Khan"
                    className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#123047] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#123047] mb-1">Primary Discipline *</label>
                  <select
                    required
                    className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A]"
                  >
                    <option value="">Select Domain...</option>
                    <option value="drr">Disaster Risk Reduction (DRR / DRM)</option>
                    <option value="climate">Climate Change Adaptation (CVRA)</option>
                    <option value="wash">WASH &amp; Public Health Engineering</option>
                    <option value="livelihoods">Food Security &amp; Livelihoods</option>
                    <option value="mel">Monitoring &amp; Evaluation (MEL)</option>
                    <option value="gender">Social Mobilization &amp; Protection</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#123047] mb-1">Experience *</label>
                  <select
                    required
                    className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A]"
                  >
                    <option value="3-5">3–5 Years</option>
                    <option value="6-10">6–10 Years</option>
                    <option value="10+">10+ Years (Senior Specialist)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123047] mb-1">Summary of Major Assignments</label>
                <textarea
                  rows={3}
                  placeholder="Key evaluations, geographic experience across Pakistan, and technical proficiencies..."
                  className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#168A8A] hover:bg-[#0f6363] text-white text-sm font-semibold rounded shadow transition-colors"
                >
                  Submit Roster Profile
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
