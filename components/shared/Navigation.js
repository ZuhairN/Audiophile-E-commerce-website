import Image from "next/image";
import Link from "next/link";
import { v4 as uuid } from 'uuid';
import images from '../../public/images/shared/images';


export default function Navigation() {
    const { Arrow, Earphones, Headphones, Speakers } = images;
    const cards = [Headphones, Speakers, Earphones];
    return (
        <ul className='Navigation'>
            {cards.map(card => (
                <li key={uuid()} className='Navigation__card'>
                    <div className='Navigation__img'><Image src={card.src} alt={card.alt} /></div>
                    <h3>{card.alt.toUpperCase()}</h3>
                    <Link href={card.alt}><a>SHOP <Image src={Arrow.src} alt={Arrow.alt} /></a></Link>
                </li>
            ))}
        </ul>
    )
}