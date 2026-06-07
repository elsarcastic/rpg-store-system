import { UnderConstruction } from "@/components/UnderConstruction/UnderConstruction";
import { NavTabs } from "../types";

interface TheLedgerProps {
  t: (word: string) => string;
  setTabActive: (tabActive: NavTabs) => void;
}

export function TheChronicles({ t, setTabActive }: TheLedgerProps) {
  const underConstructionNamespace =
    "pages.landing.chronicles.underConstruction";
  return (
    <div className="p-12">
      <UnderConstruction
        namespace={underConstructionNamespace}
        onReturn={() => setTabActive("realm")}
      />
    </div>
  );
}
