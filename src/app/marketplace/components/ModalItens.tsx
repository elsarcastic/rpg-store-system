import { IoIosCloseCircle } from "react-icons/io";
import { ItemProps, ModalItensProps } from "../interface";
import { ItemCard } from "./ItemCard";
import { useState } from "react";
import Image from 'next/image'


export function ModalItens({ setIsOpen, vendedor, items }: ModalItensProps) {
    const [itemAtual, setItemAtual] = useState<ItemProps>()
    return (
        <>
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-55"></div>
            <div className="z-20 absolute bg-cyan-700 w-[70vw] h-[70vh] rounded-xl flex">
                <button className="absolute right-4 top-4 bg-transparent" onClick={() => setIsOpen(false)}>
                    <IoIosCloseCircle fontSize={24} />
                </button>
                <section className="flex flex-col gap-4 overflow-hidden">
                    <div className="mx-8 mt-4 flex gap-2 items-center">
                        <div className="bg-cyan-900 p-2 rounded">
                            <Image className="w-24 h-24 rounded" src={'/vendedor'.concat(vendedor)} alt={vendedor} width={160} height={160} />
                        </div>
                        <p className="text-wrap text-lg bg-amber-50 rounded text-cyan-800 p-2">
                            Esses são os itens que tenho disponível para você. Te interessa algum?
                        </p>
                    </div>
                    <ul className="flex flex-wrap gap-4 p-4 m-2 overflow-auto justify-center scrollbar [&::-webkit-scrollbar-thumb]:bg-cyan-600">
                        {items.map((item, index) => {
                            return <li key={index} onClick={() => setItemAtual(item)}>
                                <ItemCard item={item} isAtual={item.descricao == itemAtual?.descricao} />
                            </li>
                        })}
                    </ul>
                </section>
                <section className="flex w-80 shrink-0 mt-12 mb-4 mx-4">
                    {itemAtual &&
                        <div className="bg-cyan-500 gap-2 flex-1 rounded-lg flex flex-col p-2 cursor-pointer justify-between">
                            <div className="flex flex-col items-center gap-2">
                                <h2 className="font-bold text-2xl h-20 text-center flex items-center">{itemAtual?.nome}</h2>
                                <Image className="w-64 h-64 rounded-2xl" src={itemAtual?.imagem} alt={itemAtual?.nome} width={160} height={160} />
                                <p className="p-4 text-lg max-h-32 overflow-auto scrollbar [&::-webkit-scrollbar-thumb]:bg-cyan-600">
                                    {itemAtual?.descricao}</p>
                                <span className="rounded w-[80%] text-center text-xl font-bold">{itemAtual?.valor}</span>
                            </div>
                            <button className="bg-red-400 p-2 m-2 rounded-lg hover:scale-105">Adicionar ao carrinho</button>
                        </div>}
                </section >
            </div >
        </>
    )
}