import Link from "next/link";
import { useRouter } from "next/router";
import Product from "../shared/Product";
import data from '../categories/data';

export default function ProductDetails({ category, productId }) {
    const Router = useRouter();
    const handleBack = () => Router.back();
    return (
        <div className='ProductDetails'>
            <button className='ProductDetails__back' onClick={handleBack}>Go Back</button>
            <Product {...data[category][0]} price={55} />
        </div>
    )
}
