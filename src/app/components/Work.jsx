'use client';
// Import necessary libraries and components
import { motion } from 'framer-motion';
import Link from 'next/link';



export default function Work() {
    return (
        <section id="work" className="min-h-screen w-full py-20 px-4 md:px-8 lg:px-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12">My Work</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Card 1 */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-zinc-900/50 rounded-lg overflow-hidden"
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                            <p className="text-zinc-400 mb-4">Brief description of the project and what technologies were used.</p>
                            <div className="flex gap-2 mb-4">
                                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">Next.js</span>
                                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">TailwindCSS</span>
                            </div>
                            <Link 
                                href="#" 
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                View Project →
                            </Link>
                        </div>
                    </motion.div>

                    {/* Project Card 2 */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-zinc-900/50 rounded-lg overflow-hidden"
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                            <p className="text-zinc-400 mb-4">Brief description of the project and what technologies were used.</p>
                            <div className="flex gap-2 mb-4">
                                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">Node.js</span>
                                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">MongoDB</span>
                            </div>
                            <Link 
                                href="#" 
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                View Project →
                            </Link>
                        </div>
                    </motion.div>

                    {/* Project Card 3 */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-zinc-900/50 rounded-lg overflow-hidden"
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                            <p className="text-zinc-400 mb-4">Brief description of the project and what technologies were used.</p>
                            <div className="flex gap-2 mb-4">
                                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">Python</span>
                                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">Flask</span>
                                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">PostgreSQL</span>
                            </div>
                            <Link 
                                href="#" 
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                View Project →
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}