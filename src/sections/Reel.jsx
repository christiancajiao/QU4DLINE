import React from 'react';
import LazyVideo from '../components/LazyVideo';

const Reel = () => {
    const videoId = "1147655572";
    const videoUrl = `https://vimeo.com/${videoId}`;
    const embedUrl = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0`;

    return (
        <section id="reel" className="w-full bg-black">
            {/* Video Container */}
            <div className="relative w-full h-screen md:h-auto md:aspect-video group cursor-pointer">
                {/* Click Overlay */}
                <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 w-full h-full"
                    aria-label="Watch full video on Vimeo"
                >
                </a>

                {/* Video Background */}
                <LazyVideo
                    src="https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/ReelNuevoStudio_06.mp4"
                    poster="https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/ReelStill.png"
                    alt="Q4Dline Reel"
                    className="absolute inset-0 w-full h-full"
                    objectFit="cover"
                />

                {/* Optional Overlay Gradient/Logo */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none z-10 transition-colors group-hover:bg-black/20"></div>
            </div>

            {/* Disclaimer Text */}
            <div className="container mx-auto px-6 py-8">
                <div className="bg-brand-gray border border-gray-700 p-8 rounded-lg flex flex-col items-center justify-center">
                    <p className="text-gray-300 text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center">
                        The selection of these shots is part of the personal reels of Juan José Vélez and Darshi Velasco, who have worked for various international studios and brands. Only the character animation featured here was created by our team.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Reel;
