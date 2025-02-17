import Btn from 'components/shared/Btn';

export default function Samples() {
    return (
        <div className='Samples'>
            <div className='Samples__ZX9'>
                <picture className='Samples__ZX9__img'>
                    <source media='(min-width: 53.5em)' srcSet='/images/home/desktop/image-speaker-zx9.png' />
                    <source media='(min-width: 33em)' srcSet='/images/home/tablet/image-speaker-zx9.png' />
                    <img src='/images/home/mobile/image-speaker-zx9.png' alt='ZX9-Speaker' />
                </picture>
                <div className='Samples__ZX9__content'>
                    <h2 className='heading--1'>ZX9 SPEAKER</h2>
                    <p className='para'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Btn cls='black' href='speakers/zx9-speaker' text='SEE PRODUCT' label='ZX9 Speaker' />
                </div>
            </div>

            <div className='Samples__ZX7'>
                <picture className='Samples__ZX7__img'>
                    <source media='(min-width: 53.5em)' srcSet='/images/home/desktop/image-speaker-zx7.jpg' />
                    <source media='(min-width: 33em)' srcSet='/images/home/tablet/image-speaker-zx7.jpg' />
                    <img src='/images/home/mobile/image-speaker-zx7.jpg' alt='ZX7-Speaker' />
                </picture>
                <div className='Samples__ZX7__content'>
                    <h2 className='heading--2'>ZX7 SPEAKER</h2>
                    <Btn cls='transparent' href='speakers/zx7-speaker' text='SEE PRODUCT' label='ZX7 Speaker' />
                </div>
            </div>
            <div className='Samples__YX1'>
                <picture className='Samples__YX1__img'>
                    <source media='(min-width: 53.5em)' srcSet='/images/home/desktop/image-earphones-yx1.jpg' />
                    <source media='(min-width: 33em)' srcSet='/images/home/tablet/image-earphones-yx1.jpg' />
                    <img src='/images/home/mobile/image-earphones-yx1.jpg' alt='YX1-Earphones' />
                </picture>
                <div className='Samples__YX1__content'>
                    <h2 className='heading--2'>YX1 EARPHONES</h2>
                    <Btn cls='transparent' href='earphones/yx1-earphones' text='SEE PRODUCT' label='YX1 Earphones' />
                </div>
            </div>
        </div>
    );
}
