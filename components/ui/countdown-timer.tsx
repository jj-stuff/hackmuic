'use client';

import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

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

/**
 * CountdownTimer
 *
 * Generic, reusable countdown component. Provide a `target` date
 * (Date or ISO string). If omitted, it renders a placeholder state.
 */
type CountdownTimerProps = {
  className?: string;
  size?: 'default' | 'compact';
  /** Registration close target (Date instance or ISO string). */
  registrationClosesAt?: Date | string;
  /** Event start target (Date instance or ISO string). */
  eventStartsAt?: Date | string;
  /** Optional headings for each phase; defaults provided. */
  headingRegistration?: string;
  headingEvent?: string;
};

export function CountdownTimer({
  className,
  size = 'default',
  registrationClosesAt,
  eventStartsAt,
  headingRegistration = 'Registration Closes In',
  headingEvent = 'Event Starts In',
}: CountdownTimerProps) {
  const [timeParts, setTimeParts] = useState<TimeParts | null>(null);
  const [phase, setPhase] = useState<'registration' | 'event' | 'past'>('registration');

  useEffect(() => {
    const updateTime = () => {
      const now = Date.now();

      const regDate = registrationClosesAt
        ? typeof registrationClosesAt === 'string'
          ? new Date(registrationClosesAt)
          : registrationClosesAt
        : undefined;
      const eventDate = eventStartsAt
        ? typeof eventStartsAt === 'string'
          ? new Date(eventStartsAt)
          : eventStartsAt
        : undefined;

      if (regDate && now < regDate.getTime()) {
        setPhase('registration');
        setTimeParts(calculateTimeParts(regDate));
        return;
      }

      if (eventDate && now < eventDate.getTime()) {
        setPhase('event');
        setTimeParts(calculateTimeParts(eventDate));
        return;
      }

      setPhase('past');
      setTimeParts({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
    };

    updateTime();

    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, [registrationClosesAt, eventStartsAt]);

  const entries = useMemo(
    () =>
      timeParts
        ? [
            { label: 'Days', value: pad(timeParts.days) },
            { label: 'Hours', value: pad(timeParts.hours) },
            { label: 'Minutes', value: pad(timeParts.minutes) },
            { label: 'Seconds', value: pad(timeParts.seconds) },
          ]
        : [
            { label: 'Days', value: '--' },
            { label: 'Hours', value: '--' },
            { label: 'Minutes', value: '--' },
            { label: 'Seconds', value: '--' },
          ],
    [timeParts]
  );

  const containerClasses = size === 'compact' ? 'mx-auto flex w-80 flex-col items-center gap-3 rounded-xl border border-border/40 bg-background/60 px-2 py-4 text-xs text-muted-foreground shadow backdrop-blur' : 'inline-flex w-full max-w-xl flex-col items-center gap-5 rounded-2xl border border-border/40 bg-background/60 px-6 py-6 text-sm text-muted-foreground shadow-lg backdrop-blur ';

  const headingClasses = size === 'compact' ? undefined : 'text-[1rem] uppercase tracking-[0.8em] text-grey sm:text-xs';

  const entriesWrapperClasses = size === 'compact' ? 'flex w-full items-end justify-between gap-2 text-foreground' : 'flex w-full flex-wrap items-end justify-center gap-5 text-foreground sm:flex-nowrap sm:justify-between sm:gap-6';

  const itemClasses = size === 'compact' ? 'flex flex-1 flex-col items-center gap-1 text-center' : 'flex basis-[45%] flex-col items-center gap-1 text-center sm:basis-auto sm:flex-1';

  const valueClasses = size === 'compact' ? 'text-2xl font-semibold leading-none tabular-nums' : 'text-2xl font-semibold leading-none tabular-nums sm:text-4xl md:text-5xl';

  const labelClasses = size === 'compact' ? 'text-[0.55rem] uppercase tracking-[0.32em] text-muted-foreground/70' : 'text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground/70 sm:text-xs';

  const headingText = useMemo(() => {
    if (size === 'compact') return undefined;
    if (phase === 'registration') return headingRegistration;
    if (phase === 'event') return headingEvent;
    return undefined;
  }, [phase, size, headingRegistration, headingEvent]);

  return (
    <div className={cn(containerClasses, className)}>
      {headingClasses && headingText ? <span className={headingClasses}>{headingText}</span> : null}
      {timeParts?.isPast ? (
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
