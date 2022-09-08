import Hero from '../components/home/Hero';
import Navigation from '../components/shared/Navigation';
import Samples from '../components/home/Samples';
import Gear from '../components/shared/Gear';

export default function Home() {
  return (
    <main className='Home'>
      <Hero />
      <Navigation />
      <Samples />
      <Gear />
    </main>
  )
}
