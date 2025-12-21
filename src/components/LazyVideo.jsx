import React, { useRef, useState, useEffect } from 'react';

const LazyVideo = ({
    src,
    poster,
    className = "",
    alt = "Video content",
    type = "video/mp4",
    objectFit = "contain"
}) => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px', threshold: 0 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // SOLUCIÓN PARA iOS: Asegurar el muteo por software antes de intentar el play
    useEffect(() => {
        if (shouldLoad && videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
        }
    }, [shouldLoad]);

    const handleVideoLoaded = () => {
        setIsLoaded(true);
        if (videoRef.current) {
            // Intentar reproducir con un pequeño delay o asegurar que la promesa se maneje
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay prevented on iOS:", error);
                });
            }
        }
    };

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {poster && (
                <img
                    src={poster}
                    alt={alt}
                    style={{ objectFit }}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
                />
            )}

            {shouldLoad && (
                <video
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ objectFit }}
                    autoPlay // 1. Cambiado a camelCase
                    muted // 2. Mantener para SSR
                    loop
                    playsInline // 3. Crítico para iOS
                    onLoadedData={handleVideoLoaded}
                    poster={poster}
                    preload="auto"
                >
                    <source src={src} type={type} />
                </video>
            )}
        </div>
    );
};

export default LazyVideo;
