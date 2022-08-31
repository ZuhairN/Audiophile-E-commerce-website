import Image from "next/image";
import Btn from "../Btn";
import ZX9 from '../../public/images/home/mobile/image-speaker-zx9.png'
import ZX7Mob from '../../public/images/home/mobile/image-speaker-zx7.jpg';
import ZX7Tab from '../../public/images/home/tablet/image-speaker-zx7.jpg';
import ZX7Desk from '../../public/images/home/desktop/image-speaker-zx7.jpg';
import YX1Mob from '../../public/images/home/mobile/image-earphones-yx1.jpg';
import YX1Tab from '../../public/images/home/tablet/image-earphones-yx1.jpg';
import YX1Desk from '../../public/images/home/desktop/image-earphones-yx1.jpg';

export default function Samples() {
    return (
        <div className='Samples'>
            <div className='Samples__ZX9'>
                <div className='Samples__ZX9__img'><Image src={ZX9} alt='ZX9-Speaker' /></div>
                <h2 className='heading--1'>ZX9 SPEAKER</h2>
                <p className='para'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Btn cls='black' href='speakers' />
            </div>

            <div className='Samples__ZX7'>
                <div className='Samples__ZX7__img--mobile'>
                    <Image src={ZX7Mob} alt='ZX7' />
                </div>
                <div className='Samples__ZX7__img--tablet'>
                    <Image src={ZX7Tab} alt='ZX7' />
                </div>
                <div className='Samples__ZX7__img--desktop'>
                    <Image src={ZX7Desk} alt='ZX7' />
                </div>
                <div className='Samples__ZX7__content'>
                    <h2 className='heading--2'>ZX7 SPEAKER</h2>
                    <Btn cls='transparent' href='speakers' />
                </div>
            </div>
            <div className='Samples__YX1'>
                <div className='Samples__YX1__img--mobile'>
                    <Image src={YX1Mob} alt='YX1' />
                </div>
                <div className='Samples__YX1__img--tablet'>
                    <Image src={YX1Tab} alt='YX1' />
                </div>
                <div className='Samples__YX1__img--desktop'>
                    <Image src={YX1Desk} alt='YX1' />
                </div>
                <div className='Samples__YX1__content'>
                    <h2 className='heading--2'>YX1 EARPHONES</h2>
                    <Btn cls='transparent' href='earphones' />
                </div>
            </div>
        </div>
    )
}
