import Image from "next/image";
import gearMob from '../../public/images/shared/mobile/image-best-gear.jpg';
import gearTab from '../../public/images/shared/tablet/image-best-gear.jpg';
import gearDesk from '../../public/images/shared/desktop/image-best-gear.jpg';

export default function Gear() {
    return (
        <div className='Gear'>
            <div className='Gear__img--mobile'>
                <Image src={gearMob} alt='gear' />
            </div>
            <div className='Gear__img--tablet'>
                <Image src={gearTab} alt='gear' />
            </div>
            <div className='Gear__img--desktop'>
                <Image src={gearDesk} alt='gear' />
            </div>
            <div className='Gear__content'>
                <h2 className='heading--2'>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
                <p className='para--dark'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </div>
    )
}
