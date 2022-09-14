import Image from "next/image";
import Link from "next/link";
import { v4 as uuid } from 'uuid';
import arrow from 'public/images/shared/desktop/icon-arrow-right.svg';
import headphones from 'public/images/shared/desktop/image-headphones.png';
import speakers from 'public/images/shared/desktop/image-speakers.png';
import earphones from 'public/images/shared/desktop/image-earphones.png';


export default function MobNavList() {
    const cards = [{ src: headphones, alt: 'headphones' }, { src: speakers, alt: 'speakers' }, { src: earphones, alt: 'earphones' }];
    return (
        <ul className='MobNavList'>
            {cards.map(card => (
                <li key={uuid()} className='MobNavList__card'>
                    <div className='MobNavList__img'><Image src={card.src} alt={card.alt} /></div>
                    <h3>{card.alt.toUpperCase()}</h3>
                    <Link href={`/${card.alt}`}><a>SHOP <Image src={arrow} alt='arrow' /></a></Link>
                </li>
            ))}
        </ul>
    )
}