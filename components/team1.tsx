const sections = [
  {
    title: 'Leadership',
    members: [
      {
        name: 'Stephan Bordellier',
        role: 'Founder',
        avatar: '/team/stephan.jpg',
      },
    ],
  },
  {
    title: 'Engineering',
    members: [
      {
        name: 'Aden Barcroft',
        role: 'Co-Founder',
        avatar: '/team/aden.jpg',
      },
    ],
  },
  {
    title: 'Marketing',
    members: [
      {
        name: 'Siriphanaphon Sirikun',
        role: 'Project Manager',
        avatar: '/team/blim.jpg',
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 md:py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Our team</h2>

        {sections.map((section, sectionIndex) => (
          <div key={section.title} className={sectionIndex === 0 ? '' : 'mt-6'}>
            <h3 className="mb-6 text-lg font-medium">{section.title}</h3>
            <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
              {section.members.map((member) => (
                <div key={member.name} className="group">
                  <div className="bg-background size-20 overflow-hidden rounded-2xl border p-0.5 shadow shadow-zinc-950/5 transition-all duration-500 group-hover:shadow-lg">
                    <img className="h-full w-full rounded-xl object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                  </div>
                  <span className="mt-2 block text-sm">{member.name}</span>
                  <span className="text-muted-foreground block text-xs">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
