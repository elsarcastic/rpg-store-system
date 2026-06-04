"use client";

import { BackgroundImage } from "@/components/BackgroungImage/backgroundImage";
import { useTranslation } from "@/hooks/useTranslation";
import {
  paper,
  cube,
  bgImage,
  eye,
  hammer,
  compass,
  castle,
  people,
} from "@/assets/svg";
import ledgerBook from "@/assets/img/ledger.jpg";
import quill from "@/assets/img/quill.png";
import Image from "next/image";
import { StoneButton } from "@/components/Button/stoneButton";
import { SealButton } from "@/components/Button/sealButton";
import { GridCard } from "@/components/Card/GridCard";
import { Icon } from "@/components/Icon/Icon";

export default function Home() {
  const { t } = useTranslation("pages.landing");

  return (
    <div className="flex flex-col">
      <nav className="border-b-base-300 border-b-2">
        <div className="bg-base-100 py-6 px-8 flex items-center justify-between text-primary">
          <h2 className="font-extrabold text-xl">{t("nav.title")}</h2>
          <ul className="flex gap-8 uppercase text-sm">
            <li>{t("nav.sections.realm")}</li>
            <li>{t("nav.sections.chronicles")}</li>
            <li>{t("nav.sections.ledger")}</li>
            <li>{t("nav.sections.settings")}</li>
          </ul>
          <StoneButton>{t("nav.beginJourney")}</StoneButton>
        </div>
      </nav>
      <div className="flex flex-col gap-20" id="content">
        <BackgroundImage
          mobileImage="./valthorne.jpg"
          gradient="dark"
          linkImage="/bg-2.jpg"
        >
          <section
            className="flex flex-col gap-8 items-center pb-8 pt-16"
            id="hero"
          >
            <div className="flex justify-center items-center">
              <p className="uppercase text-amber-500 h-7 px-4 flex justify-center items-center leading-none text-xs border border-primary/30 bg-primary/30 rounded-sm">
                EST. 1244 <span className="mx-4 font-bold">&middot;</span> The
                Tale Begins
              </p>
            </div>
            <div
              style={{ backgroundImage: `url(${bgImage.src})` }}
              className="bg-center bg-no-repeat bg-contain h-80 w-full max-w-[800px] flex flex-col gap-4 items-center justify-center text-secondary relative"
            >
              <h1 className="text-5xl md:text-[86px] font-bold w-full max-w-[500px] text-center leading-none">
                {t("hero.title")}
              </h1>
              <h3 className="text-2xl italic text-secondary/70">
                {t("hero.subtitle")}
              </h3>
              <Image
                className="absolute bottom-8 right-6 opacity-20"
                src={paper}
                alt="papiro"
              />
            </div>
            <SealButton className="flex flex-col gap-2 items-center p-8 uppercase">
              <Image src={cube} alt="cubo" />
              <span className="flex flex-col w-fit">
                {t("hero.beginYour")}{" "}
                <span className="text-2xl">{t("hero.journey")}</span>
              </span>
            </SealButton>
            <p className="italic text-white/60 text-center w-[400px] pt-4">
              &quot;{t("hero.phrase")}&quot;
            </p>
          </section>
        </BackgroundImage>
        <section
          id="features"
          className="grid gap-4 grid-cols-3 grid-rows-3 p-8 "
        >
          <GridCard
            cols={2}
            rows={2}
            className="relative overflow-hidden flex flex-col justify-end"
            backgroundColor="transparent"
          >
            <Image
              src={ledgerBook}
              alt="ledger"
              unoptimized
              className="absolute -z-20 right-0 top-0 left-0 bottom-0 pointer-events-none bg-contain"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/0 via-black/60 to-black" />
            <div className="flex flex-col gap-4">
              <h3 className="text-primary text-4xl">
                {t("features.livingEconomy.title")}
              </h3>
              <p className="text-lg">
                {t("features.livingEconomy.description")}
              </p>
            </div>
          </GridCard>
          <GridCard
            className="flex flex-col gap-2 p-8 justify-end"
            backgroundColor="base-350"
            opacity={40}
          >
            <Icon src={compass} className="w-12 h-12 justify-start" />
            <h3 className="text-2xl">{t("features.characterSheets.title")}</h3>
            <p className="text-sm text-[#D1C5B4]">
              {t("features.characterSheets.description")}
            </p>
          </GridCard>
          <GridCard
            className="flex flex-col gap-2 p-8 justify-end"
            backgroundColor="base-350"
          >
            <Icon src={hammer} className="w-12 h-12 justify-start" />
            <h3 className="text-2xl">{t("features.merchantCities.title")}</h3>
            <p className="text-sm text-[#D1C5B4]">
              {t("features.merchantCities.description")}
            </p>
          </GridCard>
          <GridCard
            className="flex flex-col gap-4 p-8"
            backgroundColor="base-200"
          >
            <Icon
              src={castle}
              className="w-12 h-12"
              withBackground
              opacity={10}
              backgroundColor="primary"
            />
            <h3 className="uppercase text-xl">
              {t("features.tradeSystems.title")}
            </h3>
            <p className="text-sm text-[#D1C5B4]">
              {t("features.tradeSystems.description")}
            </p>
          </GridCard>
          <GridCard
            className="flex flex-col gap-4 p-8"
            backgroundColor="base-200"
          >
            <Icon
              src={people}
              className="w-12 h-12"
              withBackground
              backgroundColor="secondary"
            />
            <h3 className="uppercase text-xl">
              {t("features.interactiveWorldbuilding.title")}
            </h3>
            <p className="text-sm text-[#D1C5B4]">
              {t("features.interactiveWorldbuilding.description")}
            </p>
          </GridCard>
          <GridCard
            className="flex flex-col gap-4 p-8"
            backgroundColor="base-200"
          >
            <Icon
              src={eye}
              className="w-12 h-12"
              withBackground
              opacity={10}
              backgroundColor="primary"
            />
            <h3 className="uppercase text-xl">
              {t("features.narrativeTools.title")}
            </h3>
            <p className="text-sm text-[#D1C5B4]">
              {t("features.narrativeTools.description")}
            </p>
          </GridCard>
        </section>
        <section id="quote" className="flex flex-col items-center gap-4">
          <Image src={quill} alt="quill" unoptimized className="w-12" />
          <p className="italic text-white/60 text-center text-2xl w-[800px] pt-4">
            &quot;{t("quote.phrase")}&quot;
          </p>
          <span className="uppercase text-primary flex gap-1">
            &mdash; {t("quote.signature")}
          </span>
        </section>
        <section
          id="footer"
          className="bg-base-100 text-sm py-8 gap-12 flex flex-col items-center"
        >
          <ul className="flex gap-8 text-primary/70">
            <li>{t("footer.documentation")}</li>
            <li>{t("footer.developmentLog")}</li>
            <li>{t("footer.community")}</li>
          </ul>
          <p className="text-primary">{t("footer.copyright")}</p>
        </section>
      </div>
    </div>
  );
}
