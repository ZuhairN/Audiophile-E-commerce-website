import { v4 as uuid } from 'uuid';
import Product from 'components/shared/Product';

export default function Section({ category }) {
    return (
        <div className='Section'>
            {category.sort((a, b) => Number(b.isNew) - Number(a.isNew)).map(product => (
                <Product key={uuid()} {...product} />
            ))}
        </div>
    )
}