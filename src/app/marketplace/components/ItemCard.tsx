import { ItemCardProps } from "../interface";
import Image from 'next/image'

export function ItemCard({ item, isAtual }: ItemCardProps) {
    return (
        <div className={`${isAtual ? 'bg-orange-300' : 'bg-cyan-500'} w-44 gap-2 rounded-lg shadow hover:scale-105 hover:shadow-2xl flex flex-col items-center p-2 cursor-pointer`}>
            < h2 className="font-bold text-lg h-12 text-center flex items-center" > {item.nome}</h2 >
            <Image className="w-32 h-32 rounded-2xl" src={item.imagem} alt={item.nome} width={160} height={160} />
            <span className="rounded w-[80%] text-center text-lg font-bold">{item.valor}</span>
        </div >
    )
}