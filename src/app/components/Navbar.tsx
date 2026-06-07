import { StoneButton } from "@/components/Button/stoneButton";
import { LanguageSelector } from "@/components/LanguageSelector/LanguageSelector";
import { useLanguage } from "@/contexts/languageContext";
import { cn } from "@/lib/utils/cn";
import { NavTabs } from "../types";

interface NavbarProps {
  t: (key: string) => string;
  tabActive: NavTabs;
  setTabActive: (tabActive: NavTabs) => void;
}

export function Navbar({ t, tabActive, setTabActive }: NavbarProps) {
  const { setLanguage, language } = useLanguage();

  const sections: { id: NavTabs; label: string }[] = [
    { id: "realm", label: t("nav.sections.realm") },
    { id: "chronicles", label: t("nav.sections.chronicles") },
    { id: "ledger", label: t("nav.sections.ledger") },
  ];
  return (
    <header className="bg-base-100 py-6 px-8 flex items-center justify-between text-primary">
      <h2 className="font-extrabold text-xl">{t("nav.title")}</h2>
      <ul className="flex gap-8 uppercase text-sm">
        {sections.map((sect) => {
          return (
            <li
              key={sect.id}
              id={sect.id}
              onClick={() => setTabActive(sect.id)}
              className={cn(
                "cursor-pointer border-b-2 border-transparent text-primary transition-all hover:text-primary/60",
                tabActive === sect.id && "border-primary text-primary-hover",
              )}
            >
              {sect.label}
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4 items-center">
        <LanguageSelector value={language} onChange={setLanguage} />
        <StoneButton>{t("nav.beginJourney")}</StoneButton>
      </div>
    </header>
  );
}
