'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { faqCategories, siteSocials } from '@/lib/site-config';

/**
 * FAQsTwo
 *
 * Accordion UI for frequently asked questions. The content list is sourced
 * from site-config so it can be replaced by CMS data without changing markup.
 */
export default function FAQsTwo() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4 text-balance">Find quick answers about our hackathon — from team size and duration to what to expect on event day.</p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="flex flex-col gap-8">
            {faqCategories.map((cat) => (
              <div key={cat.id}>
                <h3 className="mb-3 text-lg font-semibold tracking-tight">{cat.title}</h3>
                <Accordion type="single" collapsible className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                  {cat.items.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border-dashed">
                      <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-base">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground mt-6 px-8 text-center">
            Still have questions? Reach out to our{' '}
            <Link href={siteSocials.discord ?? '#'} className="text-primary font-medium hover:underline">
              discord server
            </Link>{' '}
            and we’ll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
