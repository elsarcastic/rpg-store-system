'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface vendedorProps {
    imgSrc: string;
    nome: string;
    link: string;
}

export function Vendedor({ imgSrc, nome, link }: vendedorProps) {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push(`${link}?vendedor=${imgSrc.substring(9)}`)}
            className='flex flex-1 flex-col items-center gap-4 cursor-pointer h-[380px] bg-yellow-950 p-4 rounded-lg justify-between hover:scale-110 hover:transition-all'>
            <Image src={imgSrc} alt={nome} width={200} height={200} className='w-[220px] h-[300px] object-cover object-top rounded' />
            <h3 className='text-2xl'>{nome}</h3>
        </div>

    );
}