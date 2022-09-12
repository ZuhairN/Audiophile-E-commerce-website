import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import logo from 'public/images/shared/desktop/logo.svg';
import openMenu from 'public/images/shared/tablet/icon-hamburger.svg';
import closeMenu from 'public/images/shared/tablet/icon-close-menu.svg';
import cart from 'public/images/shared/desktop/icon-cart.svg';
import MobNavList from "./MobNavList";
import NavList from "./NavList";


export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
    const { query } = useRouter();
    const toggleMenu = () => setIsExpanded(st => !st);

    useEffect(() => {
        setIsExpanded(false);
    }, [query])

    return (
        <header className='Header'>
            <div className='Header__container'>
                <div className='Header__menu' onClick={toggleMenu}><Image src={isExpanded ? closeMenu : openMenu} alt='menu' /></div>
                <Link href='/'>
                    <a className='Header__logo'><Image src={logo} alt='website-logo' /></a>
                </Link>
                <nav className={`Header__nav ${isExpanded ? 'active' : ''}`}>
                    <NavList />
                    <MobNavList />
                </nav>
                <div className='Header__cart' onClick={() => alert('cart')}><Image src={cart} alt='cart' /></div>
            </div>
            <div className={`Header__lightbox ${isExpanded ? 'active' : ''}`}></div>
        </header>
    )
}
