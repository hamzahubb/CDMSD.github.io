import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function CdmsdLogo({ className = 'h-12 w-auto', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#123047';
  const dividerColor = variant === 'light' ? 'rgba(255,255,255,0.3)' : '#CBD5E1';

  return (
    <svg
      viewBox="0 0 420 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Center for Disaster Management & Sustainable Development (CDMSD)"
    >
      {/* CDMSD 3-Cube Isometric Triad */}
      <g transform="translate(10, 10)">
        {/* Top Amber/Orange Cube */}
        <g transform="translate(48, 28)">
          <polygon points="0,-24 20.78,-12 0,0 -20.78,-12" fill="#fbbf24" />
          <polygon points="-20.78,-12 0,0 0,24 -20.78,12" fill="#f59e0b" />
          <polygon points="0,0 20.78,-12 20.78,12 0,24" fill="#f97316" />
        </g>

        {/* Bottom-Left Green Cube */}
        <g transform="translate(24, 70)">
          <polygon points="0,-24 20.78,-12 0,0 -20.78,-12" fill="#a3e635" />
          <polygon points="-20.78,-12 0,0 0,24 -20.78,12" fill="#84cc16" />
          <polygon points="0,0 20.78,-12 20.78,12 0,24" fill="#65a30d" />
        </g>

        {/* Bottom-Right Cyan/Blue Cube */}
        <g transform="translate(72, 70)">
          <polygon points="0,-24 20.78,-12 0,0 -20.78,-12" fill="#38bdf8" />
          <polygon points="-20.78,-12 0,0 0,24 -20.78,12" fill="#0ea5e9" />
          <polygon points="0,0 20.78,-12 20.78,12 0,24" fill="#0284c7" />
        </g>
      </g>

      {/* Divider */}
      <line x1="118" y1="20" x2="118" y2="100" stroke={dividerColor} strokeWidth="1.5" />

      {/* Typography */}
      <g font-family="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fill={textColor}>
        <text x="135" y="44" fontSize="16" letterSpacing="0.5px">CENTER FOR</text>
        <text x="135" y="68" fontSize="16" letterSpacing="0.5px">DISASTER MANAGEMENT &amp;</text>
        <text x="135" y="92" fontSize="16" letterSpacing="0.5px">SUSTAINABLE DEVELOPMENT</text>
      </g>
    </svg>
  );
}
