"use client";

import { BackgroundImage } from "@/components/backgroungImage/backgroundImage";
import { useTranslation } from "@/hooks/useTranslation";
import { FramedButton } from "./stores/armas/components/button/framedButton";

export default function Home() {
  const { t } = useTranslation("pages.landing");

  const bgImage = "/svg/bg-title.svg";

  return (
    <BackgroundImage mobileImage="./valthorne.jpg" linkImage="/bg-2.jpg">
      <div className="flex flex-col gap-16">
        <nav className="border-b-base-300 border-b-2">
          <div className="bg-base-100 py-6 px-8 flex items-center justify-between text-primary">
            <h2 className="font-extrabold text-xl">{t("nav.title")}</h2>
            <ul className="flex gap-8 uppercase text-sm">
              <li>{t("nav.sections.realm")}</li>
              <li>{t("nav.sections.chronicles")}</li>
              <li>{t("nav.sections.ledger")}</li>
              <li>{t("nav.sections.settings")}</li>
            </ul>
            <FramedButton>{t("nav.beginJourney")}</FramedButton>
          </div>
        </nav>
        <section className="flex flex-col gap-8">
          <div className="flex justify-center items-center">
            <p className="uppercase text-amber-500 h-7 px-4 flex justify-center items-center leading-none text-xs border border-primary/30 bg-primary/30 rounded-sm">
              EST. 1244 <span className="mx-4 font-bold">&middot;</span> The
              Tale Begins
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${bgImage})` }}
            className="bg-center bg-no-repeat bg-contain h-80 flex flex-col gap-4 items-center justify-center text-secondary"
          >
            <h1 className="text-[86px] font-bold max-w-2/4 text-center leading-none">
              {t("title")}
            </h1>
            <h3 className="text-2xl italic text-secondary/70">
              {t("subtitle")}
            </h3>
          </div>
        </section>
      </div>
    </BackgroundImage>
  );
}
