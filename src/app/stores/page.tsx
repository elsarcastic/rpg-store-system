'use client'

import { BackgroundImage } from '@/components/backgroungImage/backgroundImage'
import { Vendedor } from './components/vendedor'
import { useRouter } from 'next/navigation'

const vendedores = [
    {
        nome: 'Artesão',
        imgSrc: '/artisan.jpg',
        link: 'stores/artesao'
    },
    {
        nome: 'Boticário',
        imgSrc: '/alchemist.jpg',
        link: 'stores/alquimista'
    },
    {
        nome: 'Mercador',
        imgSrc: '/mercador.jpg',
        link: 'stores/mercador'
    },
    {
        nome: 'Tecelã',
        imgSrc: '/weaver.jpg',
        link: 'stores/tecela'
    },
    {
        nome: 'Ferreiro',
        imgSrc: '/ferreiro.jpg',
        link: 'stores/ferreiro'
    }
]

export default function Home() {

    const router = useRouter()

    return (
        <BackgroundImage linkImage='/15283698d3ae8d14ea26b24034cafd97.jpg'>
            <div className='absolute z-0 top-[10%] left-[10%] w-[80%] h-[80%] bg-stone-800 rounded-3xl opacity-70'></div>
            <button className='bg-red-400 p-2 rounded absolute top-[20px] left-[20px] hover:scale-105' onClick={() => router.push('/')}>
                voltar
            </button>
            <div className=' relative z-10 top-[10%] left-[10%] w-[80%] h-[80%] flex flex-col items-center gap-14 p-14'>
                <h1 className='text-4xl'>Lojas Disponíveis</h1>
                <section className='flex gap-6'>
                    {vendedores.map((vendedor, index) => {
                        return <Vendedor key={index} imgSrc={vendedor.imgSrc} link={vendedor.link} nome={vendedor.nome} />
                    })}
                </section>
            </div>
        </BackgroundImage>
    );
}
