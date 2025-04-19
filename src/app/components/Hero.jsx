import GradientCanvas from './GradientCanvas';

export default function Hero(){
    return (
        <section className="flex relative flex-col justify-center min-h-screen px-6 sm:px-8 lg:px-10">
        <div className="absolute top-0 left-0 w-screen h-screen -z-10">
          <div id="noise-div" />
          <GradientCanvas />
        </div>
        <div className="max-w-5xl">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter mb-4 text-foreground">
            Engineering the future of computation.
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-accent leading-snug">
            I research quantum data systems and develop high-performance software at the edge of what's possible.
          </p>
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
        <div className="fixed bottom-8 right-8 animate-bounce">
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
        </div>
        <div className="gradient-transition"></div>

      </section>
    );
}