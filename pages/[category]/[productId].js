import Head from "next/head";
import ProductDetails from "components/products/ProductDetails";
import Gear from "components/shared/Gear";
import MobNavList from "components/shared/MobNavList";
import path from 'path';
import fs from 'fs';

export default function Product({ productData }) {
    return (
        <>
            <Head>
                <title>{productData.shortName}</title>
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
    const filePath = path.join(process.cwd(), 'data.json')
    const res = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(res).products;
    const productData = parsedData.find(product => product.category === category && product.productId === productId);
    return {
        props: {
            productData,
        }
    }
}

export const getStaticPaths = async () => {
    const paths = [{ params: { category: 'headphones', productId: '55' } }];
    return {
        paths,
        fallback: 'blocking'
    }
}
