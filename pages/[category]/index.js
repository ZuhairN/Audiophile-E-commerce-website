import Head from "next/head";
import Title from "../../components/categories/Title";
import Products from '../../components/categories/Products';
import MobNavList from "../../components/shared/MobNavList";
import Gear from "../../components/shared/Gear";

export default function Index({ category }) {

  return (
    <>
      <Head>
        <title>{category.charAt(0).toUpperCase() + category.slice(1)}</title>
      </Head>
      <main>
        <Title title={category} />
        <Products category={category} />
        <MobNavList />
        <Gear />
      </main>
    </>
  )
}
export const getStaticProps = async context => {
  return {
    props: { category: context.params.category }
  }
};

export const getStaticPaths = async () => {
  const paths = [{ params: { category: 'headphones' } }, { params: { category: 'speakers' } }, { params: { category: 'earphones' } }];
  return {
    paths,
    fallback: false
  }
}