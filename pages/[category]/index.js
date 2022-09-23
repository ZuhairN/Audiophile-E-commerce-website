import Head from "next/head";
import Title from "components/categories/Title";
import Section from 'components/categories/Section';
import MobNavList from "components/shared/MobNavList";
import Gear from "components/shared/Gear";
import data from 'data.json';

export default function Category({ categData }) {
    const title = categData[0].category;
    return (
        <>
            <Head>
                <title>Audiophile-{title}</title>
            </Head>
            <main>
                <Title title={title} />
                <Section category={categData} />
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