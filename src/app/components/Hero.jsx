import ShaderSphere from './ShaderSphere';
import Footer from './Footer';
export default function Hero(){
    return (
        <section className="flex relative  flex-row content-center min-h-screen px-6 sm:px-8 lg:px-10 lg:py-12">
        <div className="absolute top-0 left-0 w-screen h-screen ">
          <ShaderSphere />
        </div>
          <div className="max-w-4xl z-1 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter mb-4 text-foreground">
              I turn research into systems that work.
            </h1>
            <div className="max-w-3xl space-y-6">
              <h1 className="text-xl sm:text-xl md:text-3xl font-bold font-serif text-[var(--foreground)] leading-tight">
                I'm Andrei Ilinescu
              </h1>
              <ul className="text-muted text-base sm:text-md md:text-lg space-y-2 mt-3">
                <li>🎓 cs @ TU Delft (math minor -quant finance@ PoliMi - fall 2025)</li>
                <li>⚛️ honours student researcher @ InfiniData Lab - optimizing quantum simulations</li>
                <li>🛠️ r&d intern @ Ampelmann - real-time logging systems & HMI software</li>
              </ul>

              <div className="text-muted text-base sm:text-md  md:text-lg mt-6 space-y-1">
                <p className="text-[var(--foreground)] font-semibold">recently:</p>
                <ul className="list-none pl-0 space-y-1">
                  <li>↳ built a circuit simulator faster than QimB (50%+ on sparse circuits)</li>
                  <li>↳ shipped real-time analytics & GUI simulator for offshore ops</li>
                  <li>↳ multiple side projects: C++ neural net, travel app, expense manager</li>
                </ul>
              </div>

              <div className="text-muted text-base sm:text-lg mt-6">
              in high school: 🏆 1st place @ international/national networking olympiad · top 10 @ RO informatics olympiad · multiple-time hackathon winner
              </div>
            </div>
            <div className="mt-8 mb-8 flex flex-wrap gap-4">
              <a
                href="/CV-03-2025.pdf"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 md:px-6 md:py-3 border-2 border-[var(--accent)] rounded-lg font-semibold text-[var(--accent)] transition duration-300 hover:bg-[var(--accent)] hover:text-[var(--background)]"
              >
                View Resume
              </a>
              <a
                href="/projects"
                className="inline-block px-4 py-2 md:px-6 md:py-3 border-2 border-[var(--accent)] bg-[var(--accent)] rounded-lg font-semibold text-[var(--background)] transition duration-300 hover:bg-transparent hover:text-[var(--accent)]"
              >
                View Projects
              </a>
            </div>
            <Footer />
          </div>

      </section>
    );
}