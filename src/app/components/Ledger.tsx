import { UnderConstruction } from "@/components/UnderConstruction/UnderConstruction";
import { NavTabs } from "../types";

interface TheLedgerProps {
  t: (word: string) => string;
  setTabActive: (tabActive: NavTabs) => void;
}

export function TheLedger({ t, setTabActive }: TheLedgerProps) {
  const underConstructionNamespace = "pages.landing.economy.underConstruction";
  return (
    <div className="p-12">
      <UnderConstruction
        namespace={underConstructionNamespace}
        onReturn={() => setTabActive("realm")}
      />
    </div>
  );
}
