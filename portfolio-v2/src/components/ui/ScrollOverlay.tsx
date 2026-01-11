import { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollOverlayProps {
    children: ReactNode;
    /** Position as percentage of scroll (0-100) */
    scrollPosition: number;
    /** Duration as percentage of scroll */
    duration?: number;
    /** Additional CSS classes */
    className?: string;
}

/**
 * Smooth scroll-positioned overlay with parallax-like animations.
 * Content appears BEHIND the character (z-index: 5, canvas is z-index: 10)
 */
export default function ScrollOverlay({
    children,
    scrollPosition,
    duration = 18,
    className = '',
}: ScrollOverlayProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!overlayRef.current) return;

        const element = overlayRef.current;

        // Set initial state - invisible and below
        gsap.set(element, {
            opacity: 0,
            y: 100,
            scale: 0.98,
        });

        // Create smooth timeline animation tied to scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: `${scrollPosition}% top`,
                end: `${scrollPosition + duration}% top`,
                scrub: 0.8,
            },
        });

        // Fade in phase (first 30% of duration)
        tl.to(element, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
        })
            // Hold phase (middle 40%)
            .to(element, {
                opacity: 1,
                y: 0,
                duration: 0.4,
            })
            // Fade out phase (last 30%)
            .to(element, {
                opacity: 0,
                y: -80,
                scale: 0.98,
                duration: 0.3,
                ease: 'power2.in',
            });

    }, [scrollPosition, duration]);

    return (
        <div
            ref={overlayRef}
            className={`fixed inset-0 z-[5] pointer-events-none ${className}`}
        >
            <div className="w-full h-full flex items-center justify-center pointer-events-auto">
                {children}
            </div>
        </div>
    );
}
