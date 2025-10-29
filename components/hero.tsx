import React from 'react';
import Link from 'next/link';
import { HeaderSectionTwo } from './header-2';
import Coin3D from '@/components/coin3d';
import { siteCtas, hackathonDetails } from '@/lib/site-config';
import TypewriterText from '@/components/ui/TypewriterText';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { CountdownTimer } from '@/components/ui/countdown-timer';

/**
 * HeroSection
 *
 * Top of the homepage with title, event metadata, CTA, 3D coin and countdown.
 * Reads all dynamic copy and dates from site-config for consistency and future CMS.
 */
export default function HeroSection() {
  const { label, href } = siteCtas.apply;
  const eventTagline = `${hackathonDetails.date} | ${hackathonDetails.locationShort ?? hackathonDetails.location}`;
  const regClose = hackathonDetails.registrationClosesAt;
  const eventStart = hackathonDetails.eventStartsAt;

  return (
    <>
      <HeaderSectionTwo />
      <main className="overflow-x-hidden">
        <section className="bg relative isolate overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-background/70 to-background -z-10 md:h-64 lg:h-80" />
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div data-hero-wrapper className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col px-6 lg:block lg:min-h-screen">
              <div data-hero-text className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl text-white">HACKMUIC 2025-2026</h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg text-white ">
                  <TypewriterText>{eventTagline}</TypewriterText>
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <InteractiveHoverButton>
                    <Link href={href}>
                      <span className="text-nowrap">{label}</span>
                    </Link>
                  </InteractiveHoverButton>
                </div>
              </div>

              <Coin3D />
            </div>
            <div className="mt-10 w-full sm:px-1 md:px-6 md:hidden">
              <CountdownTimer size="compact" registrationClosesAt={regClose} eventStartsAt={eventStart} />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-[18%] hidden justify-center px-4 sm:bottom-[14%] md:bottom-[12%] lg:bottom-[20%] lg:flex">
            <CountdownTimer registrationClosesAt={regClose} eventStartsAt={eventStart} />
          </div>
        </section>
      </main>
    </>
  );
}
