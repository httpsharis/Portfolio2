import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContextUtils';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
// Note: Using 'react-router' imports as requested. 
// If specific dom exports are needed, we might fallback to standard anchors for hash links.

/**
 * Navbar component with responsive mobile menu and dark mode toggle.
 */
export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === '/';

    const scrollToSection = (id) => {
        if (!isHome) {
            // If not on home, we might need to navigate first, but for now simple structure
            navigate(`/#${id}`);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: 'Work', id: 'work' },
        { name: 'Stack', id: 'stack' },
        { name: 'Experience', id: 'experience' },
        { name: 'Education', id: 'education' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="font-bold text-xl tracking-tight hover:opacity-70 transition-opacity">
                    MH.
                </Link>

                <div className="flex items-center gap-6 text-sm font-medium">
                    {/* Mobile Menu Button */}
                    <button
                        className="sm:hidden p-1"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Links */}
                    <div className="hidden sm:flex gap-6 items-center">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="hover:text-neutral-500 transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 p-4">
                    <div className="flex flex-col gap-4 text-center">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="block py-2 hover:text-neutral-500 transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
