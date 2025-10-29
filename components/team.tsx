const placeholderAvatar = 'https://cdn-icons-png.flaticon.com/256/8013/8013505.png';

const sections = [
  {
    title: 'Executives',
    members: [
      { name: 'Pim', role: 'Lead Engineer', avatar: placeholderAvatar },
      { name: 'Phu', role: 'Frontend', avatar: placeholderAvatar },
      { name: 'Nanar', role: 'Backend', avatar: placeholderAvatar },
      { name: 'Krit', role: 'Mobile', avatar: placeholderAvatar },
    ],
  },
  {
    title: 'Project Managers',
    members: [
      { name: 'Blimmy', role: 'PM', avatar: 'team/blim.jpg' },
      { name: 'Kong', role: 'PM', avatar: placeholderAvatar },
      { name: 'Jump', role: 'PM', avatar: placeholderAvatar },
      { name: 'Ink', role: 'PM', avatar: placeholderAvatar },
      { name: 'Marc', role: 'PM', avatar: placeholderAvatar },
    ],
  },
  {
    title: 'Public Relations',
    members: [
      { name: 'Ploy', role: 'Social Media', avatar: placeholderAvatar },
      { name: 'Tanvi', role: 'Social Media', avatar: placeholderAvatar },
      { name: 'Pooh', role: 'Social Media', avatar: placeholderAvatar },
      { name: 'Freshy', role: 'Social Media', avatar: placeholderAvatar },
    ],
  },
  {
    title: 'Media',
    members: [
      { name: 'Tawan', role: 'Graphics Designer', avatar: placeholderAvatar },
      { name: 'Lily', role: 'Graphics Designer', avatar: placeholderAvatar },
      { name: 'Thann', role: 'Video Editor', avatar: placeholderAvatar },
      { name: 'Ohm', role: 'Video Editor', avatar: placeholderAvatar },
      { name: 'Poom', role: 'Photographer', avatar: placeholderAvatar },
      { name: 'Earth', role: 'Photographer', avatar: placeholderAvatar },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-0">
        <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Our team</h2>

        {sections.map((section, sectionIndex) => (
          <div key={section.title} className={sectionIndex === 0 ? '' : 'mt-8'}>
            <h3 className="mb-6 text-lg font-medium">{section.title}</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 border-t py-6 sm:grid-cols-3 lg:grid-cols-4">
              {section.members.map((member) => (
                <div key={member.name} className="group flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] w-full max-w-[8.5rem] overflow-hidden rounded-3xl shadow shadow-zinc-950/10 transition-all duration-500 group-hover:shadow-xl sm:max-w-[9.5rem] md:max-w-[11rem]">
                    <img className="h-full w-full rounded-3xl object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                  </div>
                  <span className="mt-3 block text-sm font-semibold tracking-tight transition-all duration-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 sm:text-base">{member.name}</span>
                  <span className="text-muted-foreground block text-xs translate-y-1 opacity-80 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
