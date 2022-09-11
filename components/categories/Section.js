import { v4 as uuid } from 'uuid';
import productsData from './data';
import Product from '../shared/Product';

export default function Section({ category }) {
    return (
        <div className='Section'>
            {productsData[category].sort((a, b) => Number(b.isNew) - Number(a.isNew)).map(product => (
                <Product key={uuid()} {...product} />
            ))}
        </div>
    )
}