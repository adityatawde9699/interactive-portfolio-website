import { useState, useEffect, useRef, useCallback } from 'react';

interface UseImagePreloaderOptions {
    frameCount: number;
    folderPath: string;
    fileNamePrefix: string;
    fileExtension?: string;
}

interface UseImagePreloaderResult {
    images: HTMLImageElement[];
    isLoaded: boolean;
    progress: number;
    error: string | null;
}

/**
 * Custom hook for preloading a sequence of images.
 * Provides loading progress and error handling.
 * 
 * @param options - Configuration for image loading
 * @returns Object with images array, loading state, progress, and error
 */
export function useImagePreloader({
    frameCount,
    folderPath,
    fileNamePrefix,
    fileExtension = 'png',
}: UseImagePreloaderOptions): UseImagePreloaderResult {
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    const getImagePath = useCallback(
        (index: number) => {
            // Zero-pad the index (0001, 0010, 0100)
            const paddedIndex = String(index).padStart(4, '0');
            return `${folderPath}${fileNamePrefix}${paddedIndex}.${fileExtension}`;
        },
        [folderPath, fileNamePrefix, fileExtension]
    );

    useEffect(() => {
        let loadedCount = 0;
        let hasError = false;
        const images: HTMLImageElement[] = [];

        const loadImage = (index: number): Promise<void> => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = getImagePath(index);

                img.onload = () => {
                    loadedCount++;
                    setProgress(Math.floor((loadedCount / frameCount) * 100));
                    resolve();
                };

                img.onerror = () => {
                    if (!hasError) {
                        hasError = true;
                        setError(`Failed to load image at index ${index}`);
                    }
                    // Still continue with other images
                    loadedCount++;
                    setProgress(Math.floor((loadedCount / frameCount) * 100));
                    reject(new Error(`Failed to load: ${img.src}`));
                };

                images[index - 1] = img; // Store in 0-indexed array
            });
        };

        // Load all images in parallel batches
        const loadAllImages = async () => {
            const batchSize = 20; // Load 20 images at a time to avoid overwhelming the browser

            for (let i = 1; i <= frameCount; i += batchSize) {
                const batch: Promise<void>[] = [];

                for (let j = i; j < Math.min(i + batchSize, frameCount + 1); j++) {
                    batch.push(loadImage(j).catch(() => { })); // Catch to prevent Promise.all from failing
                }

                await Promise.all(batch);
            }

            imagesRef.current = images;
            setIsLoaded(true);
        };

        loadAllImages();

        // Cleanup function
        return () => {
            images.forEach((img) => {
                img.src = ''; // Cancel any pending loads
            });
        };
    }, [frameCount, getImagePath]);

    return {
        images: imagesRef.current,
        isLoaded,
        progress,
        error,
    };
}
