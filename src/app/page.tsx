'use client'

import { BackgroundImage } from '@/components/backgroungImage/backgroundImage'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()
  return (
    <BackgroundImage mobileImage='./valthorne.jpg' linkImage='/15283698d3ae8d14ea26b24034cafd97.jpg'>
      <div className='flex flex-col justify-start items-center p-24 md:p-52 gap-72'>
        <h1 className='text-6xl md:text-8xl drop-shadow-[0_8.9px_7.9px_rgba(0,0,0,0.9)] [-webkit-text-stroke:1px_white] text-center text-red-900'>Reino de Valthorne</h1>
        <button
          className='bg-red-800 px-24 md:px-48 text-nowrap py-2 md:py-4 rounded-2xl border border-white md:text-lg hover:bg-red-900 transition-all hover:scale-110'
          onClick={() => router.push('/stores')}
        >
          Visitar lojas
        </button>
      </div>
    </BackgroundImage>
  );
}
