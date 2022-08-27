import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/shared/desktop/logo.svg';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className='Footer'>
            <nav className='Footer__nav'>
                <Link href='/' className='Footer__logo'>
                    <a><Image src={logo} alt='website-logo' /></a>
                </Link>
                <ul className='Footer__list'>
                    <li><Link href='/'><a>HOME</a></Link></li>
                    <li><Link href='/headphones'><a>HEADPHONES</a></Link></li>
                    <li><Link href='/speakers'><a>SPEAKERS</a></Link></li>
                    <li><Link href='/earphones'><a>EARPHONES</a></Link></li>
                </ul>
            </nav>

            <div className='Footer__content'>
                <p className='para'>Audiophile is an all in one stop to fulfill your audio needs. We’re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <p className='para--copyright'>Copyright 2022. All Rights Reserved</p>
                <div className='Footer__media'>
                    <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><FaFacebookSquare /></a>
                    <a href='https://twitter.com/' target='_blank' rel="noreferrer"><FaTwitter /></a>
                    <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    )
}
