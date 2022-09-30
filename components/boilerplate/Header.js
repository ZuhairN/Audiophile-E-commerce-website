import { useEffect } from "react";
import { useRouter } from "next/router";
import useToggle from "logic/useToggle";
import Image from "next/image";
import Link from "next/link";

import NavList from "./NavList";
import MobNavList from 'components/shared/MobNavList';
import LightBox from "components/shared/LightBox";
import Cart from "components/cart/Cart";
import logo from 'public/images/shared/desktop/logo.svg';
import openMenu from 'public/images/shared/tablet/icon-hamburger.svg';
import closeMenu from 'public/images/shared/tablet/icon-close-menu.svg';


export default function Header() {
    const { query } = useRouter();
    const [isExpanded, toggle, collapse] = useToggle(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { collapse() }, [query])

    return (
        <header className='Header'>
            <div className='Header__container'>
                <button type='button' className='Header__menu' onClick={toggle} aria-label='Navigation Menu'>
                    <Image src={isExpanded ? closeMenu : openMenu} alt='menu' />
                </button>
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
