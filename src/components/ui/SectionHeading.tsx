interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  titleHighlight?: string;
  centered?: boolean;
  showLine?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  titleHighlight,
  centered = false,
  showLine = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold text-dark md:text-4xl">
        {title}
        {titleHighlight && (
          <>
            {" "}
            <strong>{titleHighlight}</strong>
          </>
        )}
      </h2>
      {showLine && (
        <div className={`decorative-line${centered ? " mx-auto" : ""}`} />
      )}
    </div>
  );
}
