import Link from 'next/link';
import type { ReactElement } from 'react';
import { FaLinkedinIn, FaDiscord, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { policies, siteSocials } from '@/lib/site-config';

/**
 * FooterSection
 *
 * Renders brand wordmark, social links, and policy links.
 * Social URLs are centralized in site-config for consistency / CMS handoff.
 */
export default function FooterSection() {
  const iconByKey: Record<string, ReactElement> = {
    instagram: <FaInstagram className="h-6 w-6" />,
    tiktok: <FaTiktok className="h-6 w-6" />,
    linkedin: <FaLinkedinIn className="h-6 w-6" />,
    discord: <FaDiscord className="h-6 w-6" />,
  };

  return (
    <footer className="py-16 md:py-32 border-t border-muted">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side — big MUIC text */}
        <div className="text-6xl md:text-8xl font-bold tracking-tight text-primary">MUIC</div>

        {/* Right side — links, social icons, and copyright */}
        <div className="flex flex-col items-center md:items-end gap-4 text-sm">
          {/* Social Links */}
          <div className="flex gap-4">
            {Object.entries(siteSocials)
              .filter(([, url]) => !!url)
              .map(([key, url]) => (
                <Link
                  key={key}
                  href={url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="text-muted-foreground hover:text-primary"
                >
                  {iconByKey[key]}
                </Link>
              ))}
          </div>

          {/* Code of Conduct */}
          <Link href={policies.codeOfConductUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary underline">
            MUIC Code of Conduct
          </Link>

          {/* Copyright */}
          <span className="text-muted-foreground text-xs">© {new Date().getFullYear()} HACKMUIC. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
