"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useAmbience } from "@/hooks/useAmbience";
import { FloatingNavbar } from "@/components/FloatingNavbar/FloatingNavbar";
import { Navbar } from "./components/Navbar";
import { JSX, useState } from "react";
import { NavTabs } from "./types";
import { TheRealm } from "./components/Realm";
import { TheLedger } from "./components/Ledger";
import { Footer } from "@/components/Footer/Footer";
import { TheChronicles } from "./components/Chronicles";

export default function Home() {
  const [tabActive, setTabActive] = useState<NavTabs>("realm");
  useAmbience("landing");
  const { t } = useTranslation("pages.landing");
  const { t: tRealm } = useTranslation("pages.landing.realm");
  const { t: tEconomy } = useTranslation("pages.landing.economy");
  const { t: tChronicles } = useTranslation("pages.landing.chronicles");

  const tabs: { id: NavTabs; tab: JSX.Element }[] = [
    { id: "realm", tab: <TheRealm t={tRealm} /> },
    {
      id: "ledger",
      tab: <TheLedger t={tEconomy} setTabActive={setTabActive} />,
    },
    {
      id: "chronicles",
      tab: <TheChronicles t={tChronicles} setTabActive={setTabActive} />,
    },
  ];

  return (
    <div className="flex flex-col relative">
      <FloatingNavbar className="border-b-base-300 border-b-2">
        <Navbar t={t} setTabActive={setTabActive} tabActive={tabActive} />
      </FloatingNavbar>
      {tabs.find((tab) => tab.id === tabActive)?.tab}
      <Footer t={t} />
    </div>
  );
}
