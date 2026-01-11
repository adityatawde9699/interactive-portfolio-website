import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Projects section component (replaces original page2).
 * Showcases work with scroll-triggered animations.
 */
export default function Projects() {
    const containerRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);

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

        // Animate heading
        if (headingRef.current) {
            gsap.from(headingRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'top 40%',
                    scrub: 1,
                },
            });
        }

        // Animate description
        if (descriptionRef.current) {
            gsap.from(descriptionRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'top 30%',
                    scrub: 1,
                },
            });
        }
    }, []);

    return (
        <section
            ref={containerRef}
            id="projects"
            className="relative h-screen w-full bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden"
        >
            {/* Main heading */}
            <div
                ref={headingRef}
                className="absolute top-[25%] md:top-[30%] left-6 md:left-[10%] max-w-lg"
            >
                <h3 className="subtitle mb-4">MY PROJECTS</h3>
                <h1 className="heading-xl text-primary-900">
                    EXPLORE
                    <br />
                    MY WORK
                    <br />
                    AND
                    <br />
                    CREATIONS
                </h1>
            </div>

            {/* Description */}
            <div
                ref={descriptionRef}
                className="absolute top-[50%] md:top-[55%] right-6 md:right-[10%] text-right max-w-md"
            >
                <p className="text-primary-600 text-base md:text-lg leading-relaxed">
                    FROM PYTHON GAMES TO WEB APPLICATIONS,
                    <br />
                    DISCOVER THE PROJECTS THAT SHOWCASE MY
                    <br />
                    SKILLS AND PASSION FOR DEVELOPMENT.
                </p>

                {/* CTA Button */}
                <button className="btn-secondary mt-8">
                    VIEW ALL PROJECTS
                </button>
            </div>

            {/* Decorative grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-1/4 left-0 w-full h-px bg-primary-900" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-primary-900" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-primary-900" />
                <div className="absolute top-0 left-1/4 w-px h-full bg-primary-900" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-primary-900" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-primary-900" />
            </div>
        </section>
    );
}
