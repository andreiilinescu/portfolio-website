"use client";
import ThemeSwitcher from './ThemeSwitcher';

export default function HeaderSecondary() {
    return (
            <header>
                <div className="flex items-center justify-between h-20">
                                        
                    {/* Navigation */}
                    <nav className="flex items-center space-x-4 sm:space-x-6  md:space-x-12 backdrop-blur-md md:px-8 mx-3 sm:px-6 px-4 md:py-3 py-2 rounded-full border"
                         style={{
                             backgroundColor: 'var(--nav-bg)',
                             borderColor: 'var(--border-color)'
                         }}>
                        <a href="/" className="nav-link">About</a>
                        <a href="/projects" className="nav-link">Projects</a>
                        <a href="/writing" className="nav-link">Writing</a>
                    </nav>

                    <div className="flex items-center scale-125 transition-transform duration-200 hover:scale-160 pr-3">
                        <ThemeSwitcher />
                    </div>
                </div>
        </header>
    )
}