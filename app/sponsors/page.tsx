import { Button } from '@/components/ui/button';
import { hackathonDetails } from '@/lib/site-config';
import { HeaderSectionTwo } from '@/components/header-2';
import FooterSection from '@/components/footer';

/**
 * SponsorsPage
 *
 * Landing page for prospective sponsors with key event details and a simple
 * interest form. All copy and dates are sourced from site-config to keep
 * content consistent and ready for a CMS.
 */

const SponsorsPage = () => {
  return (
    <>
      <HeaderSectionTwo />
      <main className="mx-auto w-full max-w-4xl px-6 py-24">
        <header className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{hackathonDetails.name}</h1>
          <p className="text-lg text-muted-foreground">{hackathonDetails.about}</p>
          <dl className="grid gap-4 text-left text-sm text-muted-foreground sm:grid-cols-2">
            <div className="rounded-lg border border-border/60 bg-card/60 p-4">
              <dt className="text-xs uppercase tracking-wide text-foreground/70">Hackathon Date</dt>
              <dd className="mt-2 text-base font-medium text-foreground">{hackathonDetails.date}</dd>
            </div>
            <div className="rounded-lg border border-border/60 bg-card/60 p-4">
              <dt className="text-xs uppercase tracking-wide text-foreground/70">Location</dt>
              <dd className="mt-2 text-base font-medium text-foreground">{hackathonDetails.location}</dd>
            </div>
            <div className="sm:col-span-2 rounded-lg border border-border/60 bg-card/60 p-4">
              <dt className="text-xs uppercase tracking-wide text-foreground/70">Contact Email</dt>
              <dd className="mt-2 text-base font-medium text-foreground">{hackathonDetails.contactEmail}</dd>
            </div>
          </dl>
        </header>

        <section className="mt-12 rounded-xl border border-border bg-card/60 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-2xl font-semibold tracking-tight">Become a Sponsor</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Share your details below and our partnerships team will reach out at <span className="font-medium text-foreground">{hackathonDetails.contactEmail}</span>.
          </p>

          <form className="mt-8 grid gap-6">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-foreground" htmlFor="organization">
                Sponsor/Organization Name <span className="text-destructive">*</span>
              </label>
              <input id="organization" name="organization" type="text" autoComplete="organization" required className="w-full rounded-lg border border-border bg-background px-4 py-2 text-base shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-primary/60" />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-foreground" htmlFor="contact-name">
                Primary Contact Name <span className="text-destructive">*</span>
              </label>
              <input id="contact-name" name="contactName" type="text" autoComplete="name" required className="w-full rounded-lg border border-border bg-background px-4 py-2 text-base shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-primary/60" />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-foreground" htmlFor="contact-email">
                Contact Email Address <span className="text-destructive">*</span>
              </label>
              <input id="contact-email" name="contactEmail" type="email" autoComplete="email" required className="w-full rounded-lg border border-border bg-background px-4 py-2 text-base shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-primary/60" />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-foreground" htmlFor="additional-info">
                Additional Information <span className="text-destructive">*</span>
              </label>
              <textarea id="additional-info" name="additionalInfo" rows={5} required className="w-full rounded-lg border border-border bg-background px-4 py-2 text-base shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-primary/60" placeholder="Tell us about your organization, sponsorship goals, or any specific ideas." />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-fit">
              Submit Interest
            </Button>
          </form>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default SponsorsPage;
