type SealButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function SealButton({
  children,
  className = "",
  ...rest
}: SealButtonProps) {
  return (
    <button className="bg-red-400 p-1 rounded" {...rest}>
      <p
        className={`border border-secondary border-dashed rounded text-secondary font-bold p-4 ${className}`}
      >
        {children}
      </p>
    </button>
  );
}
