type SealButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function SealButton({
  children,
  className = "",
  ...rest
}: SealButtonProps) {
  return (
    <button
      className="bg-[#FF815F] hover:bg-[#de5c38] hover:scale-95 transition-all cursor-pointer p-1.5 rounded"
      {...rest}
    >
      <span
        className={`border-2 border-secondary/40 border-dashed rounded-lg text-secondary font-bold p-4 box-border ${className}`}
      >
        {children}
      </span>
    </button>
  );
}
