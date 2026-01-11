interface LoadingScreenProps {
    progress: number;
}

/**
 * Loading screen component shown while images are being preloaded.
 * Displays a progress bar and percentage.
 */
export default function LoadingScreen({ progress }: LoadingScreenProps) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-950">
            <div className="text-center">
                {/* Logo or title */}
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-8">
                    ADITYA S. TAWDE
                </h1>

                {/* Progress bar container */}
                <div className="w-64 md:w-80 h-1 bg-primary-800 rounded-full overflow-hidden mb-4">
                    <div
                        className="h-full bg-white rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Loading text */}
                <div className="flex items-center justify-center gap-2 text-primary-400">
                    <span className="text-sm">Loading 3D Assets</span>
                    <span className="text-sm font-mono">{progress}%</span>
                </div>

                {/* Animated dots */}
                <div className="flex justify-center gap-1 mt-4">
                    <span className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
            </div>
        </div>
    );
}
