import { useState } from 'react';
import {
  Code2,
  Camera,
  Mail,
  Globe,
  Dumbbell,
  Gamepad2,
  LayoutTemplate,
  Users,
  Atom,
  Terminal,
  Braces,
  Database,
  Bird,
  Server,
  Coffee,
  Cloud,
  ArrowRight,
  Sun,
  Moon,
  ExternalLink,
  Send,
} from 'lucide-react';
import profileImg from './assets/hero.png';
import { useTheme } from './useTheme';

const CONTACT_EMAIL = 'lukas@mendesevic.de';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface Project {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface Certificate {
  name: string;
  file: string;
  thumbnail: string;
}

interface TimelineItem {
  year: string;
  title: string;
}

const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/lukasmende', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Instagram', url: 'https://instagram.com/lukas_men', icon: <Camera className="w-5 h-5" /> },
  { name: 'Website', url: 'https://mendesevic.de', icon: <Globe className="w-5 h-5" /> },
  { name: 'Email', url: 'mailto:lukas@mendesevic.de', icon: <Mail className="w-5 h-5" /> },
];

const projects: Project[] = [
  {
    name: 'Training Tracker App',
    description: 'Keep track of workouts, progress and personal goals.',
    icon: <Dumbbell className="w-6 h-6" />,
  },
  {
    name: 'Browser Game',
    description: 'An interactive game, playable right in the browser.',
    icon: <Gamepad2 className="w-6 h-6" />,
  },
  {
    name: 'Website',
    description: 'A modern, responsive site focused on performance.',
    icon: <LayoutTemplate className="w-6 h-6" />,
  },
  {
    name: 'Social Media App',
    description: 'Share content and connect with other users.',
    icon: <Users className="w-6 h-6" />,
  },
];

const skills: Skill[] = [
  { name: 'React', icon: <Atom className="w-6 h-6" /> },
  { name: 'Python', icon: <Terminal className="w-6 h-6" /> },
  { name: 'JS & TS', icon: <Braces className="w-6 h-6" /> },
  { name: 'SQL', icon: <Database className="w-6 h-6" /> },
  { name: 'Swift', icon: <Bird className="w-6 h-6" /> },
  { name: 'SAP HANA', icon: <Server className="w-6 h-6" /> },
  { name: 'Java', icon: <Coffee className="w-6 h-6" /> },
  { name: 'Cloudflare', icon: <Cloud className="w-6 h-6" /> },
];

const certificates: Certificate[] = [
  {
    name: 'School Certificate',
    file: '/certificates/school-certificate.pdf',
    thumbnail: '/certificates/thumbnails/school-certificate.jpg',
  },
  {
    name: 'Chemistry Award',
    file: '/certificates/chemistry-price.pdf',
    thumbnail: '/certificates/thumbnails/chemistry-price.jpg',
  },
  {
    name: 'Mathematics Award',
    file: '/certificates/math-price.pdf',
    thumbnail: '/certificates/thumbnails/math-price.jpg',
  },
  {
    name: 'Internship',
    file: '/certificates/internship.pdf',
    thumbnail: '/certificates/thumbnails/internship.jpg',
  },
  {
    name: 'SAP Project',
    file: '/certificates/sap-project.pdf',
    thumbnail: '/certificates/thumbnails/sap-project.jpg',
  },
  {
    name: 'SAP Seminar',
    file: '/certificates/sap-seminar.pdf',
    thumbnail: '/certificates/thumbnails/sap-seminar.jpg',
  },
  {
    name: 'SAP Workshop',
    file: '/certificates/sap-workshop.pdf',
    thumbnail: '/certificates/thumbnails/sap-workshop.jpg',
  },
];

const timeline: TimelineItem[] = [
  { year: '2001', title: 'Born' },
  { year: '2007', title: 'Started School' },
  { year: '2011', title: 'Secondary School' },
  { year: '2020', title: 'Began Business Informatics' },
  { year: '2023', title: 'Switched to Mathematics' },
];

export default function App() {
  const [theme, setTheme] = useTheme();
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${contactForm.name}`);
    const body = encodeURIComponent(`${contactForm.message}\n\n— ${contactForm.name} (${contactForm.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased transition-colors duration-300">
      {/* Theme toggle */}
      <button
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle dark mode"
        className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 p-3 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:text-[#0071e3] dark:hover:text-[#2997ff] shadow-sm transition-colors duration-200"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">
          {/* Text — mobile: 2nd, desktop: left */}
          <div className="order-2 md:order-1 flex-1 text-center md:text-left">
            <p className="text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] tracking-wide uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-3">
              Lukas Mendesevic
            </h1>
            <p className="text-xl text-neutral-500 dark:text-neutral-400 mb-8">
              Full&nbsp;Stack Software Developer
            </p>
            <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md mx-auto md:mx-0 mb-10">
              I build modern, high-performance software solutions &mdash; from backend to
              frontend &mdash; and bring ideas to life with clean code.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
              >
                View projects
              </a>
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="p-2.5 text-neutral-500 dark:text-neutral-400 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Photo — mobile: 1st, desktop: right */}
          <div className="order-1 md:order-2 shrink-0">
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-[40px] p-5 sm:p-7">
              <img
                src={profileImg}
                alt="Profile picture of Lukas Mendesevic"
                className="w-44 h-44 sm:w-64 sm:h-64 object-cover rounded-[28px] shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-neutral-50 dark:bg-neutral-900/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] tracking-wide uppercase mb-3">
              Selected Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-7 hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 flex items-center justify-center mb-6">
                  {project.icon}
                </div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">{project.name}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] tracking-wide uppercase mb-3">
              Tech Stack
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col items-center text-center gap-4 hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm text-neutral-900 dark:text-neutral-100 flex items-center justify-center">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] tracking-wide uppercase mb-3">
              Credentials
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Certificates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <a
                key={cert.name}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[3/4] bg-neutral-50 dark:bg-neutral-800 overflow-hidden">
                  <img
                    src={cert.thumbnail}
                    alt={`${cert.name} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">{cert.name}</h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#0071e3] dark:text-[#2997ff] group-hover:gap-2.5 transition-all duration-200">
                    View certificate
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="bg-neutral-50 dark:bg-neutral-900/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] tracking-wide uppercase mb-3">
              My Path
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Journey
            </h2>
          </div>

          {/* Desktop: horizontal timeline, fits the viewport without scrolling */}
          <div className="hidden md:flex items-center">
            <div className="relative flex-1 h-52">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-neutral-200 dark:from-neutral-700 via-neutral-400 dark:via-neutral-500 to-neutral-900 dark:to-white -translate-y-1/2" />

              {timeline.map((item, i) => {
                const pct = 5 + (i / (timeline.length - 1)) * 90;
                const isAbove = i % 2 === 0;
                return (
                  <div key={item.year} className="absolute top-1/2" style={{ left: `${pct}%` }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-neutral-900 dark:bg-white ring-4 ring-neutral-50 dark:ring-neutral-900 z-10" />
                    {isAbove ? (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center pb-3 w-32">
                        <span className="text-sm font-semibold text-neutral-900 dark:text-white text-center leading-snug">
                          {item.title}
                        </span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">{item.year}</span>
                        <span className="w-px h-6 bg-neutral-300 dark:bg-neutral-700" />
                      </div>
                    ) : (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pt-3 w-32">
                        <span className="w-px h-6 bg-neutral-300 dark:bg-neutral-700" />
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">{item.year}</span>
                        <span className="text-sm font-semibold text-neutral-900 dark:text-white text-center leading-snug">
                          {item.title}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Arrowhead: timeline continues to today */}
            <div className="relative shrink-0 flex flex-col items-center pl-2 h-52 justify-center">
              <ArrowRight className="w-6 h-6 text-neutral-900 dark:text-white" />
              <span className="absolute top-1/2 mt-4 text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                Today
              </span>
            </div>
          </div>

          {/* Mobile: vertical timeline, items alternating left/right of the line */}
          <div className="md:hidden">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-neutral-200 dark:from-neutral-700 via-neutral-400 dark:via-neutral-500 to-neutral-900 dark:to-white" />

              <div className="flex flex-col">
                {timeline.map((item, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div key={item.year} className="relative flex items-center py-6">
                      <div className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-neutral-900 dark:bg-white ring-4 ring-neutral-50 dark:ring-neutral-900 z-10" />
                      <div className="w-1/2 pr-6 flex flex-col items-end text-right">
                        {isLeft && (
                          <>
                            <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                              {item.title}
                            </span>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">{item.year}</span>
                          </>
                        )}
                      </div>
                      <div className="w-1/2 pl-6 flex flex-col items-start text-left">
                        {!isLeft && (
                          <>
                            <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                              {item.title}
                            </span>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">{item.year}</span>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Arrowhead: timeline continues to today */}
            <div className="flex flex-col items-center pt-2">
              <ArrowRight className="w-6 h-6 rotate-90 text-neutral-900 dark:text-white" />
              <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] tracking-wide uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Contact
            </h2>
            <p className="text-base text-neutral-500 dark:text-neutral-400 mt-4 max-w-md mx-auto">
              Have a project in mind or just want to say hi? Send a message and it'll open right up in your mail app.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="max-w-xl mx-auto flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-shadow duration-200"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-shadow duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-shadow duration-200 resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              className="self-center inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
            >
              Send message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 flex flex-col items-center gap-6">
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-neutral-500 dark:text-neutral-400 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-6 text-neutral-500 dark:text-neutral-400 text-sm">
            <a href="/privacy/" className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/imprint/" className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">
              Imprint
            </a>
          </div>

          <p className="text-neutral-400 dark:text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} Lukas Mendesevic
          </p>
        </div>
      </footer>
    </div>
  );
}
