import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Contact section component (replaces original page3).
 * Final call-to-action section with collaboration invite.
 */
export default function Contact() {
    const containerRef = useRef<HTMLElement>(null);
    const leftContentRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);

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

        // Animate left content
        if (leftContentRef.current) {
            gsap.from(leftContentRef.current, {
                x: -100,
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

        // Animate right content
        if (rightContentRef.current) {
            gsap.from(rightContentRef.current, {
                x: 100,
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

    const handleContactClick = () => {
        window.open('https://aditya-s-tawde.onrender.com/', '_blank', 'noopener,noreferrer');
    };

    return (
        <section
            ref={containerRef}
            id="contact"
            className="relative h-screen w-full bg-gradient-to-br from-primary-900 to-primary-950 overflow-hidden"
        >
            {/* Left content - Description */}
            <div
                ref={leftContentRef}
                className="absolute top-[30%] md:top-[35%] left-6 md:left-[8%] max-w-md"
            >
                <p className="text-primary-400 text-sm md:text-base leading-relaxed">
                    VISIT MY WEBSITE TO EXPLORE MY WORKS
                    <br />
                    AND CONNECT WITH
                    <br />
                    ME FOR POTENTIAL COLLABORATIONS.
                    <br />
                    LET'S CREATE SOMETHING
                    <br />
                    AMAZING TOGETHER!
                </p>

                {/* Contact CTA */}
                <button
                    onClick={handleContactClick}
                    className="mt-8 px-8 py-4 bg-white text-primary-900 rounded-full font-semibold
                     transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20"
                >
                    GET IN TOUCH
                </button>
            </div>

            {/* Right content - Heading */}
            <div
                ref={rightContentRef}
                className="absolute top-[35%] md:top-[40%] right-6 md:right-[5%] text-right max-w-lg"
            >
                <h3 className="text-primary-500 text-sm uppercase tracking-widest mb-4">
                    CONTACT ME
                </h3>
                <h1 className="heading-xl text-white">
                    LET'S
                    <br />
                    COLLABORATE
                    <br />
                    AND CREATE
                </h1>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-8 left-0 w-full px-6 md:px-8 flex justify-between items-center text-primary-500 text-xs md:text-sm">
                <span>© 2024 Aditya S. Tawde</span>
                <span>Built with React + TypeScript</span>
            </footer>

            {/* Decorative gradient orbs */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
