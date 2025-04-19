import GradientCanvas from './GradientCanvas';
import HeroSphere from './HeroSphere';

export default function Hero(){
    return (
        <section className="flex relative  flex-row content-center min-h-screen px-6 sm:px-8 lg:px-10">
        <div className="absolute top-0 left-0 w-screen h-screen -z-10">
          <div id="noise-div" />
          <GradientCanvas />
        </div>
        <div className="max-w-4xl z-1 flex flex-col justify-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter mb-4 text-foreground">
            I turn research into systems that work.
          </h1>
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[var(--foreground)] leading-tight">
              I’m Andrei Ilinescu
            </h1>
            <p className="text-xl text-muted leading-snug">
              researcher & systems engineer building fast software for complex systems
            </p>

            <ul className="text-muted text-base sm:text-lg space-y-2 mt-4">
              <li>🎓 cs @ TU Delft (minoring in quant finance @ PoliMi – fall 2025)</li>
              <li>⚛️ researcher @ InfiniData Lab – quantum circuit simulation using tensor networks</li>
              <li>🛠️ r&d intern @ Ampelmann – real-time logging systems & HMI software</li>
            </ul>

            <div className="text-muted text-base sm:text-lg mt-6 space-y-1">
              <p className="text-[var(--foreground)] font-semibold">recently:</p>
              <ul className="list-none pl-0 space-y-1">
                <li>↳ built a circuit simulator faster than QimB (50%+ on sparse circuits)</li>
                <li>↳ developed parallel state contraction & optimized memory layout</li>
                <li>↳ shipped real-time analytics & GUI simulator for offshore ops</li>
                <li>↳ led multiple side projects: C++ neural net, travel app, expense manager</li>
              </ul>
            </div>

            <div className="text-muted text-base sm:text-lg mt-6">
            in high school: 🏆 1st place @ international/national networking olympiad · top 10 @ RO informatics olympiad · multiple-time hackathon finalist
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/CV-03-2025.pdf"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-[var(--accent)] rounded-lg font-semibold text-[var(--accent)] transition duration-300 hover:bg-[var(--accent)] hover:text-[var(--background)]"
            >
              View Resume
            </a>
            <a
              href="#projects"
              className="inline-block px-6 py-3 border-2 border-[var(--accent)] bg-[var(--accent)] rounded-lg font-semibold text-[var(--background)] transition duration-300 hover:bg-transparent hover:text-[var(--accent)]"
            >
              View Projects
            </a>
          </div>
        </div>
        <div position="relative " >
          <HeroSphere />
        </div>
        {/* <div className="fixed bottom-8 right-8 animate-bounce">
          <svg 
            width="64" 
            height="64" 
            viewBox="0 0 48 48" 
            fill="none" 
            stroke="currentColor" 
            className="text-accent"
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div> */}

      </section>
    );
}