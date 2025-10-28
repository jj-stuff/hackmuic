'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HeartPulse, PiggyBank, Leaf, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MorphingText } from '@/components/ui/morphing-text';

export default function Features() {
  type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4';
  const [activeItem, setActiveItem] = useState<ImageKey>('item-1');

  const images = {
    'item-1': { image: '/tracks/healthcare.jpg', alt: 'Healthcare Technology' },
    'item-2': { image: '/tracks/fintech.webp', alt: 'Fintech Innovation' },
    'item-3': { image: '/tracks/sustainability.jpg', alt: 'Sustainability Solutions' },
    'item-4': { image: '/tracks/education.jpg', alt: 'Education Innovation' },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">TRACKS</h2>
          <p>Our hackathon highlights four focus areas shaping the future — each track challenges you to create impactful, forward-thinking solutions that solve real-world problems.</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion type="single" value={activeItem} onValueChange={(value) => setActiveItem(value as ImageKey)} className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <HeartPulse className="size-4" />
                  Healthcare
                </div>
              </AccordionTrigger>
              <AccordionContent>Reimagine wellness and care accessibility — from personalized health dashboards to AI-assisted diagnostics improving global healthcare outcomes.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <PiggyBank className="size-4" />
                  Financial Technology
                </div>
              </AccordionTrigger>
              <AccordionContent>Build smarter, safer, and more inclusive financial tools — from AI-driven budgeting to blockchain-powered transparency — shaping how we save, invest, and trade.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Leaf className="size-4" />
                  Sustainability
                </div>
              </AccordionTrigger>
              <AccordionContent>Develop solutions for a cleaner, more sustainable planet — energy tracking apps, waste reduction systems, or innovative tools that empower green lifestyles.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <GraduationCap className="size-4" />
                  Education
                </div>
              </AccordionTrigger>
              <AccordionContent>Transform how people learn through gamified apps, adaptive tutoring systems, and collaborative tools that make education more engaging and equitable.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="bg-background relative w-full rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div key={`${activeItem}-id`} initial={{ opacity: 0, y: 6, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 6, scale: 0.98 }} transition={{ duration: 0.2 }} className="relative w-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md aspect-[16/9]">
                  <Image src={images[activeItem].image} alt={images[activeItem].alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-left-top dark:mix-blend-lighten" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
