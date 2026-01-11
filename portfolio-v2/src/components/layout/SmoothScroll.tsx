import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

interface SmoothScrollProps {
    children: ReactNode;
}

/**
 * SmoothScroll wrapper component using Lenis for buttery-smooth scrolling.
 * Replaces the deprecated Locomotive Scroll from the original implementation.
 * 
 * @param children - Child components to be wrapped with smooth scroll
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.5,
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
            }}
        >
            {children}
        </ReactLenis>
    );
}
