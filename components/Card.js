import Image from "next/image";
import Link from "next/link";
import arrow from '../public/images/shared/desktop/icon-arrow-right.svg';
import earphones from '../public/images/shared/desktop/image-earphones.png';
import headphones from '../public/images/shared/desktop/image-headphones.png';
import speakers from '../public/images/shared/desktop/image-speakers.png';

const images = [{ src: headphones, alt: 'headphones' }, { src: speakers, alt: 'speakers' }, { src: earphones, alt: 'earphones' }]
export default function Card({ imgId }) {
    const { src, alt } = images[imgId];
    return (
        <li className='Card'>
            <div className='Card__img'><Image src={src} alt={alt} /></div>
            <h3>{alt.toUpperCase()}</h3>
            <Link href={alt}><a>SHOP <Image src={arrow} alt='arrow' /></a></Link>
        </li>
    )
}
