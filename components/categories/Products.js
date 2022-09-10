import { v4 as uuid } from 'uuid';
import productsData from './data';
import Btn from '../shared/Btn';

export default function Products({ category }) {
    return (
        <div className='Products'>
            {productsData[category].sort((a, b) => Number(b.isNew) - Number(a.isNew)).map(product => (
                <div key={uuid()} className='Products__item'>
                    <picture>
                        <source media='(min-width: 53.5em)' srcSet={product.img.desktop} />
                        <source media='(min-width: 33em)' srcSet={product.img.tablet} />
                        <img className='Products__img' src={product.img.mobile} alt={product.name} />
                    </picture>
                    <div className='Products__content'>
                        <h2 className='heading--2'>{product.isNew ? <span className='heading--span'>NEW PRODUCT</span> : null} {product.name}</h2>
                        <p className='para--dark'>{product.description}</p>
                        <Btn cls='orange' href={category} />
                    </div>
                </div>
            ))}
        </div>
    )
}