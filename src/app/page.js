import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <main className="relative">
        <Hero />
        <Work />
      </main>
    </div>
  );

}