"use client";

import { BackgroundImage } from "@/components/backgroungImage/backgroundImage";
import { getSaudacao } from "@/utils/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { items } from "../data";
import { ModalItens } from "../../components/ModalItens";

type Props = {
  vendedor: string;
};

export default function ArmasPageClient({ vendedor }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  
  const vendedorNome = vendedor?.split(".")[0].substring(1) || "";
  const saudacao = getSaudacao();

  const router = useRouter();

  return (
    <BackgroundImage
      linkImage="/blacksmith-shop.jpg"
      mobileImage="/mobile-blacksmith-shop.jpeg"
      className="flex items-center justify-center gap-4"
    >
      <button
        className="bg-red-400 p-2 rounded-lg absolute top-[20px] left-[20px] hover:scale-105"
        onClick={() => router.push("/stores")}
      >
        voltar ao centro comercial
      </button>

      <section className="bg-cyan-800 p-4 rounded-lg">
        <Image
          src={String(vendedor)}
          alt={vendedorNome}
          width={200}
          height={200}
          className="object-cover object-top rounded"
        />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="mt-2">{vendedorNome}</h3>
          <p className="text-wrap text-lg bg-amber-50 rounded text-cyan-800 p-2">
            {saudacao.length > 0
              ? `${saudacao}, aventureiro. Com o que posso ajudar?`
              : "O que está fazendo aqui?! Me deixe dormir!"}
          </p>
        </div>

        <div className="flex justify-between gap-4">
          <button
            className="bg-cyan-800 p-2 rounded-lg hover:scale-105 w-full"
            onClick={() => setIsOpen(true)}
          >
            Ver itens
          </button>
          <button className="bg-red-400 p-2 rounded-lg hover:scale-105 w-full">
            Barganhar
          </button>
        </div>
      </section>

      {isOpen && (
        <ModalItens
          setIsOpen={setIsOpen}
          vendedor={vendedor || ""}
          items={items}
        />
      )}
    </BackgroundImage>
  );
}