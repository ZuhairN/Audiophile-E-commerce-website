import Btn from '../shared/Btn';
import images from '../../public/images/home/images';

export default function Hero() {
    const { src, alt } = images.Hero;
    return (
        <div className='Hero'>
            <picture>
                <source media='(min-width: 53.5em)' srcSet={src.desktop} />
                <source media='(min-width: 33em)' srcSet={src.tablet} />
                <img className='Hero__img' src={src.mobile} alt={alt} />
            </picture>
            <div className='Hero__content'>
                <h1 className='heading--1'><span>NEW PRODUCT</span>XX99 MARK II HEADPHONES</h1>
                <p className='para'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Btn cls='orange' href='headphones' />
            </div>
        </div>
    )
}
