import Image from "next/image";
import Btn from "../Btn";
import ZX9 from '../../public/images/home/mobile/image-speaker-zx9.png'
import ZX7 from '../../public/images/home/mobile/image-speaker-zx7.jpg';

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
                <h2 className='heading--2'>ZX7 SPEAKER</h2>
                <Btn cls='transparent' href='speakers' />
            </div>
            <div className='Samples__YX1'>
                <div className='Samples__YX1__img'></div>
                <div className='Samples__YX1__content'>
                    <h2 className='heading--2'>YX1 EARPHONES</h2>
                    <Btn cls='transparent' href='earphones' />
                </div>
            </div>
        </div>
    )
}
