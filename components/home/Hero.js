import Btn from 'components/shared/Btn';

export default function Hero() {
    return (
        <div className='Hero'>
            <picture>
                <source media='(min-width: 53.5em)' srcSet='/images/home/desktop/image-hero.jpg' />
                <source media='(min-width: 33em)' srcSet='/images/home/tablet/image-hero.jpg' />
                <img className='Hero__img' src='/images/home/mobile/image-hero.jpg' alt='XX99 M2' />
            </picture>
            <header className='Hero__content'>
                <h1 className='heading--1'><span className='heading--span'>NEW PRODUCT</span>XX99 MARK II HEADPHONES</h1>
                <p className='para'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Btn cls='orange' href='headphones/xx99-mark-two-headphones' text='SEE PRODUCT' />
            </header>
        </div>
    )
}
