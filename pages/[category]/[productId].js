import Head from "next/head";
import ProductDetails from "../../components/products/ProductDetails";
import Gear from "../../components/shared/Gear";
import MobNavList from "../../components/shared/MobNavList";

export default function Product({ category, productId }) {
    return (
        <>
            <Head>
                <title>a</title>
            </Head>
            <main>
                <ProductDetails category={category} productId={productId} />
                <MobNavList />
                <Gear />
            </main>
        </>
    )
}

export const getStaticProps = async (context) => {
    const { category, productId } = context.params;
    return {
        props: { category, productId }
    }
}

export const getStaticPaths = async () => {
    const paths = [{ params: { category: 'headphones', productId: '55' } }];
    return {
        paths,
        fallback: 'blocking'
    }
}
