import Footer from './Footer';

export default function Hero(){
    return (
        <section className="flex relative flex-col  px-4 sm:px-6 lg:px-10 py-2 lg:py-4 max-w-4xl">
            <div className="relative  z-10 flex flex-col justify-center">
                {/* Hidden on mobile, visible from sm breakpoint */}
                <h1 className="hidden sm:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter mb-4 text-foreground">
                    I turn research into systems that work.
                </h1>
                
                <div className="max-w-3xl space-y-4 sm:space-y-6">
                    <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[var(--foreground)] leading-tight">
                        I'm Andrei Ilinescu
                    </h1>
                    
                    {/* Adjusted spacing and text sizes for mobile */}
                    <ul className="text-muted text-sm sm:text-base md:text-lg space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                            <span className="mr-2">🎓</span>
                            <span>cs @ TU Delft (math minor - quant finance@ PoliMi - fall 2025)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">⚛️</span>
                            <span>honours student researcher @ InfiniData Lab - optimizing quantum simulations</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">🛠️</span>
                            <span>r&d intern @ Ampelmann - real-time logging systems & HMI software</span>
                        </li>
                    </ul>

                    <div className="text-muted text-sm sm:text-base md:text-lg space-y-1">
                        <p className="text-[var(--foreground)] font-semibold">recently:</p>
                        <ul className="list-none pl-0 space-y-2">
                            <li className="flex">
                                <span className="mr-2">↳</span>
                                <span>built a circuit simulator faster than QimB (50%+ on sparse circuits)</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2">↳</span>
                                <span>shipped real-time analytics & GUI simulator for offshore ops</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2">↳</span>
                                <span>multiple side projects: C++ neural net, travel app, expense manager</span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-muted text-sm sm:text-base md:text-lg">
                        <span className="font-medium">in high school:</span> 🏆 1st place @ international/national networking olympiad · top 10 @ RO informatics olympiad · multiple-time hackathon winner
                    </div>
                </div>

                {/* Adjusted button sizing and spacing for mobile */}
                <div className="mt-6 sm:mt-8 mb-6 sm:mb-8 flex flex-wrap gap-3 sm:gap-4">
                    <a
                        href="/CV-03-2025.pdf"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-2 sm:px-4 md:px-6 md:py-3 border-2 border-[var(--accent)] rounded-lg font-semibold text-sm sm:text-base text-[var(--accent)] transition duration-300 hover:bg-[var(--accent)] hover:text-[var(--background)]"
                    >
                        View Resume
                    </a>
                    <a
                        href="/projects"
                        className="inline-block px-3 py-2 sm:px-4 md:px-6 md:py-3 border-2 border-[var(--accent)] bg-[var(--accent)] rounded-lg font-semibold text-sm sm:text-base text-[var(--background)] transition duration-300 hover:bg-transparent hover:text-[var(--accent)]"
                    >
                        View Projects
                    </a>
                </div>
                
                <Footer />
            </div>
        </section>
    );
}