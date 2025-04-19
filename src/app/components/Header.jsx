"use client";
import ThemeSwitcher from './ThemeSwitcher';
import Signature from './Signature';

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50">
            <div className="px-6 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img 
                            src="./signature2.png" 
                            alt="Logo" 
                            className="h-10 transition-transform duration-200 hover:scale-110" 
                            style={{ 
                                filter: 'var(--theme-filter)',
                                transform: 'scaleX(-1)'
                            }}
                        />
                    </div>
                                        
                                        {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-12 backdrop-blur-md px-8 py-3 rounded-full border"
                         style={{
                             backgroundColor: 'var(--nav-bg)',
                             borderColor: 'var(--border-color)'
                         }}>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#blog" className="nav-link">Blog</a>
                    </nav>

                    <div className="flex items-center scale-125 transition-transform duration-200 hover:scale-140">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    )
}