'use client';

import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function WorkWithUsModal({ isOpen, onClose }: Props) {
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
              Institutional Inquiries
            </span>
            <h3 className="text-xl font-bold text-[#123047] mt-1">Work With CDMSD</h3>
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
              <h4 className="text-lg font-bold text-[#123047] mb-1">Inquiry Received</h4>
              <p className="text-sm text-slate-600">
                Thank you. Your institutional inquiry has been recorded. Our technical team will follow up promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#123047] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Tariq Mahmood"
                  className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#123047] mb-1">Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. UN Agency / INGO / Govt"
                    className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#123047] mb-1">Official Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.org"
                    className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123047] mb-1">Inquiry Category *</label>
                <select
                  required
                  className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#168A8A]"
                >
                  <option value="">Select Category...</option>
                  <option value="consulting">Consulting &amp; Technical Advisory</option>
                  <option value="evaluation">Third-Party Evaluation / Baseline Study</option>
                  <option value="training">Training of Trainers (ToT) / Capacity Building</option>
                  <option value="partnership">Development Partnership / Consortium</option>
                  <option value="general">General Institutional Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123047] mb-1">Assignment Scope / Requirements *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Outline objectives, geographic requirements, timeline..."
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
                  Submit Institutional Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
