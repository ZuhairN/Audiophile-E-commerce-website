import { v4 as uuid } from 'uuid';
import Btn from 'components/shared/Btn';
import Product from '../shared/Product';
import BackBtn from 'components/shared/BackBtn';

export default function ProductDetails({ data, shortName, features, includedItems, gallery, others }) {
    const responsiveImg = (img, alt) => (
        <picture>
            <source media='(min-width: 53.5em)' srcSet={`${img.desktop}`} />
            <source media='(min-width: 33em)' srcSet={`${img.tablet}`} />
            <img src={`${img.mobile}`} alt={alt} />
        </picture>
    );

    return (
        <div className='ProductDetails'>
            <BackBtn />
            <Product {...data} isControlled />
            <div className='ProductDetails__content'>
                <div className='ProductDetails__features'>
                    <h2 className='heading--2'>FEATURES</h2>
                    {features.map(feature => (
                        <p key={uuid()} className='para--dark'>
                            {feature}
                        </p>
                    ))}
                </div>
                <div className='ProductDetails__inBox'>
                    <h2 className='heading--2'>IN THE BOX</h2>
                    <ul className='ProductDetails__inBox__list'>
                        {includedItems.map(item => (
                            <li key={uuid()} className='para--dark'>
                                <span>{item.quantity}x</span>
                                {item.item.replace(/^(.)|\s+(.)/g, c => c.toUpperCase())}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='ProductDetails__gallery'>
                {responsiveImg(gallery.first, shortName)}
                {responsiveImg(gallery.second, shortName)}
                {responsiveImg(gallery.third, shortName)}
            </div>
            <div className='ProductDetails__similarItems'>
                <h2 className='heading--2'>YOU MAY ALSO LIKE</h2>
                <div className='ProductDetails__cards'>
                    {others.map(product => (
                        <div key={uuid()} className='ProductDetails__card'>
                            {responsiveImg(product.image, product.name)}
                            <h3 className='heading--3'>{product.name.toUpperCase()}</h3>
                            <Btn cls='orange' href={`/${product.productId}`} text='SEE PRODUCT' label={product.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
