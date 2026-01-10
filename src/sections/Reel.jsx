import React, { useState, useEffect } from 'react';
import { FaVimeoV, FaYoutube } from "react-icons/fa";
import LazyVideo from '../components/LazyVideo';

const Reel = () => {
    const videoId = "1147655572";
    const videoUrl = `https://vimeo.com/${videoId}`;
    const embedUrl = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0`;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const videoSrc = isMobile
        ? "https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/Reenuevostudiol%2B09%20Vertical_.mp4"
        : "https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/ReelNuevoStudio_07.mp4";

    const posterSrc = isMobile
        ? "https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/reelStillVertical.png"
        : "https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/ReelStill.png";

    return (
        <section id="reel" className="w-full bg-black">
            {/* Video Container */}
            <div className="relative w-full h-screen md:h-auto md:aspect-video group">
                {/* Video Background */}
                <LazyVideo
                    key={isMobile ? 'mobile' : 'desktop'}
                    src={videoSrc}
                    poster={posterSrc}
                    alt="Q4Dline Reel"
                    className="absolute inset-0 w-full h-full"
                    objectFit={isMobile ? "contain" : "cover"}
                />

                {/* Optional Overlay Gradient/Logo */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none z-10 transition-colors group-hover:bg-black/20"></div>
            </div>

            {/* Disclaimer Text */}
            <div className="container mx-auto px-6 py-8">
                <div className="bg-brand-gray border border-gray-700 p-8 rounded-lg flex flex-col items-center justify-center">
                    <p className="text-gray-300 text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mb-6">
                        The selection of these shots is part of the personal reels of Juan José Vélez and Darshi Velasco, who have worked for various international studios and brands. Only the character animation featured here was created by our team.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-6">
                        <a
                            href="https://vimeo.com/1152381156?share=copy&fl=sv&fe=ci"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#1AB7EA] transition-colors duration-300"
                            aria-label="Watch on Vimeo"
                        >
                            <FaVimeoV size={24} />
                        </a>
                        <a
                            href="https://youtu.be/6owOvr98-eA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#FF0000] transition-colors duration-300"
                            aria-label="Watch on YouTube"
                        >
                            <FaYoutube size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reel;
