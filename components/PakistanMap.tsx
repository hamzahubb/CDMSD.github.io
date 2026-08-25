'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { GEOGRAPHIC_LOCATIONS, GeographicLocation } from '@/lib/data';

export default function PakistanMap() {
  const [selectedId, setSelectedId] = useState<string>(GEOGRAPHIC_LOCATIONS[0].id);

  const selectedLoc = GEOGRAPHIC_LOCATIONS.find((l) => l.id === selectedId) || GEOGRAPHIC_LOCATIONS[0];

  function projectCoords(lat: number, lng: number) {
    const minLat = 23.5, maxLat = 37.0;
    const minLng = 60.5, maxLng = 77.8;
    const x = ((lng - minLng) / (maxLng - minLng)) * 500;
    const y = 500 - ((lat - minLat) / (maxLat - minLat)) * 500;
    return { x: Math.round(x), y: Math.round(y) };
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Map Vector Viewport */}
        <div className="lg:col-span-7 bg-gradient-to-b from-[#f0f7f9] to-[#e5f1f4] p-8 flex items-center justify-center relative">
          <svg
            viewBox="0 0 520 520"
            className="w-full max-w-[460px] h-auto drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Map of Pakistan showing documented CDMSD field locations"
          >
            <defs>
              <radialGradient id="mapPinGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#168A8A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#168A8A" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Pakistan Simplified Regional Outlines */}
            <g className="fill-[#d1e5e8] stroke-white stroke-2">
              <path d="M 60 380 L 110 330 L 160 310 L 220 340 L 250 420 L 210 450 L 150 440 L 90 420 Z" />
              <path d="M 220 340 L 280 320 L 330 360 L 350 430 L 290 470 L 250 420 Z" />
              <path d="M 220 340 L 270 240 L 340 210 L 380 260 L 350 320 L 280 320 Z" />
              <path d="M 240 210 L 280 130 L 330 110 L 340 180 L 300 240 L 240 230 Z" />
              <path d="M 330 110 L 390 70 L 440 90 L 410 160 L 350 170 L 340 120 Z" />
            </g>

            <g opacity="0.35" fontSize="10" fontWeight="700" fill="#123047" pointerEvents="none">
              <text x="130" y="380">BALOCHISTAN</text>
              <text x="270" y="415">SINDH</text>
              <text x="290" y="280">PUNJAB</text>
              <text x="270" y="170">KP</text>
              <text x="360" y="125">GB / AJK</text>
            </g>

            {/* Pins */}
            {GEOGRAPHIC_LOCATIONS.map((loc) => {
              const pt = projectCoords(loc.lat, loc.lng);
              const isActive = loc.id === selectedId;
              return (
                <g
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  className="cursor-pointer transition-transform hover:scale-125"
                  tabIndex={0}
                  role="button"
                  aria-label={`${loc.name}: ${loc.projectTitle}`}
                >
                  <circle cx={pt.x} cy={pt.y} r={isActive ? 16 : 12} fill="url(#mapPinGlow)" className="animate-pulse" />
                  <circle cx={pt.x} cy={pt.y} r={isActive ? 8 : 6} fill="#123047" stroke="#ffffff" strokeWidth="2" />
                  <circle cx={pt.x} cy={pt.y} r={isActive ? 4 : 3} fill="#E49A45" />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Sidebar & Active Card */}
        <div className="lg:col-span-5 p-8 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <span className="text-[11px] font-semibold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                7 Documented Field Locations
              </span>
              <h3 className="text-xl font-bold text-[#123047] mt-2 mb-1">
                Documented Areas of Work
              </h3>
              <p className="text-xs text-slate-500">
                Click any location pin to inspect verified assignment evidence.
              </p>
            </div>

            {/* Selected Location Card */}
            <div className="bg-[#F7F8F5] border border-slate-200 rounded-lg p-5 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-[#168A8A]">{selectedLoc.province}</span>
                <span className="text-[11px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono">
                  {selectedLoc.year}
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#123047] mb-1">{selectedLoc.name}</h4>
              <p className="text-sm text-slate-700 font-medium mb-1">
                {selectedLoc.projectTitle}
              </p>
              <p className="text-xs text-slate-500 mb-4">
                <strong>Thematic Focus:</strong> {selectedLoc.focus}
              </p>
              <Link
                href={`/projects/${selectedLoc.projectSlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#168A8A] hover:bg-[#0f6363] px-3.5 py-2 rounded transition-colors w-full justify-center"
              >
                View Documented Assignment Details
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Quick Switcher List */}
          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            {GEOGRAPHIC_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedId(loc.id)}
                className={`w-full text-left px-3 py-2 rounded text-xs flex justify-between items-center transition-colors ${
                  loc.id === selectedId
                    ? 'bg-[#168A8A]/10 text-[#123047] font-bold border border-[#168A8A]'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#168A8A]" />
                  {loc.name}
                </span>
                <span className="text-[10px] text-slate-400">{loc.province}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
