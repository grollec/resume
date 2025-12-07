import { ExportCv } from "./ExportCv";

const primaryClass = "text-brand-500 dark:text-neutral-200";
const primaryHoverClass = "hover:text-mint-500 dark:hover:text-mint-400"; // Using mint instead of secondary
const secondaryClass = "text-neutral-700 dark:text-neutral-300";
const bgPrimaryClass = "bg-brand-50 dark:bg-brand-900/20";
const bgPrimaryClassHover = "hover:bg-brand-100 dark:hover:bg-brand-900/10";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/renaud-b-8b516b8b",
    icon: "🔗",
  },
  {
    name: "GitHub",
    url: "https://github.com/grollec",
    icon: "🐙",
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/Rolandkuku",
    icon: "🦊",
  },
];

const skills = [
  {
    title: "Frontend",
    skills: "React.js, TypeScript, Storybook, React Query",
  },
  { title: "Backend", skills: "Node.js, Nest.js, Express, Python (Django)" },
  { title: "Mobile", skills: "React Native, Android, Android compose" },
  {
    title: "Tools & Practices",
    skills: "Agile, Datadog, AWS, Jenkins, Github actions, Vite",
  },
  {
    title: "Languages",
    skills: "French (Native), English (Full Professional)",
  },
];

const professionalExperience = [
  {
    title: "Full Stack Developer",
    company: "Renaud Bellec Dev",
    date: "August 2021 - Present",
    details: ["Software engineering services for individuals and companies"],
  },
  {
    title: "Software Engineer",
    company: "Sencrop",
    date: "February 2023 - December 2024",
    details: [
      "React + Capacitor web and mobile app. Node.js backend",
      "Combined +30,000 data points with existing forecasts models to build a next-level forecasts solution",
      "Migrated all apps from auth0 and custom solutions to a consolidated ory based auth feature",
      "Built a wide range of map views using Leaflet, including a rain radar",
      "Monitored apps level of service with an extensive use of Datadog",
      "Significantly improved the app’s performances, from the cold start to the frame rate when doing heavy computation",
    ],
  },
  {
    title: "Lead Front Developer",
    company: "Folk",
    date: "October 2019 - July 2021",
    details: [
      "Led the frontend development of next-generation contact management solutions",
      "Implemented slick and intuitive user interfaces using React and CSS modules",
      "Managed state and live data using Apollo Client 3",
      "Established quality control practices using TypeScript, Prettier, Codecov, and Jest",
      "Implemented live monitoring solutions with Sentry and Datadog",
    ],
  },
  {
    title: "Front Developer",
    company: "Thanxngo",
    date: "February 2018 - October 2019",
    details: [
      "React Native app. Django backend",
      "Used early JavaScript static type tools like Flow",
      "Set up continuous deployment using Fastlane",
    ],
  },
  {
    title: "Front Developer",
    company: "SpiceSoft",
    date: "February 2014 - February 2018",
    details: [
      "JQuery, Backbone.js and React web app. Django backend",
      "Built a real time desk office rental feature",
      "Built an in-app payment feature using Mangopay",
    ],
  },
];

const education = [
  {
    degree: "Master's in Web Engineering",
    school: "ESGI",
    date: "2016 - 2018",
  },
  {
    degree: "Bachelor's in Web Engineering",
    school: "ESGI",
    date: "2015 - 2016",
  },
  {
    degree: "BTS SIO, Software Solutions and Business Applications",
    school: "Infosup",
    date: "2013 - 2015",
  },
];

const projects = [
  {
    name: "Sencrop",
    tech: "React, Typescript, Storybook, NestJS",
    description:
      "Sencrop aims at empowering farmers with live meteo data coming from +30,000 online device accross europe.",
    url: "https://sencrop.com/uk/",
  },
  {
    name: "Folk",
    tech: "React, TypeScript, Apollo GraphQL",
    description: "Folk is a CRM with contact as a primitive.",
    url: "https://www.folk.app/",
  },
  {
    name: "Total flexible solutions",
    tech: "React, TypeScript, Django",
    description:
      "Total flex provides optimised power solutions from the enegy production to its consumption in order to reduce GHG emissions.",
    url: "https://flexiblepower.totalenergies.com/en",
  },
  {
    name: "Girondins4Ever",
    tech: "React Native, TypeScript, WordPress REST API",
    description:
      "G4E is a fanzine about the mighty Girondins de Bordeaux football club. This is a simple Android news reader.",
    url: "https://play.google.com/store/apps/details?id=com.girondins4ever.g4etest",
  },
];

const introduction = {
  title: "👋 Hello world",
  content: `My name is Renaud and I am what you would call a ✨ Full Stack Software Developer ✨ these days.
  I'm specialized in the React ecosystem, with a strong focus on delivering high-quality, performant applications.
  I've also worked extensively with backend technologies, primarily NestJS and Django.
  Over the past 10 years, I've been lucky enough to work on beautiful projects, making friends and gathering experience along the way.
  I'll be available for a new adventure from late March 2025. If you think my expertise fits the needs of your awesome project, let's have a chat!`,
};

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 p-6 sm:p-12 mb-8 rounded-2xl shadow-lg transition-colors duration-300">
      <div className="mb-8">
        <ExportCv />
      </div>
      <header className="text-center mb-8 pb-8">
        <h1
          className={`text-5xl ${primaryClass} font-bold mb-3 tracking-tight`}
        >
          Renaud Bellec
        </h1>
        <div className={`text-2xl ${secondaryClass} font-semibold mb-4`}>
          ⌨ Full Stack Software Developer ⌨
        </div>
        <div className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 space-y-1">
          📍 Aix-en-Provence, France
          <br />
          📧{" "}
          <a
            href="mailto:renaud.bellec.3@gmail.com"
            className={`${primaryClass} ${primaryHoverClass} transition-colors font-medium`}
          >
            renaud.bellec.3@gmail.com
          </a>
          <br />
          <div className="flex justify-center items-center gap-4 mt-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${primaryClass} ${primaryHoverClass} transition-colors font-medium flex items-center gap-1`}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="mb-12">
        <h2
          className={`text-3xl ${primaryClass} font-bold mb-6 pb-2 border-b-2 border-neutral-100 dark:border-neutral-700`}
        >
          {introduction.title}
        </h2>
        <p
          className={`${secondaryClass} text-lg leading-relaxed whitespace-pre-line`}
        >
          {introduction.content}
        </p>
      </section>

      <section className="mb-12">
        <h2
          className={`text-3xl ${primaryClass} font-bold mb-6 pb-2 border-b-2 border-neutral-100 dark:border-neutral-700`}
        >
          ✨ Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.title}
              className={`${bgPrimaryClass} p-5 rounded-lg border transition-all duration-300`}
            >
              <h3 className={`${primaryClass} text-xl font-bold mb-3`}>
                {category.title}
              </h3>
              <div className={`${secondaryClass} text-lg`}>
                {category.skills}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2
          className={`text-3xl ${primaryClass} font-bold mb-6 pb-2 border-b-2 border-neutral-100 dark:border-neutral-700`}
        >
          🚀 Notable Projects
        </h2>
        <a>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a href={project.url} target="_blank" key={project.name}>
                <div
                  key={project.name}
                  className={`${bgPrimaryClass} ${bgPrimaryClassHover} transition-all duration-300 p-5 rounded-lg border `}
                >
                  <h3 className={`${primaryClass} text-xl font-bold mb-2`}>
                    {project.name}
                  </h3>
                  <div className={`${secondaryClass} font-medium mb-2`}>
                    {project.tech}
                  </div>
                  <p className={`${secondaryClass} text-lg mb-3`}>
                    {project.description}
                  </p>
                  {project.url && (
                    <p
                      className={`${primaryClass} ${primaryHoverClass} transition-colors text-sm font-medium`}
                    >
                      View Project →
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </a>
      </section>

      <section className="mb-12">
        <h2
          className={`text-3xl ${primaryClass} font-bold mb-6 pb-2 border-b-2 border-neutral-100 dark:border-neutral-700`}
        >
          🧑‍💻 Professional Experience
        </h2>

        {professionalExperience.map((job) => (
          <div key={job.company} className="mb-8">
            <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
              {job.title}
            </div>
            <div
              className={`${primaryClass} ${primaryHoverClass} transition-colors text-xl font-semibold`}
            >
              {job.company}
            </div>
            <div className="text-lg text-neutral-600 dark:text-neutral-400 italic mb-3">
              {job.date}
            </div>
            {job.details.length > 0 && (
              <ul
                className={`list-disc list-inside ${secondaryClass} text-lg space-y-2`}
              >
                {job.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2
          className={`text-3xl ${primaryClass} font-bold mb-6 pb-2 border-b-2 border-neutral-100 dark:border-neutral-700`}
        >
          📚 Education
        </h2>
        {education.map((edu) => (
          <div key={edu.degree} className="mb-6">
            <div className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              {edu.degree}
            </div>
            <div
              className={`${primaryClass} ${primaryHoverClass} transition-colors text-lg font-semibold`}
            >
              {edu.school}
            </div>
            <div className="text-lg text-neutral-600 dark:text-neutral-400 italic">
              {edu.date}
            </div>
          </div>
        ))}
      </section>

      <footer className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-700 text-center text-neutral-600 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Renaud Bellec. All rights reserved.</p>
      </footer>
    </div>
  );
}
