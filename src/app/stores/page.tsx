'use client'

import { BackgroundImage } from '@/components/backgroungImage/backgroundImage'
import { Vendedor } from './components/vendedor'
import { useRouter } from 'next/navigation'

const vendedores = [
    {
        nome: 'Acessórios',
        imgSrc: '/vendedor/Mirela.jpg',
        link: 'stores/acessorios'
    },
    {
        nome: 'Itens Mágicos',
        imgSrc: '/vendedor/Alyna.jpg',
        link: 'stores/itens-magicos'
    },
    {
        nome: 'Armaduras',
        imgSrc: '/vendedor/Gundrik.jpg',
        link: 'stores/armaduras'
    },
    {
        nome: 'Roupas',
        imgSrc: '/vendedor/Velmira.jpg',
        link: 'stores/roupas'
    },
    {
        nome: 'Armas',
        imgSrc: '/vendedor/Voldrik.jpg',
        link: 'stores/armas'
    }
]

export default function Home() {

    const router = useRouter()

    return (
        <BackgroundImage linkImage='/15283698d3ae8d14ea26b24034cafd97.jpg' mobileImage='./valthorne.jpg'>
            <div className='absolute z-0 top-[10%] left-[10%] w-[80%] h-[80%] bg-stone-800 rounded-3xl opacity-70'></div>
            <button className='bg-red-400 p-2 rounded-lg absolute top-[20px] left-[20px] hover:scale-105' onClick={() => router.push('/')}>
                voltar ao reino
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
