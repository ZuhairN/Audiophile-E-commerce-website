import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import arrow from 'public/images/shared/desktop/icon-arrow-right.svg';
import headphones from 'public/images/shared/desktop/image-headphones.png';
import speakers from 'public/images/shared/desktop/image-speakers.png';
import earphones from 'public/images/shared/desktop/image-earphones.png';

export default function MobNavList() {
    const cards = [
        { src: headphones, alt: 'headphones', h: headphones.height, w: headphones.width },
        { src: speakers, alt: 'speakers', h: speakers.height, w: speakers.width },
        { src: earphones, alt: 'earphones', h: earphones.height, w: earphones.width },
    ];
    return (
        <ul className='MobNavList'>
            {cards.map(card => (
                <li key={uuid()} className='MobNavList__card'>
                    <div className='MobNavList__img'>
                        <Image src={card.src} alt={card.alt} layout='responsive' height={card.h} width={card.w} />
                    </div>
                    <span>{card.alt.toUpperCase()}</span>
                    <Link href={`/${card.alt}`} legacyBehavior>
                        <a aria-label={`Shop from the ${card.alt} department`}>
                            SHOP <Image src={arrow} alt='arrow' />
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
