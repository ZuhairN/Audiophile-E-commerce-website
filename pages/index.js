import Hero from 'components/home/Hero';
import MobNavList from 'components/shared/MobNavList';
import Samples from 'components/home/Samples';
import Gear from 'components/shared/Gear';

export default function Home() {
  return (
    <>
      <main className='Home'>
        <Hero />
        <MobNavList />
        <Samples />
        <Gear />
      </main>
    </>
  )
}