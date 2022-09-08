import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuid } from 'uuid';

import logo from '../../public/images/shared/desktop/logo.svg';
import openMenu from '../../public/images/shared/tablet/icon-hamburger.svg';
import closeMenu from '../../public/images/shared/tablet/icon-close-menu.svg';
import cart from '../../public/images/shared/desktop/icon-cart.svg';
import Navigation from "./Navigation";


export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
    const { pathname } = useRouter();
    const toggleMenu = () => setIsExpanded(st => !st);
    const links = [{ href: '/', title: 'HOME' }, { href: '/headphones', title: 'HEADPHONES' }, { href: '/speakers', title: 'SPEAKERS' }, { href: '/earphones', title: 'EARPHONES' }];

    return (
        <header className='Header'>
            <div className='Header__container'>
                <div className='Header__menu' onClick={toggleMenu}><Image src={isExpanded ? closeMenu : openMenu} alt='menu' /></div>
                <Link href='/'>
                    <a className='Header__logo'><Image src={logo} alt='website-logo' /></a>
                </Link>
                <nav className={`Header__nav ${isExpanded ? 'active' : ''}`}>
                    <ul className='Header__desktopList'>
                        {links.map(link => (
                            <li key={uuid()}>
                                <Link href={link.href}>
                                    <a className={pathname === link.href ? 'active' : ''}>{link.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Navigation />
                </nav>
                <div className='Header__cart' onClick={() => alert('cart')}><Image src={cart} alt='cart' /></div>
            </div>
            <div className={`Header__lightbox ${isExpanded ? 'active' : ''}`}></div>
        </header>
    )
}
