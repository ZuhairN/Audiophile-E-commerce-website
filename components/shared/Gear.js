import images from '../../public/images/shared/images';

export default function Gear() {
    const { src, alt } = images.Gear;
    return (
        <div className='Gear'>
            <picture className='Gear__img'>
                <source media='(min-width: 53.5em)' srcSet={src.desktop} />
                <source media='(min-width: 33em)' srcSet={src.tablet} />
                <img src={src.mobile} alt={alt} />
            </picture>
            <div className='Gear__content'>
                <h2 className='heading--2'>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
                <p className='para--dark'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </div>
    )
}
