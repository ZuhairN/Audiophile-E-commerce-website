import Head from 'next/head';
import Hero from '../components/home/Hero';
import MobNavList from '../components/shared/MobNavList';
import Samples from '../components/home/Samples';
import Gear from '../components/shared/Gear';

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile E-commerce</title>
      </Head>
      <main className='Home'>
        <Hero />
        <MobNavList />
        <Samples />
        <Gear />
      </main>
    </>
  )
}
