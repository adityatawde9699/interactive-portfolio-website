import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Navbar component with fixed positioning and transparent background.
 * Text uses mix-blend-difference for visibility on all backgrounds.
 */
export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!navRef.current) return;

        // Animate nav opacity on scroll
        gsap.fromTo(
            navRef.current,
            { opacity: 0.6 },
            {
                opacity: 1,
                scrollTrigger: {
                    start: '100px top',
                    end: '200px top',
                    scrub: true,
                },
            }
        );
    }, []);

    const handlePortfolioClick = () => {
        window.open('https://aditya-s-tawde.onrender.com/', '_blank', 'noopener,noreferrer');
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 flex justify-between items-center bg-transparent"
        >
            <h3 className="font-semibold text-lg md:text-xl text-white mix-blend-difference">
                ADITYA S. TAWDE
            </h3>

            <button
                onClick={handlePortfolioClick}
                className="px-5 md:px-6 py-2 md:py-2.5 bg-white text-black text-sm md:text-base rounded-full font-medium
                           transition-all duration-300 hover:bg-gray-200 hover:scale-105"
                aria-label="View main portfolio"
            >
                PORTFOLIO
            </button>
        </nav>
    );
}
