'use client'

import { BackgroundImage } from "@/components/backgroungImage/backgroundImage";
import { getSaudacao } from "@/utils/utils";
import Image from 'next/image'
import { useSearchParams } from "next/navigation";
import { ModalItens } from "../components/ModalItens";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function FerreiroLoja() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const searchParams = useSearchParams();
    const vendedor = searchParams.get("vendedor");
    const vendedorNome: string = vendedor?.split('.')[0].substring(1) || ''
    const saudacao = getSaudacao()

    const items = [
        {
            nome: "Espada Longa",
            descricao: "Uma lâmina afiada e balanceada, ideal para guerreiros experientes.",
            valor: "50 PO",
            imagem: "/items/armas/Longsword.jpg"
        },
        {
            nome: "Machado de Batalha",
            descricao: "Um machado robusto capaz de partir armaduras com golpes certeiros.",
            valor: "45 PO",
            imagem: "/items/armas/battle_axe.jpeg"
        },
        {
            nome: "Arco Longo",
            descricao: "Um arco feito de madeira nobre, usado por arqueiros habilidosos.",
            valor: "75 PO",
            imagem: "/items/armas/longbow.jpeg"
        },
        {
            nome: "Adaga Envenenada",
            descricao: "Uma lâmina pequena, mas letal, recoberta com veneno mortal.",
            valor: "30 PO",
            imagem: "/items/armas/dagger_venom.jpeg"
        },
        {
            nome: "Martelo de Guerra",
            descricao: "Uma arma pesada, capaz de esmagar ossos e destruir escudos.",
            valor: "60 PO",
            imagem: "/items/armas/warhammers.jpeg"
        },
        {
            nome: "Lança de Caça",
            descricao: "Uma lança equilibrada, excelente para combates à distância e corpo a corpo.",
            valor: "40 PO",
            imagem: "/items/armas/spearhunt.jpeg"
        },
        {
            nome: "Espada Curta",
            descricao: "Uma arma leve e rápida, perfeita para combates ágeis.",
            valor: "35 PO",
            imagem: "/items/armas/shortsword.jpeg"
        },
        {
            nome: "Cajado Arcano",
            descricao: "Um cajado infundido com magia, usado por feiticeiros e magos.",
            valor: "90 PO",
            imagem: "/items/armas/arcane_staff.jpeg"
        },
        {
            nome: "Besta Leve",
            descricao: "Uma besta pequena e fácil de manejar, ideal para ataques furtivos.",
            valor: "50 PO",
            imagem: "/items/armas/light_crossbow.png"
        },
        {
            nome: "Chicote de Aço",
            descricao: "Uma arma exótica capaz de ferir e desarmar oponentes.",
            valor: "25 PO",
            imagem: "/items/armas/steel_whip.jpeg"
        },
        {
            nome: "Espada Bastarda",
            descricao: "Uma espada versátil, podendo ser empunhada com uma ou duas mãos.",
            valor: "70 PO",
            imagem: "/items/armas/bastard_sword.jpeg"
        },
        {
            nome: "Foice Sombria",
            descricao: "Uma foice com lâmina escura, usada por ceifadores e cultistas.",
            valor: "80 PO",
            imagem: "/items/armas/dark_scythe.jpg"
        }
    ];

    const router = useRouter()

    return (
        <BackgroundImage
            linkImage="/blacksmith-shop.jpg"
            mobileImage="/mobile-blacksmith-shop.jpeg"
            className="flex items-center justify-center gap-4">
            <button className='bg-red-400 p-2 rounded-lg absolute top-[20px] left-[20px] hover:scale-105' onClick={() => router.push('/stores')}>
                voltar ao centro comercial
            </button>
            <section className="bg-cyan-800 p-4 rounded-lg">
                <Image src={String(vendedor)} alt={vendedorNome} width={200} height={200} className='object-cover object-top rounded' />
            </section>
            <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="mt-2">{vendedorNome}</h3>
                    <p className="text-wrap text-lg bg-amber-50 rounded text-cyan-800 p-2">
                        {saudacao.length > 0 ? `${saudacao}, aventureiro. Com o que posso ajudar?` : 'O que está fazendo aqui?! Me deixe dormir!'}
                    </p>
                </div>
                <div className="flex justify-between gap-4">
                    <button className='bg-cyan-800 p-2 rounded-lg hover:scale-105 w-full' onClick={() => setIsOpen(true)}>Ver itens</button>
                    <button className='bg-red-400 p-2 rounded-lg hover:scale-105 w-full'>Barganhar</button>
                </div>
            </section>
            {isOpen && <ModalItens setIsOpen={setIsOpen} vendedor={vendedor || ''} items={items} />}
        </BackgroundImage>
    )
}