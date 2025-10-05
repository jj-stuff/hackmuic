'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

export default function FAQsTwo() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'How long does the hackathon last?',
      answer: 'This is a short-format hackathon lasting a few hours rather than overnight. It’s designed to be beginner-friendly and easy to join, even with a busy schedule.',
    },
    {
      id: 'item-2',
      question: 'How many people can be in a team?',
      answer: 'Teams can have up to four members. You can also participate solo if you prefer working independently — collaboration is encouraged but not required.',
    },
    {
      id: 'item-3',
      question: 'Do I need prior experience to join?',
      answer: 'Not at all! Our events welcome participants of all skill levels. Whether you’re a first-time hacker or an experienced developer, there’s a place for you here.',
    },
    {
      id: 'item-4',
      question: 'What should I bring?',
      answer: 'Bring your laptop, charger, and any tools you need for your project. We’ll provide Wi-Fi, workspace, and snacks during the event.',
    },
    {
      id: 'item-5',
      question: 'How many hackathons do you host per semester?',
      answer: 'We typically organize one major hackathon each term, along with smaller workshops or mini-hack sessions throughout the semester.',
    },
    {
      id: 'item-6',
      question: 'Is the event open to non-MUIC students?',
      answer: 'At the moment, participation is limited to MU students, but future events may open up to students from nearby universities.',
    },
    {
      id: 'item-7',
      question: 'Will there be prizes?',
      answer: 'Yes! While the focus is on learning and creativity, we do award prizes for standout projects across innovation, design, and impact categories.',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4 text-balance">Find quick answers about our hackathon — from team size and duration to what to expect on event day.</p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion type="single" collapsible className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-dashed">
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8 text-center">
            Still have questions? Reach out to our{' '}
            <Link href="#" className="text-primary font-medium hover:underline">
              organizing team
            </Link>{' '}
            and we’ll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
