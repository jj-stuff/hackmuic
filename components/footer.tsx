import Link from 'next/link';

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
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
              </svg>
            </Link>

            <Link href="https://www.tiktok.com/@hackmuic" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary">
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
              </svg>
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
