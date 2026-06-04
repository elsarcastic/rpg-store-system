import { backgrounds, ColorToken, OpacityToken } from "@/constants/theme";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Rows = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridCardProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: Cols;
  rows?: Rows;
  backgroundColor?: ColorToken | "transparent";
  opacity?: OpacityToken;
}

const colSpanMap: Record<Cols, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
};

const rowSpanMap: Record<Rows, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
  5: "row-span-5",
  6: "row-span-6",
  7: "row-span-7",
  8: "row-span-8",
  9: "row-span-9",
  10: "row-span-10",
  11: "row-span-11",
  12: "row-span-12",
};

export function GridCard({
  cols = 1,
  rows = 1,
  backgroundColor = "base-300",
  opacity = 100,
  className = "",
  children,
  ...rest
}: GridCardProps) {
  return (
    <div
      className={`
        p-4 rounded
         ${backgroundColor === "transparent" ? "" : backgrounds[backgroundColor][opacity]}
        ${colSpanMap[cols]}
        ${rowSpanMap[rows]}
        ${className}
      `}
      {...rest}
    >
      {children}
    </div>
  );
}
