'use client'

// import { getImageProps } from 'next/image'
import { useEffect, useState } from 'react';

interface backgroundImageProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    linkImage: string;
}

// function getBackgroundImage(srcSet = '') {
//     const imageSet = srcSet
//         .split(', ')
//         .map((str) => {
//             const [url, dpi] = str.split(' ')
//             return `url("${url}") ${dpi}`
//         })
//         .join(', ')
//     return `image-set(${imageSet})`
// }


export function BackgroundImage({ children, linkImage, mobileImage, ...rest }: backgroundImageProps & { mobileImage: string }) {
    const [currentImage, setCurrentImage] = useState(linkImage);

    useEffect(() => {
        function updateImage() {
            if (window.innerWidth < 1020) {
                setCurrentImage(mobileImage);
            } else {
                setCurrentImage(linkImage);
            }
        }

        updateImage(); // Verifica ao carregar a página
        window.addEventListener('resize', updateImage);

        return () => window.removeEventListener('resize', updateImage);
    }, [linkImage, mobileImage]);

    return (
        <main style={{ height: '100vh', width: '100vw', backgroundImage: `url(${currentImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} {...rest}>
            {children}
        </main>
    );
}
