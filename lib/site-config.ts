/**
 * Central site configuration and human-editable content.
 *
 * This is a stepping stone toward a headless CMS: all copy, links,
 * and key dates live here so components can render from a single source of truth.
 * Later, replace this module’s exports with CMS queries while keeping types stable.
 */

// ------------------------------
// Types
// ------------------------------

export type NavItem = { name: string; href: string };

export type CTA = { label: string; href: string };

export type SocialLinks = {
  instagram?: string;
  tiktok?: string;
  linkedin?: string;
  discord?: string;
};

export type FAQItem = { id: string; question: string; answer: string };
export type FAQCategory = { id: string; title: string; items: FAQItem[] };

export type HackathonDetails = {
  name: string;
  about: string;
  /** Human-readable date for display (e.g., "November 7, 2025"). */
  date: string;
  /** ISO 8601 timestamp for timers and logic (e.g., registration closes). */
  registrationClosesAt: string;
  /** ISO 8601 timestamp for when the event actually starts. */
  eventStartsAt: string;
  /** Venue or city for display. */
  location: string;
  /** Short label for compact placements (e.g., "MUIC Campus"). */
  locationShort?: string;
  contactEmail: string;
};

// ------------------------------
// Content
// ------------------------------

export const hackathonDetails: HackathonDetails = {
  name: 'Hack@MUIC',
  about:
    'Hack@MUIC is the annual student-led hackathon at Mahidol University International College, bringing innovators together to build meaningful solutions over a fast-paced weekend.',
  date: 'November 7, 2025',
  registrationClosesAt: '2025-11-06T16:59:00Z',
  eventStartsAt: '2025-11-07T02:00:00Z',
  location: 'Mahidol University International College, Salaya Campus, Thailand',
  locationShort: 'MUIC Campus',
  contactEmail: 'sponsors@hackmuic.com',
};

export const siteCtas: { apply: CTA } = {
  apply: {
    label: 'Apply Here',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdcSVCtBRM30rcgbqqkHV02q-4N6kmhhITdCWB8ythHqsXkkw/viewform',
  },
};

export const siteNav: { menuItems: NavItem[] } = {
  menuItems: [
    { name: 'Home', href: '/#hero' },
    { name: 'Tracks', href: '/#features' },
    { name: 'Team', href: '/#team' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Sponsors', href: '/sponsors' },
  ],
};

export const siteSocials: SocialLinks = {
  instagram: 'https://www.instagram.com/hack.muic/',
  tiktok: 'https://www.tiktok.com/@hackmuic',
  linkedin: 'https://www.linkedin.com/company/hack-muic/',
  discord: '#', // Replace when Discord is available
};

export const policies = {
  codeOfConductUrl:
    'https://muic.mahidol.ac.th/eng/student-life/students-activities/code-of-student-conduct/',
};

export const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        id: 'item-3',
        question: 'Do I need prior experience to join?',
        answer:
          'Not at all! Our events welcome participants of all skill levels. Whether you’re a first-time hacker or an experienced developer, there’s a place for you here.',
      },
      {
        id: 'item-4',
        question: 'What should I bring?',
        answer:
          'Bring your laptop, charger, and any tools you need for your project. We’ll provide Wi-Fi, workspace, and snacks during the event.',
      },
      {
        id: 'item-5',
        question: 'How many hackathons do you host per semester?',
        answer:
          'We typically organize one major hackathon each term, along with smaller workshops or mini-hack sessions throughout the semester.',
      },
    ],
  },
  {
    id: 'apply',
    title: 'Apply',
    items: [
      {
        id: 'item-1',
        question: 'How long does the hackathon last?',
        answer:
          'This is a short-format hackathon lasting a few hours rather than overnight. It’s designed to be beginner-friendly and easy to join, even with a busy schedule.',
      },
    ],
  },
  {
    id: 'teams',
    title: 'Teams',
    items: [
      {
        id: 'item-2',
        question: 'How many people can be in a team?',
        answer:
          'Teams can have up to four members. You can also participate solo if you prefer working independently — collaboration is encouraged but not required.',
      },
    ],
  },
  {
    id: 'hackathon',
    title: 'Hackathon',
    items: [
      {
        id: 'item-6',
        question: 'Is the event open to non-MUIC students?',
        answer:
          'At the moment, participation is limited to MU students, but future events may open up to students from nearby universities.',
      },
      {
        id: 'item-7',
        question: 'Will there be prizes?',
        answer:
          'Yes! While the focus is on learning and creativity, we do award prizes for standout projects across innovation, design, and impact categories.',
      },
    ],
  },
];
