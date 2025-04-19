import Header from './components/Header';
import Hero from './components/Hero';
export default function HomePage() {
  return (
    <div className="relative">
        <div className='max-w-4xl fixed top-0 left-0 w-full z-50'>
          <Header />
        </div>
        <Hero />
    </div>
  );

}