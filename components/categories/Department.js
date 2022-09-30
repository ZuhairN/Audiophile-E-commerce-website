import { v4 as uuid } from 'uuid';
import Product from 'components/shared/Product';

export default function Department({ category, title }) {
    return (
        <div className='Department'>
            <div className='Department__title'>
                <h1 className='heading--1'>{title.toUpperCase()}</h1>
            </div>
            <div className='Department__products'>
                {category.sort((a, b) => Number(b.isNew) - Number(a.isNew)).map(product => (
                    <Product key={uuid()} {...product} />
                ))}
            </div>
        </div>
    )
}