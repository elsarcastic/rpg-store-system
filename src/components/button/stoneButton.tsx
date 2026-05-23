type StoneButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function StoneButton({
  children,
  className = "",
  ...rest
}: StoneButtonProps) {
  return (
    <button
      className={`
        relative
        border
        border-primary/40
        px-8
        py-4
        text-primary/80
        uppercase
        tracking-wide
        font-bold
        flex
        items-center
        justify-center
        text-xs
        gap-4
        transition-all
        duration-300
        hover:border-primary-hover
        hover:text-primary-hover
        group
        ${className}
      `}
      {...rest}
    >
      <span className="absolute -top-1 -left-1 w-2 h-2 bg-primary/80 group-hover:bg-primary" />
      <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary/80 group-hover:bg-primary" />

      {children}
    </button>
  );
}
