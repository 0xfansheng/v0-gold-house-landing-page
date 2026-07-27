'use client';

import { useMemo, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useI18n } from '@/i18n/I18nProvider';

export default function UCardFAQ() {
  const { dict } = useI18n();
  const u = dict.ucard;

  const [activeCat, setActiveCat] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [openKey, setOpenKey] = useState<string | null>(null);

  // Flatten categories into a searchable / filterable list of Q&A entries.
  // Each entry keeps its category id so we can both filter by tab and tag it.
  const entries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return u.categories.flatMap((cat) =>
      cat.items
        .map((item, i) => ({ ...item, catId: cat.id, catName: cat.name, key: `${cat.id}-${i}` }))
        .filter((item) => {
          if (activeCat !== 'all' && item.catId !== activeCat) return false;
          if (!q) return true;
          return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
        }),
    );
  }, [u.categories, activeCat, query]);

  return (
    <section
      id="ucard-faq"
      className="relative py-24 lg:py-32 overflow-hidden bg-linear-to-b from-white via-[#F4F8FF] to-white"
      aria-labelledby="ucard-heading"
    >
      {/* Background accents */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 10%, #E6F0FF 0%, transparent 45%), radial-gradient(circle at 10% 85%, #FFF6E0 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC247]/15 border border-[#FFC247]/30 text-[#B97C00] text-xs font-semibold tracking-wider uppercase mb-6">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
                <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
              </svg>
              {u.badge}
            </div>
            <h2
              id="ucard-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1A33] mb-6 leading-tight"
            >
              {u.headingPart1}
              <br className="hidden sm:block" />
              <span className="gradient-text-brand">{u.headingBrand}</span>
            </h2>
            <p className="text-lg text-[#3A5080] leading-relaxed">{u.subtext}</p>
          </div>
        </ScrollReveal>

        {/* Search */}
        <ScrollReveal delay={1}>
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8497BD]"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={u.searchPlaceholder}
                aria-label={u.searchPlaceholder}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#D9E3F5] text-[#0B1A33] placeholder:text-[#8497BD] shadow-sm outline-none transition-colors duration-200 focus:border-[#0A6CFF] focus:ring-2 focus:ring-[#0A6CFF]/20"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal delay={1}>
          <div
            role="tablist"
            aria-label={u.badge}
            className="flex sm:flex-wrap justify-start sm:justify-center gap-2.5 mb-10 overflow-x-auto sm:overflow-visible snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <CategoryPill
              label={u.allLabel}
              active={activeCat === 'all'}
              onClick={() => setActiveCat('all')}
            />
            {u.categories.map((cat) => (
              <CategoryPill
                key={cat.id}
                label={cat.name}
                active={activeCat === cat.id}
                onClick={() => setActiveCat(cat.id)}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Q&A accordion */}
        <ScrollReveal delay={2}>
          <div className="max-w-3xl mx-auto">
            {entries.length === 0 ? (
              <div className="text-center py-16 text-[#8497BD]">{u.noResults}</div>
            ) : (
              <ul className="space-y-3">
                {entries.map((item) => {
                  const isOpen = openKey === item.key;
                  return (
                    <li key={item.key}>
                      <div
                        className={`rounded-2xl border bg-white transition-all duration-300 ${
                          isOpen
                            ? 'border-[#0A6CFF]/40 shadow-[0_8px_30px_rgba(10,108,255,0.10)]'
                            : 'border-[#E2EAF7] hover:border-[#0A6CFF]/30'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenKey(isOpen ? null : item.key)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center gap-4 text-left px-5 sm:px-6 py-4 cursor-pointer"
                        >
                          <span className="flex-1 min-w-0">
                            {activeCat === 'all' && (
                              <span className="inline-block mb-1 px-2 py-0.5 rounded-md bg-[#EEF4FF] text-[#0A6CFF] text-[10px] font-semibold tracking-wide">
                                {item.catName}
                              </span>
                            )}
                            <span className="block text-[15px] sm:text-base font-bold text-[#0B1A33] leading-snug">
                              {item.q}
                            </span>
                          </span>
                          <span
                            className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isOpen ? 'bg-[#0A6CFF] text-white rotate-180' : 'bg-[#EEF4FF] text-[#0A6CFF]'
                            }`}
                            aria-hidden="true"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                              <path
                                d="M4 6l4 4 4-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </button>
                        {/* Smooth height animation via grid-rows 0fr→1fr */}
                        <div
                          className={`grid transition-all duration-300 ease-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="px-5 sm:px-6 pb-5 text-sm text-[#3A5080] leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`shrink-0 snap-start whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
        active
          ? 'bg-[#0A6CFF] text-white shadow-[0_4px_14px_rgba(10,108,255,0.30)]'
          : 'bg-white text-[#3A5080] border border-[#E2EAF7] hover:border-[#0A6CFF]/40 hover:text-[#0A6CFF]'
      }`}
    >
      {label}
    </button>
  );
}
