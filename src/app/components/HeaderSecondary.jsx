"use client";
import ThemeSwitcher from './ThemeSwitcher';

export default function HeaderSecondary() {
    return (
            <header className="px-6 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-20">
                                        
                    {/* Navigation */}
                    <nav className="flex items-center space-x-9 backdrop-blur-md px-8 py-3 rounded-full border"
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