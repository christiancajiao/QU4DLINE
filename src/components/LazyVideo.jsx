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
            {
                rootMargin: '200px', // Start loading when 200px away from viewport
                threshold: 0
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    const handleVideoLoaded = () => {
        setIsLoaded(true);
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
    };

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {/* Still Image (Placeholder) */}
            {poster && (
                <img
                    src={poster}
                    alt={alt}
                    style={{ objectFit }}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
                />
            )}

            {/* Video */}
            {shouldLoad && (
                <video
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ objectFit }}
                    muted
                    loop
                    playsInline
                    onLoadedData={handleVideoLoaded}
                    poster={poster} // Native poster as backup
                >
                    <source src={src} type={type} />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default LazyVideo;
