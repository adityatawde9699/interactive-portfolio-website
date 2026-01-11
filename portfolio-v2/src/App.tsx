import SmoothScroll from './components/layout/SmoothScroll';
import Navbar from './components/layout/Navbar';
import ImageSequence from './components/canvas/ImageSequence';
import ScrollOverlay from './components/ui/ScrollOverlay';
import {
    HeroOverlay,
    AboutOverlay,
    ProjectsOverlay,
    ContactOverlay
} from './components/sections/OverlayContent';

/**
 * Main App component.
 * 
 * Scroll Timeline (based on 600vh = 100%):
 * - Hero:     0-15%  (frames 0-45)    - Introduction marquee
 * - About:    18-38% (frames 54-114)  - Skills & traits
 * - Projects: 42-62% (frames 126-186) - Work showcase
 * - Contact:  70-92% (frames 210-276) - Call to action
 * - Final:    92-100% (frames 276-300)- Last frames, scroll ends here
 * 
 * Text appears BEHIND the character (z-index lower than canvas)
 */
function App() {
    return (
        <SmoothScroll>
            <main className="w-full overflow-hidden">
                {/* Fixed Navigation - Semi-transparent */}
                <Navbar />

                {/* Canvas Animation with Overlay Sections */}
                {/* Text is rendered BEHIND the character */}
                <ImageSequence
                    frameCount={300}
                    folderPath="/frames/"
                    fileNamePrefix="male"
                    scrollHeight="600vh"
                >
                    {/* Hero Section - Start of scroll */}
                    <ScrollOverlay scrollPosition={0} duration={16}>
                        <HeroOverlay />
                    </ScrollOverlay>

                    {/* About Section - After hero fades */}
                    <ScrollOverlay scrollPosition={18} duration={20}>
                        <AboutOverlay />
                    </ScrollOverlay>

                    {/* Projects Section - Mid scroll */}
                    <ScrollOverlay scrollPosition={42} duration={20}>
                        <ProjectsOverlay />
                    </ScrollOverlay>

                    {/* Contact Section - Near end */}
                    <ScrollOverlay scrollPosition={70} duration={22}>
                        <ContactOverlay />
                    </ScrollOverlay>
                </ImageSequence>

                {/* No footer - scroll ends at last frame */}
            </main>
        </SmoothScroll>
    );
}

export default App;
