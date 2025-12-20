import React from 'react';
import LazyVideo from '../components/LazyVideo';

const OriginalProjectPart3 = () => {
    const videos = [
        {
            src: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/progressShot010.mp4',
            poster: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/stillKheperCompo.png',
            title: 'Kheper Vertical Progress'
        },
        {
            src: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/Animation%20pass%2001.mp4',
            poster: undefined, // No still provided
            title: 'Kheper Horizontal Animation Pass'
        }
    ];

    return (
        <section id="original-project-part3" className="py-24 bg-brand-dark text-white border-t border-gray-800">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">

                    {/* Video 1: Vertical */}
                    <div className="relative w-full max-w-sm mx-auto aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 bg-black group">
                        <div className="absolute inset-0 z-20 bg-transparent"></div>
                        <LazyVideo
                            src={videos[0].src}
                            poster={videos[0].poster}
                            alt={videos[0].title}
                            className="absolute inset-0 w-full h-full"
                            objectFit="contain"
                        />
                    </div>

                    {/* Video 2: Horizontal */}
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-gray-800 bg-black group">
                        <div className="absolute inset-0 z-20 bg-transparent"></div>
                        <LazyVideo
                            src={videos[1].src}
                            poster={videos[1].poster}
                            alt={videos[1].title}
                            className="absolute inset-0 w-full h-full"
                            objectFit="contain"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default OriginalProjectPart3;
