import Link from 'next/link';
import { FaLinkedinIn, FaDiscord, FaInstagram, FaTiktok } from 'react-icons/fa6';

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32 border-t border-muted">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side — big MUIC text */}
        <div className="text-6xl md:text-8xl font-bold tracking-tight text-primary">MUIC</div>

        {/* Right side — links, social icons, and copyright */}
        <div className="flex flex-col items-center md:items-end gap-4 text-sm">
          {/* Social Links */}
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/hack.muic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
              <FaInstagram className="h-6 w-6" />
            </Link>

            <Link href="https://www.tiktok.com/@hackmuic" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary">
              <FaTiktok className="h-6 w-6" />
            </Link>

            <Link href="https://www.linkedin.com/company/hack-muic/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary">
              <FaLinkedinIn className="h-6 w-6" />
            </Link>

            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-muted-foreground hover:text-primary">
              <FaDiscord className="h-6 w-6" />
            </Link>
          </div>

          {/* Code of Conduct */}
          <Link href="https://muic.mahidol.ac.th/eng/student-life/students-activities/code-of-student-conduct/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary underline">
            MUIC Code of Conduct
          </Link>

          {/* Copyright */}
          <span className="text-muted-foreground text-xs">© {new Date().getFullYear()} HACKMUIC. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
