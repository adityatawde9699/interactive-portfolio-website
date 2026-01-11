import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * About section component (replaces original page1).
 * Features pinned scrolling and skill showcase.
 */
export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const rightTextRef = useRef<HTMLDivElement>(null);
    const leftTextRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Pin the section during scroll
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
        });

        // Animate text elements
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 1,
            },
        });

        if (rightTextRef.current) {
            tl.from(rightTextRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
            }, 0);
        }

        if (leftTextRef.current) {
            tl.from(leftTextRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
            }, 0.2);
        }
    }, []);

    return (
        <section
            ref={containerRef}
            id="about"
            className="relative h-screen w-full bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden"
        >
            {/* Right side content - About Me */}
            <div
                ref={rightTextRef}
                className="absolute top-[25%] md:top-[30%] left-6 md:left-[10%] max-w-md"
            >
                <h3 className="subtitle mb-4">ABOUT ME</h3>
                <h1 className="heading-lg text-primary-900">
                    PASSIONATE
                    <br />
                    DEDICATED
                    <br />
                    INNOVATIVE
                </h1>
            </div>

            {/* Left side content - Skills */}
            <div
                ref={leftTextRef}
                className="absolute top-[50%] md:top-[50%] right-6 md:right-[10%] text-right max-w-md"
            >
                <h1 className="heading-lg text-primary-900">
                    SKILLED IN
                    <br />
                    PYTHON, HTML
                    <br />
                    JAVASCRIPT
                    <br />
                    JAVA
                </h1>
                <h3 className="subtitle mt-4">...AND ALWAYS LEARNING</h3>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    );
}
