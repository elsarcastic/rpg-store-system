interface DistrictCardProps {
  title: string;
  responsible: string;
  system: string;
  className: string;
}

export function DistrictCard({
  title,
  responsible,
  system,
  className,
}: DistrictCardProps) {
  return (
    <div className={className}>
      <h3 className="text-sm uppercase">{title}</h3>
      <ul className="flex flex-col gap-1 pt-2 text-xs">
        <li className="flex gap-2 items-center leading-none font-bold text-text-muted">
          {responsible}
        </li>
        <li className="flex gap-2 items-center leading- text-text-muted/70">
          {system}
        </li>
      </ul>
    </div>
  );
}
