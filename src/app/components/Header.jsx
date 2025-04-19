"use client";
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
    return (
            <header className="px-6 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img 
                            src="/signature2.png" 
                            alt="Logo" 
                            className="h-10 transition-transform duration-200 hover:scale-130" 
                            style={{ 
                                filter: 'var(--theme-filter)',
                                transform: 'scaleX(-1)'
                            }}
                        />
                    </div>
                                        
                    {/* Navigation */}
                    <nav className="flex items-center space-x-12 backdrop-blur-md md:px-8 md:py-3  sm:px-4 sm:py-1 rounded-full border"
                         style={{
                             backgroundColor: 'var(--nav-bg)',
                             borderColor: 'var(--border-color)'
                         }}>
                        <a href="/" className="nav-link">About</a>
                        <a href="/projects" className="nav-link">Projects</a>
                        <a href="/writing" className="nav-link">Writing</a>
                    </nav>

                    <div className="flex items-center scale-125 transition-transform duration-200 hover:scale-160">
                        <ThemeSwitcher />
                    </div>
                </div>
        </header>
    )
}