import { BackgroundImage } from "@/components/BackgroungImage/backgroundImage";
import {
  paper,
  cube,
  bgImage,
  eye,
  hammer,
  compass,
  castle,
  people,
  blackHammer,
  tools,
  anchor,
  scale,
} from "@/assets/svg";
import ledgerBook from "@/assets/img/ledger.jpg";
import province from "@/assets/img/province.jpg";
import quill from "@/assets/img/quill.png";
import Image from "next/image";
import { SealButton } from "@/components/Button/sealButton";
import { GridCard } from "@/components/Card/GridCard";
import { Icon } from "@/components/Icon/Icon";
import { AudioButton } from "@/components/Button/audioButton";
import { DistrictCard } from "./DistrictCard";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface TheRealmProps {
  t: (word: string) => string;
}

export function TheRealm({ t }: TheRealmProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-20 relative" id="content">
      <AudioButton className="fixed top-32 left-4 z-50 border border-primary/10" />
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
            <p className="uppercase text-amber-500 h-7 px-4 flex justify-center items-center text-xs border border-primary/30 bg-primary/30 rounded-sm">
              {t("hero.badge")}
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${bgImage.src})` }}
            className="bg-center bg-no-repeat bg-contain h-80 w-full max-w-[800px] flex flex-col gap-2 items-center justify-center text-secondary relative"
          >
            <h1 className="text-5xl md:text-[86px] font-bold w-full max-w-[500px] text-center leading-none">
              {t("hero.title")}
            </h1>
            <h3 className="text-xl italic text-secondary/70 text-center w-[500px]">
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
            <p className="text-lg">{t("features.livingEconomy.description")}</p>
          </div>
        </GridCard>
        <GridCard
          className="flex flex-col gap-2 p-8 justify-end"
          backgroundColor="base-350"
          opacity={40}
        >
          <Icon src={compass} className="w-12 h-12 justify-start" />
          <h3 className="text-2xl">{t("features.characterSheets.title")}</h3>
          <p className="text-sm text-text-muted">
            {t("features.characterSheets.description")}
          </p>
        </GridCard>
        <GridCard
          className="flex flex-col gap-2 p-8 justify-end"
          backgroundColor="base-350"
        >
          <Icon src={hammer} className="w-12 h-12 justify-start" />
          <h3 className="text-2xl">{t("features.merchantCities.title")}</h3>
          <p className="text-sm text-text-muted">
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
          <p className="text-sm text-text-muted">
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
          <p className="text-sm text-text-muted">
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
          <p className="text-sm text-text-muted">
            {t("features.narrativeTools.description")}
          </p>
        </GridCard>
      </section>
      <section
        id="province"
        className="flex flex-col items-center gap-16 relative"
      >
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-6xl text-primary">
            {t("provinceDistricts.title")}
          </h2>
          <p className="italic text-white/70 text-center text-xl">
            {t("provinceDistricts.description")}
          </p>
        </div>
        <div className="relative">
          <div className="relative h-[520px] w-[1200px] overflow-hidden">
            <Image
              src={province}
              alt="Province"
              unoptimized
              className="object-cover grayscale blur-xs opacity-40"
            />
          </div>
          <div className="absolute top-0 px-20 py-8 w-full h-full">
            <div className="relative backdrop-blur-xs p-8 h-[456px] flex flex-col justify-between items-center">
              <div className="absolute z-10 top-0 right-0 left-0 p-4 h-full flex flex-col items-center justify-between">
                <div className="flex justify-between w-full">
                  <Icon
                    src={blackHammer}
                    shape="circle"
                    withBackground
                    size="sm"
                    backgroundColor="light-red"
                    opacity={100}
                    className="shadow-[0_0_15px_10px_rgba(247,126,130,0.5)]"
                  />
                  <Icon
                    src={tools}
                    shape="circle"
                    withBackground
                    size="sm"
                    backgroundColor="primary"
                    opacity={100}
                    className="shadow-[0_0_15px_10px_rgba(233,193,118,0.5)]"
                  />
                </div>
                <div className="relative flex flex-col items-center gap-1">
                  <span className="bg-red-300 py-1 px-2 font-bold text-base-100 rounded-full text-xs uppercase text-center shadow-[0_0_15px_10px_rgba(247,126,130,0.5)]">
                    {t("provinceDistricts.activity")}
                  </span>
                  <Icon
                    src={scale}
                    withBackground
                    size="lg"
                    className="p-5 shadow-[0_0_15px_10px_rgba(233,193,118,0.5)]"
                    backgroundColor="primary"
                    opacity={100}
                  />
                </div>
                <Icon
                  src={anchor}
                  shape="circle"
                  withBackground
                  size="sm"
                  backgroundColor="primary"
                  opacity={100}
                  className="shadow-[0_0_15px_10px_rgba(233,193,118,0.5)]"
                />
                <div className="absolute right-16 bottom-16 font-semibold px-2 py-3 text-red-200 text-sm shadow-[0_0_15px_10px_rgba(247,126,130,0.5)] rounded-full bg-red-600/70">
                  {t("provinceDistricts.districts.underMarket.logo")}
                </div>
              </div>
              <div className="w-full flex">
                <div className="h-0.5 w-2/4 rotate-[22deg] translate-y-24 -translate-x-2 bg-red-300" />
                <div className="w-2/4 rotate-[338deg] translate-y-24 translate-x-2 border-2 border-dashed border-primary" />
              </div>
              <div className="h-0.5 w-1/5 rotate-[90deg] -translate-y-24 bg-primary" />
              <div className="absolute right-16 bottom-16 w-2/5 rotate-[16deg] -translate-y-20 -translate-x-10 border-2 border-dashed border-red-800" />
            </div>
            <div className="absolute top-0 left-0 flex flex-col w-full h-full">
              <div className="absolute z-10 top-0 right-1/6 bg-base-350 border border-primary/50 p-4">
                <div className="flex gap-2 items-center">
                  <h3 className="text-primary text-lg uppercase">
                    {t("provinceDistricts.status.title")}
                  </h3>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-primary text-2xl font-bold px-2 w-8 py-0 cursor-pointer hover:bg-black/40 rounded"
                  >
                    {isOpen ? "-" : "+"}
                  </button>
                </div>
                <ul
                  className={cn(
                    "border-t-1 border-primary/30 flex flex-col gap-2 pt-2 px-1 mt-2 text-xs text-text-muted",
                    isOpen ? "block" : "hidden",
                  )}
                >
                  <li className="flex gap-2 items-center justify-between leading-none text-text-muted p-1">
                    {t("provinceDistricts.status.politicalInfluence")}
                    <span className="text-red-200 text-xs">+12</span>
                  </li>
                  <li className="flex gap-2 items-center justify-between leading-none text-text-muted p-1">
                    {t("provinceDistricts.status.tradeVolume")}
                    <span className="text-primary text-xs">+28</span>
                  </li>
                  <li className="flex gap-2 items-center justify-between leading-none text-text-muted p-1">
                    {t("provinceDistricts.status.artisanProduction")}
                    <span className="text-primary/70 text-xs">+16</span>
                  </li>
                  <li className="flex gap-2 items-center justify-between leading-none text-sm font-bold text-text-muted p-1 pt-2 border-t border-text-muted/20">
                    {t("provinceDistricts.status.prosperity")}
                    <span className="text-primary font-medium">+18%</span>
                  </li>
                  <li className="flex items-center justify-center leading-none text-text-muted/60 p-1 mt-2">
                    {t("provinceDistricts.status.updated")}
                  </li>
                </ul>
              </div>
              <DistrictCard
                responsible={t(
                  "provinceDistricts.districts.commercial.responsible",
                )}
                title={t("provinceDistricts.districts.commercial.title")}
                system={t("provinceDistricts.districts.commercial.system")}
                className="absolute top-16 left-2/5 bg-base-350 border border-primary/50 p-3 w-48 text-primary"
              />
              <DistrictCard
                responsible={t(
                  "provinceDistricts.districts.artisan.responsible",
                )}
                title={t("provinceDistricts.districts.artisan.title")}
                system={t("provinceDistricts.districts.artisan.system")}
                className="absolute top-24 right-12 bg-base-350 border border-primary/50 p-3 w-44 text-primary"
              />
              <DistrictCard
                responsible={t(
                  "provinceDistricts.districts.political.responsible",
                )}
                title={t("provinceDistricts.districts.political.title")}
                system={t("provinceDistricts.districts.political.system")}
                className="absolute top-24 left-12 bg-base-350 border border-primary/50 p-3 w-44 text-primary"
              />
              <DistrictCard
                responsible={t("provinceDistricts.districts.port.responsible")}
                title={t("provinceDistricts.districts.port.title")}
                system={t("provinceDistricts.districts.port.system")}
                className="absolute bottom-12 left-1/3 bg-base-350 border border-primary/50 p-3 w-44 text-primary"
              />

              <DistrictCard
                responsible={t(
                  "provinceDistricts.districts.underMarket.responsible",
                )}
                title={t("provinceDistricts.districts.underMarket.title")}
                system={t("provinceDistricts.districts.underMarket.system")}
                className="absolute bottom-12 right-1/5 bg-base-200 border border-red-300/50 p-3 w-44 text-red-400"
              />
              <div className="absolute bottom-4 left-4 bg-base-350 border border-primary/50 p-4 uppercase">
                <h3 className="text-primary text-xs">
                  {t("provinceDistricts.network.title")}
                </h3>
                <ul className="border-t-1 border-primary/30 flex flex-col gap-2 pt-2 px-1 text-xs text-text-muted">
                  <li className="flex gap-2 items-center leading-none">
                    <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {t("provinceDistricts.network.routes")}
                  </li>
                  <li className="flex gap-2 items-center leading-none">
                    <span className="bg-red-300 rounded-full h-2 w-2" />
                    {t("provinceDistricts.network.influence")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="demo" className="bg-base-100 p-16">
        <div className="flex flex-col gap-12 items-center bg-base-200 p-16 w-fit mx-auto relative border border-primary/40 shadow-[0_0_40px_20px_rgba(233,193,118,0.1)]">
          <span className="absolute uppercase px-2 py-1 text-sm text-primary bg-base-100 top-0 -translate-y-3 border border-primary/40">
            {t("demo.badge")}
          </span>
          <p className="text-2xl text-text-muted w-[800px] text-center">
            {t("demo.phrase")}
          </p>
          <button className="py-2 px-4 bg-primary hover:bg-primary-hover active:scale-95 transition-all duration-100 text-base-100 text-lg uppercase font-bold  ">
            {t("demo.button")}
          </button>
        </div>
      </section>
      <section id="quote" className="flex flex-col items-center gap-4 mb-20">
        <Image src={quill} alt="quill" unoptimized className="w-12" />
        <p className="italic text-white/60 text-center text-2xl w-[800px] pt-4">
          &quot;{t("quote.phrase")}&quot;
        </p>
        <span className="uppercase text-primary flex gap-1">
          &mdash; {t("quote.signature")}
        </span>
      </section>
    </div>
  );
}
