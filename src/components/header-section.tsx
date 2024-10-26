interface HeaderSectionProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function HeaderSection({ label, title, subtitle }: HeaderSectionProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {label ? (
        <div className="mb-4 font-semibold text-[#d41367]">{label}</div>
      ) : null}
      <h2 className="text-balance font-heading text-3xl md:text-4xl lg:text-[40px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-balance text-lg text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
