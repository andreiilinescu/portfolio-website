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
                    
                    {/* Adjusted spacing and text sizes for mobile */}
                    <ul className="text-muted text-sm sm:text-base md:text-lg space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                            <span className="mr-2">🎓</span>
                            <span>cs @ TU Delft (math minor - stochastic processes @ PoliMi - fall 2025)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">⚛️</span>
                            <span>honours student researcher @ InfiniData Lab - optimizing quantum simulations</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">🛠️</span>
                            <span>ai engineer Intern @ Strala AI - automating insurance claims processing</span>
                        </li>
                         <li className="flex items-start">
                            <span className="mr-2">☁️</span>
                            <span>ex swe Intern @ Amazon - automated incident handling using AI Agents</span>
                        </li>
                    </ul>

                    <div className="text-muted text-sm sm:text-base md:text-lg space-y-1">
                        <p className="text-[var(--foreground)] font-semibold">recently:</p>
                        <ul className="list-none pl-0 space-y-2">
                            <li className="flex">
                                <span className="mr-2">↳</span>
                                <span>built a sophisticated quantum circuit generation and feature extraction pipeline leveraging an adaptable probabilistic distribution</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2">↳</span>
                                <span>developed ai agent-driven triage pipelines on AWS automating incident workflows</span>
                            </li>
                           <li className="flex">
                                <span className="mr-2">↳</span>
                                <span>fine-tuned llava-7b for disaster damage assessment and natural-language queries</span>
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
                        href="/16-10-25-us.pdf"
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