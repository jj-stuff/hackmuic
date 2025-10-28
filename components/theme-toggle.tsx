'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { ThemeToggleButton5 } from '@/components/ui/skiper4';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted ? (theme ?? resolvedTheme) === 'dark' : false;

  if (!mounted) {
    return <div className="size-12" aria-hidden="true" />;
  }

  return (
    <ThemeToggleButton5 aria-label="Toggle theme" className="size-8" isDark={isDark} onToggle={() => setTheme(isDark ? 'light' : 'dark')}>
      <span className="sr-only">Toggle theme</span>
    </ThemeToggleButton5>
  );
}
