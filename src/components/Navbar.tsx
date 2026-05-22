'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n/I18nProvider';
import { useSectionNav } from '@/lib/useSectionNav';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { dict } = useI18n();
  const n = dict.nav;

  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTriggerRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: n.links.features, href: '#features', hasMega: true },
    { label: n.links.solutions, href: '#architecture' },
    { label: n.links.security, href: '#architecture' },
    { label: n.links.ecosystem, href: '#modules' },
    { label: n.links.about, href: '#mission' },
  ];

  const megaMenuColumns = [
    {
      title: n.mega.col1.title,
      items: n.mega.col1.items.map((item, i) => ({
        ...item,
        href: ['#pillars', '#pillars', '#pillars', '#pillars'][i] ?? '#pillars',
      })),
    },
    {
      title: n.mega.col2.title,
      items: n.mega.col2.items.map((item, i) => ({
        ...item,
        href: ['#modules', '#modules', '#modules', '#modules'][i] ?? '#modules',
      })),
    },
    {
      title: n.mega.col3.title,
      items: n.mega.col3.items.map((item, i) => ({
        ...item,
        href: ['#modules', '#modules', '#revenue'][i] ?? '#modules',
      })),
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        megaRef.current && !megaRef.current.contains(e.target as Node) &&
        megaTriggerRef.current && !megaTriggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navigate = useSectionNav();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setMegaOpen(false);
    navigate(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-scrolled' : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label={n.logoAriaLabel}
              onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="GoldHouse"
                width={32}
                height={32}
                className="w-8 h-8 flex-shrink-0 rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-white font-bold text-lg tracking-tight leading-none">
                Gold<span className="text-[#FFC247]">House</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label={n.mainNav}>
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.label} className="relative">
                    <button
                      ref={megaTriggerRef}
                      onClick={() => setMegaOpen((o) => !o)}
                      onKeyDown={(e) => { if (e.key === 'Escape') setMegaOpen(false); }}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#19B7FF]"
                    >
                      {link.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 12 12"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6 8L1 3h10z" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="px-3.5 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => handleNavClick('#cta')}
                className="btn-gradient px-5 py-2 text-sm rounded-lg"
                aria-label={`${n.start} GoldHouse`}
              >
                {n.start}
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? n.closeMenu : n.openMenu}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        {megaOpen && (
          <div
            ref={megaRef}
            className="hidden lg:block absolute top-full left-0 right-0 bg-[#001440]/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl"
            role="region"
            aria-label={n.megaMenuRegion}
          >
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-3 gap-8">
                {megaMenuColumns.map((col) => (
                  <div key={col.title}>
                    <p className="text-xs font-semibold text-[#19B7FF] uppercase tracking-widest mb-4">{col.title}</p>
                    <ul className="space-y-1" role="list">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <button
                            onClick={() => handleNavClick(item.href)}
                            className="w-full text-left group flex items-start gap-3 p-3 rounded-xl hover:bg-white/8 transition-all duration-200"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF] mt-2 flex-shrink-0 group-hover:bg-[#19B7FF] group-hover:scale-125 transition-all duration-200" />
                            <div>
                              <p className="text-sm font-medium text-white/90 group-hover:text-white">{item.label}</p>
                              <p className="text-xs text-white/45 mt-0.5">{item.desc}</p>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/8 flex items-center justify-between">
                <p className="text-sm text-white/50">{n.megaFooterText}</p>
                <button
                  onClick={() => { setMegaOpen(false); handleNavClick('#cta'); }}
                  className="btn-gradient px-6 py-2.5 text-sm rounded-lg"
                >
                  {n.tryNow}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" aria-modal="true" role="dialog" aria-label={n.mobileNav}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-[#001440] shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="GoldHouse" width={28} height={28} className="w-7 h-7 rounded-lg" />
                <span className="text-white font-bold text-base">Gold<span className="text-[#FFC247]">House</span></span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={n.closeMenu}
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-1" aria-label={n.mobileNav}>
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileExpanded((o) => !o)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/8 transition-all duration-200"
                      aria-expanded={mobileExpanded}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded ? 'rotate-180' : ''}`}
                        viewBox="0 0 12 12"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6 8L1 3h10z" />
                      </svg>
                    </button>
                    {mobileExpanded && (
                      <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#0A6CFF]/40 pl-4">
                        {megaMenuColumns.flatMap((col) => col.items).map((item) => (
                          <button
                            key={item.label}
                            onClick={() => handleNavClick(item.href)}
                            className="w-full text-left px-3 py-2.5 text-xs text-white/65 hover:text-white rounded-lg hover:bg-white/6 transition-all duration-200"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/8 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            <div className="p-4 border-t border-white/10 space-y-3">
              <LanguageSwitcher variant="mobile" />
              <button
                onClick={() => handleNavClick('#cta')}
                className="btn-gradient w-full py-3 text-sm rounded-xl"
              >
                {n.start}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
