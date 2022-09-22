import Link from 'next/link';
import { useRouter } from "next/router";
import { v4 as uuid } from 'uuid';


export default function NavList() {
    const { asPath } = useRouter();
    const links = [{ href: '/', title: 'HOME' }, { href: '/headphones', title: 'HEADPHONES' }, { href: '/speakers', title: 'SPEAKERS' }, { href: '/earphones', title: 'EARPHONES' }];

    return (
        <ul className='NavList'>
            {links.map(link => (
                <li key={uuid()}>
                    <Link href={link.href}>
                        <a className={asPath === link.href ? 'active' : ''}>{link.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
