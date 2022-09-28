import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from 'public/images/shared/desktop/logo.svg';
import NavList from './NavList';

export default function Footer() {
    return (
        <footer className='Footer'>
            <div className='Footer__container'>
                <nav className='Footer__nav'>
                    <Link href='/' className='Footer__logo'>
                        <a aria-current='page'><Image src={logo} alt='Audiophile E-commerce logo' /></a>
                    </Link>
                    <NavList />
                </nav>

                <div className='Footer__content'>
                    <p className='para'>Audiophile is an all in one stop to fulfill your audio needs. We’re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <p className='para--copyright'>Copyright 2022. All Rights Reserved</p>
                    <div className='Footer__media'>
                        <a href='https://twitter.com/' target='_blank' rel="noreferrer"><FaTwitter /><span className='sr-only'>Visit our Twitter page</span></a>
                        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><FaFacebookSquare /><span className='sr-only'>Visit our Facebook page</span></a>
                        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><FaInstagram /><span className='sr-only'>Visit our Instagram page</span></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
