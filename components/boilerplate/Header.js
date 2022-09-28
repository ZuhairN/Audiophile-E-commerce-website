import { useEffect } from "react";
import { useRouter } from "next/router";
import useToggle from "logic/useToggle";
import Image from "next/image";
import Link from "next/link";

import logo from 'public/images/shared/desktop/logo.svg';
import openMenu from 'public/images/shared/tablet/icon-hamburger.svg';
import closeMenu from 'public/images/shared/tablet/icon-close-menu.svg';
import MobNavList from "../shared/MobNavList";
import NavList from "./NavList";
import Cart from "../cart/Cart";
import LightBox from "components/shared/LightBox";


export default function Header() {
    const [isExpanded, toggle, collapse] = useToggle(false);
    const { query } = useRouter();

    useEffect(() => { collapse() }, [query])

    return (
        <header className='Header'>
            <div className='Header__container'>
                <button className='Header__menu' onClick={toggle} ><Image src={isExpanded ? closeMenu : openMenu} alt='menu' onMouseDown={(e) => e.target.blur()} /></button>
                <Link href='/'>
                    <a className='Header__logo' aria-current='page'><Image src={logo} alt='Audiophile E-commerce logo' /></a>
                </Link>
                <nav className={`Header__nav ${isExpanded ? 'active' : ''}`} aria-label='primary'>
                    <NavList />
                    <MobNavList />
                </nav>
                <Cart />
            </div>
            <LightBox isExpanded={isExpanded} collapse={collapse} />
        </header>
    )
}
