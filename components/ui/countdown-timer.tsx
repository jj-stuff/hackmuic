'use client';

import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

const HACKMUIC_START = new Date('2025-11-06T16:59:00Z');

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

function calculateTimeParts(target: Date): TimeParts {
  const now = Date.now();
  const diff = target.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isPast: false };
}

function pad(num: number) {
  return num.toString().padStart(2, '0');
}

type CountdownTimerProps = {
  className?: string;
  size?: 'default' | 'compact';
};

export function CountdownTimer({ className, size = 'default' }: CountdownTimerProps) {
  const [timeParts, setTimeParts] = useState<TimeParts>(() => calculateTimeParts(HACKMUIC_START));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeParts(calculateTimeParts(HACKMUIC_START));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const entries = useMemo(
    () => [
      { label: 'Days', value: pad(timeParts.days) },
      { label: 'Hours', value: pad(timeParts.hours) },
      { label: 'Minutes', value: pad(timeParts.minutes) },
      { label: 'Seconds', value: pad(timeParts.seconds) },
    ],
    [timeParts.days, timeParts.hours, timeParts.minutes, timeParts.seconds]
  );

  const containerClasses = size === 'compact' ? 'inline-flex w-full flex-col items-center gap-3 rounded-xl border border-border/40 bg-background/70 px-4 py-4 text-xs text-muted-foreground shadow backdrop-blur' : 'inline-flex w-full max-w-xl flex-col items-center gap-5 rounded-2xl border border-border/40 bg-background/60 px-6 py-6 text-sm text-muted-foreground shadow-lg backdrop-blur ';

  const headingClasses = size === 'compact' ? undefined : 'text-[1rem] uppercase tracking-[0.8em] text-grey sm:text-xs';

  const entriesWrapperClasses = size === 'compact' ? 'flex w-full items-end justify-between gap-2 text-foreground' : 'flex w-full flex-wrap items-end justify-center gap-5 text-foreground sm:flex-nowrap sm:justify-between sm:gap-6';

  const itemClasses = size === 'compact' ? 'flex flex-1 flex-col items-center gap-1 text-center' : 'flex basis-[45%] flex-col items-center gap-1 text-center sm:basis-auto sm:flex-1';

  const valueClasses = size === 'compact' ? 'text-2xl font-semibold leading-none tabular-nums' : 'text-2xl font-semibold leading-none tabular-nums sm:text-4xl md:text-5xl';

  const labelClasses = size === 'compact' ? 'text-[0.55rem] uppercase tracking-[0.32em] text-muted-foreground/70' : 'text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground/70 sm:text-xs';

  return (
    <div className={cn(containerClasses, className)}>
      {headingClasses ? <span className={headingClasses}>Registration Closes In</span> : null}
      {timeParts.isPast ? (
        <span className="text-2xl font-semibold text-foreground">Good Luck!</span>
      ) : (
        <div className={entriesWrapperClasses}>
          {entries.map(({ label, value }) => (
            <div key={label} className={itemClasses}>
              <span className={valueClasses}>{value}</span>
              <span className={labelClasses}>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

CountdownTimer.displayName = 'CountdownTimer';

export { HACKMUIC_START };
