import Head from "next/head";
import Department from "components/categories/Department";
import MobNavList from "components/shared/MobNavList";
import Gear from "components/shared/Gear";
import data from 'data.json';

export default function Category({ categData }) {
    const title = categData[0].category;
    return (
        <>
            <Head>
                <title>{`Audiophile-${title}`}</title> {/*Warning: A title element received an array with more than 1 element as children => sol: Template Literal*/}
            </Head>
            <main>
                <Department title={title} category={categData} />
                <MobNavList />
                <Gear />
            </main>
        </>
    )
}
export const getStaticProps = async context => {
    const { category } = context.params
    const categData = data.filter(product => product.category === category);
    return {
        props: { categData }
    }
};

export const getStaticPaths = async () => {
    const paths = [{ params: { category: 'headphones' } }, { params: { category: 'speakers' } }, { params: { category: 'earphones' } }];
    return {
        paths,
        fallback: false
    }
}