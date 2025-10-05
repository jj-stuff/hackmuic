import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { HeroHeader } from './header';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="bg relative isolate overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-background/70 to-background -z-10 md:h-64 lg:h-80" />
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col px-6 lg:block lg:min-h-screen">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">HACKMUIC 2025-2026</h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">02.11.25</p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Apply Here</span>
                    </Link>
                  </Button>
                  {/* <Button key={2} asChild size="lg" variant="ghost" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Apply Here</span>
                    </Link>
                  </Button> */}
                </div>
              </div>
              <Image className="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-80 lg:order-last lg:h-[125%] lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0" src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768" alt="Abstract Object" height="4000" width="3000" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
