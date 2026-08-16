import type { ReactNode } from 'react';

export default function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-line/60 ${className}`}>
      <div className="mx-auto w-full max-w-shell px-5 py-16 sm:px-8 sm:py-24">{children}</div>
    </section>
  );
}

export function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-10 text-[clamp(1.75rem,4vw,2.375rem)] leading-tight font-semibold tracking-[-0.02em]">
      {children}
    </h2>
  );
}
