import React from 'react';
import LazyVideo from '../components/LazyVideo';

const ServicesFX = () => {
    const videos = [
        {
            src: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/Dan1.mp4',
            poster: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/stillDan1.png',
            title: 'Services FX Video 1'
        },
        {
            src: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/PUBLI%20B1.mp4',
            poster: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/stillPubli.png',
            title: 'Services FX Video 2'
        },
        {
            src: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/TOREM%203.mp4',
            poster: 'https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/stillTorem.png',
            title: 'Services FX Video 3'
        }
    ];

    return (
        <section className="bg-brand-dark relative py-12 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:min-h-[80vh] w-full">

                    {/* 1. Description Card */}
                    <div className="bg-brand-gray border border-gray-700 p-8 flex flex-col justify-center rounded-lg
                        md:col-span-3 md:order-last
                        lg:col-span-1 lg:order-first lg:row-span-1">
                        <h3 className="text-3xl font-bold mb-6 tracking-widest uppercase text-white">
                            Services - 2D FX
                        </h3>
                        <div className="w-12 h-1 bg-white mb-8"></div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            We create 2D effects animation that enhances visual storytelling and emotional impact.
                            From stylized effects to dynamic graphic elements, our 2D FX integrate seamlessly
                            with animation and design to strengthen rhythm, atmosphere, and visual clarity.
                        </p>
                    </div>

                    {/* 2. Standard Video (Video 1) */}
                    <div className="relative w-full aspect-video md:aspect-[9/16] lg:aspect-video overflow-hidden rounded-lg border border-gray-800 group
                        md:col-span-1
                        lg:col-span-1 lg:row-start-2">
                        <LazyVideo
                            src={videos[0].src}
                            poster={videos[0].poster}
                            alt={videos[0].title}
                            className="absolute inset-0 w-full h-full"
                            objectFit="cover"
                        />
                    </div>

                    {/* 3. Short 1 (Video 2) */}
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 group
                        md:col-span-1
                        lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-1">
                        <LazyVideo
                            src={videos[1].src}
                            poster={videos[1].poster}
                            alt={videos[1].title}
                            className="absolute inset-0 w-full h-full"
                        />
                    </div>

                    {/* 4. Short 2 (Video 3) */}
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 group
                        md:col-span-1
                        lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
                        <LazyVideo
                            src={videos[2].src}
                            poster={videos[2].poster}
                            alt={videos[2].title}
                            className="absolute inset-0 w-full h-full"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesFX;
