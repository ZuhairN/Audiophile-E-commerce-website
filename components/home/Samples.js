import Btn from "../shared/Btn";
import images from '../../public/images/home/images';

export default function Samples() {
    const { ZX9, ZX7, YX1 } = images;
    return (
        <div className='Samples'>
            <div className='Samples__ZX9'>
                <picture className='Samples__ZX9__img'>
                    <source media='(min-width: 53.5em)' srcSet={ZX9.src.desktop} />
                    <source media='(min-width: 33em)' srcSet={ZX9.src.tablet} />
                    <img src={ZX9.src.mobile} alt={ZX9.alt} />
                </picture>
                <div className='Samples__ZX9__content'>
                    <h2 className='heading--1'>ZX9 SPEAKER</h2>
                    <p className='para'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Btn cls='black' href='speakers' text='SEE PRODUCT' />
                </div>
            </div>

            <div className='Samples__ZX7'>
                <picture className='Samples__ZX7__img'>
                    <source media='(min-width: 53.5em)' srcSet={ZX7.src.desktop} />
                    <source media='(min-width: 33em)' srcSet={ZX7.src.tablet} />
                    <img src={ZX7.src.mobile} alt={ZX7.alt} />
                </picture>
                <div className='Samples__ZX7__content'>
                    <h2 className='heading--2'>ZX7 SPEAKER</h2>
                    <Btn cls='transparent' href='speakers' text='SEE PRODUCT' />
                </div>
            </div>
            <div className='Samples__YX1'>
                <picture className='Samples__YX1__img'>
                    <source media='(min-width: 53.5em)' srcSet={YX1.src.desktop} />
                    <source media='(min-width: 33em)' srcSet={YX1.src.tablet} />
                    <img src={YX1.src.mobile} alt={YX1.alt} />
                </picture>
                <div className='Samples__YX1__content'>
                    <h2 className='heading--2'>YX1 EARPHONES</h2>
                    <Btn cls='transparent' href='earphones' text='SEE PRODUCT' />
                </div>
            </div>
        </div>
    )
}
