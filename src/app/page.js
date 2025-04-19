import Header from './components/Header';
import Hero from './components/Hero';
import ShaderSphere from './components/ShaderSphere';

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-screen h-screen">
                <ShaderSphere />
        </div>
        <div className='max-w-4xl  top-0 left-0 w-full z-50'>
          <Header />
        </div>
        <Hero />
    </div>
  );

}