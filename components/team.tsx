const placeholderAvatar = 'https://cdn-icons-png.flaticon.com/256/8013/8013505.png';

const sections = [
  {
    title: 'Leadership',
    members: [
      { name: 'Leadership Member 1', role: 'Founder', avatar: 'team/blim.jpg' },
      { name: 'Leadership Member 2', role: 'Operations', avatar: placeholderAvatar },
      { name: 'Leadership Member 3', role: 'Strategy', avatar: placeholderAvatar },
      { name: 'Leadership Member 4', role: 'Finance', avatar: placeholderAvatar },
      { name: 'Leadership Member 5', role: 'People', avatar: placeholderAvatar },
      { name: 'Leadership Member 6', role: 'Partnerships', avatar: placeholderAvatar },
    ],
  },
  {
    title: 'Engineering',
    members: [
      { name: 'Engineering Member 1', role: 'Lead Engineer', avatar: placeholderAvatar },
      { name: 'Engineering Member 2', role: 'Frontend', avatar: placeholderAvatar },
      { name: 'Engineering Member 3', role: 'Backend', avatar: placeholderAvatar },
      { name: 'Engineering Member 4', role: 'Mobile', avatar: placeholderAvatar },
      { name: 'Engineering Member 5', role: 'Infrastructure', avatar: placeholderAvatar },
      { name: 'Engineering Member 6', role: 'QA', avatar: placeholderAvatar },
    ],
  },
  {
    title: 'Marketing',
    members: [
      { name: 'Marketing Member 1', role: 'Project Manager', avatar: placeholderAvatar },
      { name: 'Marketing Member 2', role: 'Growth', avatar: placeholderAvatar },
      { name: 'Marketing Member 3', role: 'Content', avatar: placeholderAvatar },
      { name: 'Marketing Member 4', role: 'Design', avatar: placeholderAvatar },
      { name: 'Marketing Member 5', role: 'Community', avatar: placeholderAvatar },
      { name: 'Marketing Member 6', role: 'Partnerships', avatar: placeholderAvatar },
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
