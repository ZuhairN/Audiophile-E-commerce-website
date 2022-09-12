import Head from "next/head";
import Title from "components/categories/Title";
import Section from 'components/categories/Section';
import MobNavList from "components/shared/MobNavList";
import Gear from "components/shared/Gear";
import path from 'path';
import fs from 'fs';

export default function Template({ data }) {
    const title = data[0].category;
    return (
        <>
            <Head>
                <title>{title.charAt(0).toUpperCase() + title.slice(1)}</title>
            </Head>
            <main>
                <Title title={title} />
                <Section category={data} />
                <MobNavList />
                <Gear />
            </main>
        </>
    )
}
export const getStaticProps = async context => {
    const { category } = context.params
    const filePath = path.join(process.cwd(), 'data.json')
    const res = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(res).products;

    const data = parsedData.filter(product => product.category === category);
    return {
        props: { data }
    }
};

export const getStaticPaths = async () => {
    const paths = [{ params: { category: 'headphones' } }, { params: { category: 'speakers' } }, { params: { category: 'earphones' } }];
    return {
        paths,
        fallback: false
    }
}