import Head from "next/head";
import ProductDetails from "components/products/ProductDetails";
import Gear from "components/shared/Gear";
import MobNavList from "components/shared/MobNavList";
import data from 'data.json';

export default function Product({ productData }) {
    return (
        <>
            <Head>
                <title>{`Audiophile-${productData.productId}`}</title>
            </Head>
            <main>
                <ProductDetails {...productData} data={productData} />
                <MobNavList />
                <Gear />
            </main>
        </>
    )
}

export const getStaticProps = async context => {
    const { category, productId } = context.params;
    const productData = data.find(product => product.category === category && product.productId === productId);
    return {
        props: {
            productData,
        }
    }
}

export const getStaticPaths = async () => {
    const paths = data.map(({ category, productId }) => ({ params: { category, productId } }));
    return {
        paths,
        fallback: false
    }
}
