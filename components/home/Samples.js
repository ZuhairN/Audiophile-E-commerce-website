import Image from "next/image";
import Btn from "../Btn";
import ZX9 from '../../public/images/home/mobile/image-speaker-zx9.png'

export default function Samples() {
    return (
        <div className='Samples'>
            <div className='Samples__speaker'>
                <div className='Samples__speaker__img'><Image src={ZX9} alt='ZX9-Speaker' /></div>
                <h2 className='heading--1'>ZX9 SPEAKER</h2>
                <p className='para'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Btn />
            </div>
            <div></div>
            <div></div>
        </div>
    )
}
