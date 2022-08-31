import Image from 'next/image';
import Btn from '../Btn';
import bgMob from '../../public/images/home/mobile/image-hero.jpg';
import bgTab from '../../public/images/home/tablet/image-hero.jpg';
import bgDesk from '../../public/images/home/desktop/image-hero.jpg';


export default function Hero() {
    return (
        <div className='Hero'>
            <div className='Hero__img--mobile'>
                <Image src={bgMob} alt='bg' />
            </div>
            <div className='Hero__img--tablet'>
                <Image src={bgTab} alt='bg' />
            </div>
            <div className='Hero__img--desktop'>
                <Image src={bgDesk} alt='bg' />
            </div>
            <div className='Hero__content'>
                <h1 className='heading--1'><span>NEW PRODUCT</span>XX99 MARK II HEADPHONE</h1>
                <p className='para'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Btn cls='orange' href='headphones' />
            </div>
        </div>
    )
}
