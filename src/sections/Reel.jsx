import React from 'react';

const Reel = () => {
    const videoId = "dUeJa52r-s0";
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?si=IaGasuVckO3EIetT&autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`;

    return (
        <section id="reel" className="relative w-full h-auto aspect-video bg-black group cursor-pointer">
            {/* Click Overlay */}
            <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 w-full h-full"
                aria-label="Watch full video on YouTube"
            >
            </a>

            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <iframe
                    src={embedUrl}
                    title="Q4Dline Reel"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full object-cover"
                ></iframe>
            </div>

            {/* Optional Overlay Gradient/Logo if desired, keeping it clean for now as per "just put a video" */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none z-10 transition-colors group-hover:bg-black/20"></div>
        </section>
    );
};

export default Reel;
