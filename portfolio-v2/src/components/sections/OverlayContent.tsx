/**
 * Hero overlay content - appears at the beginning of scroll
 * Matches original: marquee text at top, scroll prompt at bottom
 */
export function HeroOverlay() {
    return (
        <div className="w-full h-full relative">
            {/* Marquee text - positioned at top 30% like original */}
            <div className="absolute top-[30%] left-0 w-full overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[90px] font-normal text-white/90 px-4">
                        <b>ADITYA</b> TAWDE IS A <b><i>DRIVEN</i></b>{' '}
                        <span className="text-stroke text-white">DEVELOPER</span> IN THE{' '}
                        <span className="text-stroke text-white"><i>TECH INDUSTRY.</i></span>
                    </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[90px] font-normal text-white/90 px-4">
                        <b>ADITYA</b> TAWDE IS A <b><i>DRIVEN</i></b>{' '}
                        <span className="text-stroke text-white">DEVELOPER</span> IN THE{' '}
                        <span className="text-stroke text-white"><i>TECH INDUSTRY.</i></span>
                    </h1>
                </div>
            </div>

            {/* Scroll prompt - bottom center */}
            <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 text-center">
                <h3 className="text-white/60 text-xs sm:text-sm md:text-base mb-2 uppercase tracking-widest">
                    WELCOME TO MY PORTFOLIO. EXPLORE MY PROJECTS, SKILLS, AND MORE.
                </h3>
                <h4 className="text-white/40 text-xs md:text-sm animate-pulse">
                    ...SCROLL TO DISCOVER
                </h4>
            </div>
        </div>
    );
}

/**
 * About overlay content - appears around 18% scroll
 * Matches original: left side has "ABOUT ME", right side has skills
 * Text positioned at edges to frame the character in center
 */
export function AboutOverlay() {
    return (
        <div className="w-full h-full relative px-6 md:px-12 lg:px-20">
            {/* Left side - About Me (positioned top-left like original #right-text) */}
            <div className="absolute top-[28%] left-6 md:left-[8%] text-left max-w-sm md:max-w-md">
                <h3 className="text-white/50 text-xs md:text-sm uppercase tracking-[0.2em] mb-3 md:mb-4">
                    ABOUT ME
                </h3>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                    PASSIONATE
                    <br />
                    DEDICATED
                    <br />
                    INNOVATIVE
                </h1>
            </div>

            {/* Right side - Skills (positioned bottom-right like original #left-text) */}
            <div className="absolute top-[48%] md:top-[45%] right-6 md:right-[8%] text-right max-w-sm md:max-w-md">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                    SKILLED IN
                    <br />
                    PYTHON, HTML
                    <br />
                    JAVASCRIPT
                    <br />
                    JAVA
                </h1>
                <h3 className="text-white/50 text-xs md:text-sm uppercase tracking-[0.2em] mt-3 md:mt-4">
                    ...AND ALWAYS LEARNING
                </h3>
            </div>
        </div>
    );
}

/**
 * Projects overlay content - appears around 45% scroll
 * Matches original: left heading, right description
 */
export function ProjectsOverlay() {
    return (
        <div className="w-full h-full relative px-6 md:px-12 lg:px-20">
            {/* Left side - Main heading */}
            <div className="absolute top-[25%] md:top-[28%] left-6 md:left-[8%] text-left max-w-sm md:max-w-lg">
                <h3 className="text-white/50 text-xs md:text-sm uppercase tracking-[0.2em] mb-3 md:mb-4">
                    MY PROJECTS
                </h3>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
                    EXPLORE
                    <br />
                    MY WORK
                    <br />
                    AND
                    <br />
                    CREATIONS
                </h1>
            </div>

            {/* Right side - Description */}
            <div className="absolute top-[52%] md:top-[50%] right-6 md:right-[8%] text-right max-w-xs md:max-w-md">
                <p className="text-white/50 text-sm md:text-base lg:text-lg leading-relaxed">
                    FROM PYTHON GAMES TO WEB APPLICATIONS,
                    <br />
                    DISCOVER THE PROJECTS THAT SHOWCASE MY
                    <br />
                    SKILLS AND PASSION FOR DEVELOPMENT.
                </p>
                <button
                    onClick={() => window.open('https://aditya-s-tawde.onrender.com/projects', '_blank')}
                    className="relative z-20 mt-5 md:mt-6 px-6 md:px-8 py-2.5 md:py-3 border border-white/40 text-white text-sm md:text-base rounded-full font-medium
                               transition-all duration-300 hover:bg-white hover:text-black hover:border-white cursor-pointer"
                >
                    VIEW ALL PROJECTS
                </button>
            </div>
        </div>
    );
}

/**
 * Contact overlay content - appears around 72% scroll
 * Matches original: left description, right heading
 */
export function ContactOverlay() {
    return (
        <div className="w-full h-full relative px-6 md:px-12 lg:px-20">
            {/* Left side - Description and CTA */}
            <div className="absolute top-[32%] md:top-[35%] left-6 md:left-[6%] text-left max-w-xs md:max-w-sm">
                <p className="text-white/50 text-sm md:text-base lg:text-lg leading-relaxed">
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
                <button
                    onClick={() => window.open('https://aditya-s-tawde.onrender.com/contact', '_blank')}
                    className="relative z-20 mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 bg-white text-black text-sm md:text-base rounded-full font-semibold
                               transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 cursor-pointer"
                >
                    GET IN TOUCH
                </button>
            </div>

            {/* Right side - Main heading */}
            <div className="absolute top-[38%] md:top-[38%] right-6 md:right-[5%] text-right max-w-sm md:max-w-lg">
                <h3 className="text-white/50 text-xs md:text-sm uppercase tracking-[0.2em] mb-3 md:mb-4">
                    CONTACT ME
                </h3>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
                    LET'S
                    <br />
                    COLLABORATE
                    <br />
                    AND CREATE
                </h1>
            </div>
        </div>
    );
}
