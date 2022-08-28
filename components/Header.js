import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from '../public/images/shared/desktop/logo.svg';
import openMenu from '../public/images/shared/tablet/icon-hamburger.svg';
import closeMenu from '../public/images/shared/tablet/icon-close-menu.svg';
import cart from '../public/images/shared/desktop/icon-cart.svg';
import Card from "./Card";


export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleMenu = () => setIsExpanded(st => !st);

    return (
        <header className='Header'>
            <div className='Header__container'>
                <div className='Header__menu' onClick={toggleMenu}><Image src={isExpanded ? closeMenu : openMenu} alt='menu' /></div>
                <Link href='/' className='Header__logo'>
                    <a><Image src={logo} alt='website-logo' /></a>
                </Link>
                <nav className={`Header__nav ${isExpanded ? 'active' : ''}`}>
                    <ul className='Header__desktopList'>
                        <li><Link href='/'><a>HOME</a></Link></li>
                        <li><Link href='/headphones'><a>HEADPHONES</a></Link></li>
                        <li><Link href='/speakers'><a>SPEAKERS</a></Link></li>
                        <li><Link href='/earphones'><a>EARPHONES</a></Link></li>
                    </ul>
                    <ul className='Header__tabletList'>
                        <Card imgId={0} />
                        <Card imgId={1} />
                        <Card imgId={2} />
                    </ul>
                </nav>
                <div className='Header__cart' onClick={() => alert('cart')}><Image src={cart} alt='cart' /></div>
            </div>
            <div className={`Header__lightbox ${isExpanded ? 'active' : ''}`}></div>
        </header>
    )
}
