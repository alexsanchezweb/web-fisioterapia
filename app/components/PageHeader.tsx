import type { ReactNode } from "react";

interface PageHeaderProps {
  label: string;
  title: ReactNode;
  subtitle: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[var(--color-secondary)] bg-[var(--color-secondary-light)] border border-[var(--color-secondary-border)] rounded-full mb-5 uppercase tracking-widest">
          {label}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
