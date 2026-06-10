import { UnderConstruction } from "@/components/UnderConstruction/UnderConstruction";
import { NavTabs } from "../types";
import { NewsItems } from "./Ledger/NewsItems";
import { Icon } from "@/components/Icon/Icon";
import {
  arrow,
  person,
  market,
  peopleGold,
  city,
  district,
  chart,
  bigHammer,
  flowBackground,
} from "@/assets/svg";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface TheLedgerProps {
  t: (word: string) => string;
  setTabActive: (tabActive: NavTabs) => void;
}

function DiagramStep({
  title,
  subtitle,
  src,
  last,
}: {
  title: string;
  subtitle: string;
  src: string;
  last?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 col-span-1">
      <div
        className={cn(
          "flex items-center justify-center w-16 h-16",
          last ? "bg-primary" : "border-2 border-primary bg-base-350",
        )}
      >
        <Image src={src} alt={title} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="uppercase text-xs font-bold">{title}</p>
        <p className="italic text-[10px]">{subtitle}</p>
      </div>
    </div>
  );
}

function DiagramConnector({ empty = false }: { empty?: boolean }) {
  return (
    <div className="flex items-center justify-center w-16 h-16 col-span-1">
      {!empty && <Icon src={arrow} alt="arrow" />}
    </div>
  );
}

export function TheLedger({ t, setTabActive }: TheLedgerProps) {
  const underConstructionNamespace = "pages.landing.economy.underConstruction";
  return (
    <div>
      <section className="group relative overflow-hidden whitespace-nowrap py-2 border-y border-primary/20 text-xs">
        <div className="flex w-max animate-slide-left-infinite group-hover:[animation-play-state:paused]">
          <NewsItems t={t} />
          <NewsItems t={t} />
        </div>
      </section>
      <section
        id="economy-hero"
        className="relative flex flex-col p-24 gap-10 items-center"
      >
        <div className="absolute -z-10 left-1/2 top-[20%] -translate-x-1/2 w-48 h-48 rounded-full bg-radial from-primary from-0% via-primary/0 via-50% to-primary/0 to-100% blur-3xl" />

        <div className="flex flex-col gap-8 items-center w-[780px] text-center">
          <h1 className="text-7xl text-[#EAE1DD] font-bold">
            {t("hero.title")}
          </h1>
          <p className="text-2xl text-text-muted italic">
            {t("hero.subtitle")}
          </p>
        </div>
        <button className="bg-red-400 rounded-xl py-3 px-8 w-fit text-secondary font-bold hover:bg-red-700/50 hover:text-text-muted active:scale-95 transition-all">
          {t("hero.audit")}
        </button>
      </section>
      <section
        id="flow"
        className="flex flex-col py-16 px-8 items-center bg-base-100 gap-16"
      >
        <div className="flex flex-col gap-4 items-center w-[780px] text-center">
          <h2 className="text-4xl text-primary">{t("flow.title")}</h2>
          <p className="text-text-muted italic">{t("flow.subtitle")}</p>
        </div>
        <div className="grid grid-cols-7 bg-base-200 border-2 border-primary/10 rounded p-12 gap-12 relative">
          <Image
            src={flowBackground}
            alt="background"
            className="absolute top-8 right-8 opacity-5"
          />
          <div className="col-span-7 grid grid-cols-7 grid-rows-2 gap-4 p-6 z-10">
            <DiagramStep
              src={person}
              title={t("flow.diagram.character.title")}
              subtitle={t("flow.diagram.character.subtitle")}
            />
            <DiagramConnector />
            <DiagramStep
              src={market}
              title={t("flow.diagram.merchant.title")}
              subtitle={t("flow.diagram.merchant.subtitle")}
            />
            <DiagramConnector />
            <DiagramStep
              src={district}
              title={t("flow.diagram.district.title")}
              subtitle={t("flow.diagram.district.subtitle")}
            />
            <DiagramConnector />
            <DiagramStep
              src={peopleGold}
              title={t("flow.diagram.guild.title")}
              subtitle={t("flow.diagram.guild.subtitle")}
            />
            <DiagramConnector />
            <DiagramStep
              src={city}
              title={t("flow.diagram.city.title")}
              subtitle={t("flow.diagram.city.subtitle")}
            />
            <DiagramConnector />
            <DiagramStep
              src={chart}
              title={t("flow.diagram.economy.title")}
              subtitle={t("flow.diagram.economy.subtitle")}
            />
            <DiagramConnector />
            <DiagramStep
              src={bigHammer}
              title={t("flow.diagram.influence.title")}
              subtitle={t("flow.diagram.influence.subtitle")}
              last
            />
            <DiagramConnector empty />
          </div>
          <p className="border-l-4 border-primary bg-base-300 w-full text-text-muted text-sm col-span-7 p-6 italic">
            &quot;{t("flow.description")}&quot;
          </p>
        </div>
      </section>
      <UnderConstruction
        namespace={underConstructionNamespace}
        onReturn={() => setTabActive("realm")}
      />
    </div>
  );
}
