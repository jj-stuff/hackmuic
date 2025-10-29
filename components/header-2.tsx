'use client';

import Link from 'next/link';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { siteCtas } from '@/lib/site-config';

const menuItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'Tracks', href: '/#features' },
  { name: 'Team', href: '/#team' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Sponsors', href: '/sponsors' },
];

const darkColors = {
  background: 'rgba(40, 10, 60, 0.85)',
  border: 'rgba(180, 100, 255, 0.25)',
  mutedBorder: 'rgba(180, 100, 255, 0.15)',
  text: '#f4e8ff',
  accent: '#c89cff',
  shadow: '0 18px 50px rgba(0, 0, 0, 0.35)',
  backdrop: '#0b0012',
};

const lightColors = {
  background: 'rgba(240, 230, 255, 0.84)',
  border: 'rgba(160, 70, 255, 0.2)',
  mutedBorder: 'rgba(128, 0, 255, 0.15)',
  text: '#2d0033',
  accent: '#8000ff',
  shadow: '0 18px 45px rgba(120, 60, 180, 0.25)',
  backdrop: '#f5ebff',
};

export const HeaderSectionTwo = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [cardTheme, setCardTheme] = React.useState<'dark' | 'light'>('dark');
  const [menuState, setMenuState] = React.useState(false);

  const colors = cardTheme === 'dark' ? darkColors : lightColors;
  const { label, href } = siteCtas.apply;

  const toggleCardTheme = () => setCardTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const closeMenu = () => setMenuState(false);
  const isOpen = isHovered || menuState;

  return (
    <header className="fixed inset-x-0 top-0 z-20 flex justify-center px-4 pt-4 transition-colors duration-500" style={{ backgroundColor: menuState ? colors.backdrop : 'transparent' }}>
      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="pointer-events-auto relative w-full max-w-xl"
        style={{
          borderRadius: 24,
          backdropFilter: 'blur(16px)',
          background: colors.background,
          border: `1px solid ${colors.border}`,
          boxShadow: colors.shadow,
          color: colors.text,
        }}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <a href="#hero" aria-label="HackMUIC home">
              <Logo accent={colors.accent} />
            </a>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center gap-3">
              <Button asChild size="sm" className="bg-primary/90 hover:bg-primary">
                <Link href={href}>
                  <span className="text-nowrap">{label}</span>
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Button asChild size="sm" variant="secondary" className="border border-transparent bg-white/10 backdrop-blur">
              <Link href={href}>
                <span className="text-nowrap">{label}</span>
              </Link>
            </Button>
            <ThemeToggle />
            <button onClick={() => setMenuState((prev) => !prev)} aria-label={menuState ? 'Close menu' : 'Open menu'} className="rounded-full border border-white/20 p-2 transition hover:border-white/40" style={{ color: colors.text, borderColor: colors.mutedBorder }}>
              {menuState ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div key="menu-panel" layout initial={{ opacity: 0, height: 0, y: -12 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0, y: -12 }} transition={{ duration: 0.35, ease: 'easeInOut' }} className="overflow-hidden border-t px-5 pb-5 pt-2" style={{ borderColor: colors.mutedBorder }}>
              <div className="flex flex-col items-center gap-5 text-center lg:hidden">
                <nav className="flex w-full flex-col gap-4 text-lg font-semibold tracking-wide">
                  {menuItems.map((item) => (
                    <Link key={item.name} href={item.href} onClick={closeMenu} className="transition-colors duration-200 hover:underline" style={{ color: colors.text }}>
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="hidden flex-col items-center gap-6 text-center lg:flex">
                <nav className="flex w-full flex-col items-center gap-4 text-lg font-semibold tracking-wide">
                  {menuItems.map((item) => (
                    <Link key={item.name} href={item.href} className="transition-colors duration-200 hover:underline" style={{ color: colors.text }}>
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

const Logo = ({ accent }: { accent: string }) => (
  <div className="flex items-center gap-3">
    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-transparent sm:inline-block" style={{ WebkitTextStroke: `1px ${accent}` }}>
      HACKMUIC
    </span>
  </div>
);
