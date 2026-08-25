'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import WorkWithUsModal from './WorkWithUsModal';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'News', href: '/news' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/assets/images/cdmsd-logo.svg"
              alt="Center for Disaster Management & Sustainable Development (CDMSD)"
              className="h-12 w-auto max-w-[280px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-semibold transition-colors relative py-1 ${
                    isActive ? 'text-[#168A8A]' : 'text-slate-700 hover:text-[#168A8A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#168A8A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#168A8A] hover:bg-[#0f6363] text-white font-semibold text-sm px-4 py-2 rounded shadow-sm transition-colors"
            >
              Work With Us
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-[#123047]"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-semibold text-slate-700 hover:text-[#168A8A] py-1.5 border-b border-slate-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Modal Dialog */}
      <WorkWithUsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
