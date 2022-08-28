import Hero from '../components/home/Hero';
import Navigation from '../components/home/Navigation';
import Samples from '../components/home/Samples';

export default function Home() {
  return (
    <main className='Home'>
      <Hero />
      <Navigation />
      <Samples />
    </main>
  )
}
