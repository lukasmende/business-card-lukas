import type { ReactNode } from 'react';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { useTheme } from './useTheme';

interface LegalLayoutProps {
  title: string;
  note: string;
  children: ReactNode;
}

export default function LegalLayout({ title, note, children }: LegalLayoutProps) {
  const [theme, setTheme] = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased transition-colors duration-300">
      <button
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle dark mode"
        className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 p-3 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:text-[#0071e3] dark:hover:text-[#2997ff] shadow-sm transition-colors duration-200"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20 md:py-28">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-200 mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-3">
          {title}
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-14">{note}</p>

        <div>{children}</div>
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">{title}</h2>
      <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base space-y-3">
        {children}
      </div>
    </section>
  );
}
