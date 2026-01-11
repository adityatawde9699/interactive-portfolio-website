import { useRef, useEffect, useCallback, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import LoadingScreen from '../ui/LoadingScreen';

gsap.registerPlugin(ScrollTrigger);

interface ImageSequenceProps {
    frameCount: number;
    folderPath: string;
    fileNamePrefix: string;
    scrollHeight?: string;
    children?: ReactNode;
}

/**
 * Canvas-based image sequence animator with scroll-triggered playback.
 * Canvas is rendered with z-index: 10 so character appears IN FRONT of overlay text.
 * Overlay text (children) appears BEHIND the character.
 */
export default function ImageSequence({
    frameCount,
    folderPath,
    fileNamePrefix,
    scrollHeight = '600vh',
    children,
}: ImageSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const currentFrameRef = useRef(0);

    const { images, isLoaded, progress } = useImagePreloader({
        frameCount,
        folderPath,
        fileNamePrefix,
    });

    const renderFrame = useCallback(
        (frameIndex: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const context = canvas.getContext('2d');
            if (!context) return;

            const img = images[frameIndex];
            if (!img || !img.complete) return;

            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);

            const centerX = (canvas.width - img.width * ratio) / 2;
            const centerY = (canvas.height - img.height * ratio) / 2;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(
                img, 0, 0, img.width, img.height,
                centerX, centerY, img.width * ratio, img.height * ratio
            );

            currentFrameRef.current = frameIndex;
        },
        [images]
    );

    const updateCanvasSize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderFrame(currentFrameRef.current);
    }, [renderFrame]);

    useGSAP(
        () => {
            if (!isLoaded || !canvasRef.current || !containerRef.current) return;

            const canvas = canvasRef.current;
            updateCanvasSize();

            const frameSeq = { frame: 0 };

            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.15,
                    pin: canvas,
                    anticipatePin: 1,
                },
            }).to(frameSeq, {
                frame: frameCount - 1,
                snap: 'frame',
                ease: 'none',
                onUpdate: () => renderFrame(Math.round(frameSeq.frame)),
            });

            renderFrame(0);

            window.addEventListener('resize', updateCanvasSize);
            return () => window.removeEventListener('resize', updateCanvasSize);
        },
        { dependencies: [isLoaded, frameCount, renderFrame, updateCanvasSize] }
    );

    useEffect(() => {
        updateCanvasSize();
    }, [updateCanvasSize]);

    return (
        <div
            ref={containerRef}
            className="relative w-full bg-primary-950"
            style={{ height: scrollHeight }}
        >
            {!isLoaded && <LoadingScreen progress={progress} />}

            {/* Overlay content - BEHIND the canvas (z-index: 5 via ScrollOverlay) */}
            {children}

            {/* Canvas - IN FRONT of overlay text (z-index: 10) but pointer-events-none for click-through */}
            <canvas
                ref={canvasRef}
                className="block w-full h-screen object-cover z-10 pointer-events-none"
                style={{ position: 'relative', zIndex: 10 }}
                aria-hidden="true"
            />
        </div>
    );
}
