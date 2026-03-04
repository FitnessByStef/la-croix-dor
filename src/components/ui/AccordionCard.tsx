import React from "react";

type AccordionCardProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AccordionCard({
  id,
  title,
  subtitle,
  children,
}: AccordionCardProps) {
  return (
    <details
      id={id}
        className="group card-gold-hover p-5"
    >
      <summary className="list-none cursor-pointer flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">{title}</h2>
            <span className="text-xs px-2 py-1 rounded-full border border-greyLight/30 text-greyLight/70">
              Détails
            </span>
          </div>

          {subtitle && (
            <p className="text-sm text-greyLight/80 mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <div className="shrink-0 mt-1">
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-greyLight/20 text-greyLight/80 group-open:text-gold group-open:border-gold transition">
            <span className="group-open:hidden">+</span>
            <span className="hidden group-open:inline">−</span>
          </span>
        </div>
      </summary>

      <div className="pt-4 text-sm text-greyLight space-y-3">
        {children}
      </div>
    </details>
  );
}
