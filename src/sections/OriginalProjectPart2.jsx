import React from 'react';
import LazyVideo from '../components/LazyVideo';

const OriginalProjectPart2 = () => {
    const videos = [
        {
            src: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/walkcycle.mp4',
            poster: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/stillWalkcycle2.png',
            title: 'Kheper Walk Cycle'
        },
        {
            src: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/Kheper360_030001-0250.mp4',
            poster: "https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/stillKheperAround.png",
            title: 'Kheper 360 Turn'
        }
    ];

    const images = [
        'https://i.postimg.cc/L5k6pQMn/model-Kheper01Edit.png',
        'https://i.postimg.cc/6pb6tGFd/model-Kheper02wedit.png',
        'https://i.postimg.cc/yYV7RPH3/model-Kheper03w-Edit.png'
    ];

    return (
        <section id="original-project-part2" className="py-24 bg-brand-dark text-white border-t border-gray-800">
            <div className="container mx-auto px-6">

                <h3 className="text-2xl font-bold mb-12 tracking-widest uppercase text-gray-400">
                    Character & Motion Study
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* 1. Image 1 (Left) */}
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 bg-black group">
                        <img
                            src={images[0]}
                            alt="Kheper Model Edit 1"
                            className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* 2. Split Column (Center-Left) */}
                    <div className="flex flex-col gap-6 h-full aspect-[9/16] md:aspect-auto">
                        {/* Top Image */}
                        <div className="overflow-hidden rounded-lg border border-gray-800 group flex-1 relative bg-black">
                            <img
                                src={images[1]}
                                alt="Kheper Model Edit 2"
                                className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        {/* Bottom Image */}
                        <div className="overflow-hidden rounded-lg border border-gray-800 group flex-1 relative bg-black">
                            <img
                                src={images[2]}
                                alt="Kheper Model Edit 3"
                                className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* 3. Video 2 (Center-Right) - Middle Video (Turn) */}
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 bg-black group">
                        <div className="absolute inset-0 z-20 bg-transparent"></div>
                        <LazyVideo
                            src={videos[1].src}
                            poster={videos[1].poster}
                            alt={videos[1].title}
                            className="absolute inset-0 w-full h-full"
                            objectFit="cover"
                        />
                    </div>

                    {/* 4. Video 1 (Right) - Walk Cycle */}
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 bg-black group">
                        <div className="absolute inset-0 z-20 bg-transparent"></div>
                        <LazyVideo
                            src={videos[0].src}
                            poster={videos[0].poster}
                            alt={videos[0].title}
                            className="absolute inset-0 w-full h-full"
                            objectFit="cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default OriginalProjectPart2;
