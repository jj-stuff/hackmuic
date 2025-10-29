'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { siteCtas, siteNav } from '@/lib/site-config';

/**
 * HeaderSectionTwo
 *
 * Sticky, translucent header with theme-aware styles, navigation links,
 * and a CTA button. Built to read configuration from site-config so
 * content can later come from a CMS without changing component code.
 */

// Theme token palette for the glassy header treatment
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
  background: 'rgba(250, 232, 253, 0.77)',
  border: 'rgba(160, 70, 255, 0.2)',
  mutedBorder: 'rgba(128, 0, 255, 0.15)',
  text: '#2d0033',
  accent: '#8000ff',
  shadow: '0 18px 45px rgba(120, 60, 180, 0.25)',
  backdrop: '#f5ebff',
};

export const HeaderSectionTwo = () => {
  const { resolvedTheme } = useTheme();
  // Interactions: open on hover (desktop) and toggle state (mobile)
  const [isHovered, setIsHovered] = React.useState(false);
  const [menuState, setMenuState] = React.useState(false);

  const colors = resolvedTheme === 'light' ? lightColors : darkColors;
  const { label, href } = siteCtas.apply;

  const closeMenu = () => setMenuState(false);
  const isOpen = isHovered || menuState;

  return (
    <header
      className="fixed inset-x-0 top-0 z-20 flex justify-center px-4 pt-4 transition-colors duration-500"
      style={{ backgroundColor: menuState ? colors.backdrop : 'transparent' }}
    >
      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="pointer-events-auto relative w-full max-w-lg"
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
            <Link href="#hero" aria-label="HackMUIC home">
              <Logo accent={colors.accent} />
            </Link>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-2">
              <Button asChild size="sm" className="bg-primary/90 hover:bg-primary">
                <Link href={href}>
                  <span className="text-nowrap">{label}</span>
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            {/* Mobile menu toggle */}
            <Button
              size="icon"
              variant="ghost"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuState((s) => !s)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              key="menu-panel"
              layout
              initial={{ opacity: 0, height: 0, y: -12 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden border-t px-5 pb-5 pt-2"
              style={{ borderColor: colors.mutedBorder }}
            >
              <div className="flex flex-col items-center gap-5 text-center lg:hidden">
                <nav className="flex w-full flex-col gap-4 text-2xl font-semibold tracking-wide">
                  {siteNav.menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="transition-colors duration-200 hover:underline"
                      style={{
                        color: colors.text,
                        textDecorationStyle: 'wavy',
                        textDecorationColor: colors.accent,
                        textUnderlineOffset: 6,
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <Button asChild size="sm" className="bg-primary/90 hover:bg-primary">
                  <Link href={href}>
                    <span className="text-nowrap">{label}</span>
                  </Link>
                </Button>
              </div>

              <div className="hidden flex-col items-center gap-6 text-center lg:flex">
                <nav className="flex w-full flex-col items-center gap-4 text-lg font-semibold tracking-wide">
                  {siteNav.menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="transition-colors duration-200 hover:underline"
                      style={{
                        color: colors.text,
                        textDecorationStyle: 'wavy',
                        textDecorationColor: colors.accent,
                        textUnderlineOffset: 6,
                      }}
                    >
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

/** Inline wordmark used in the header. */
const Logo = ({ accent }: { accent: string }) => (
  <div className="flex items-center gap-3">
    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-transparent sm:inline-block" style={{ WebkitTextStroke: `1px ${accent}` }}>
      HACKMUIC
    </span>
  </div>
);
