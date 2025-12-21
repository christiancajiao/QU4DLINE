import React from 'react';
import LazyVideo from '../components/LazyVideo';

const ServicesPost = () => {
    return (
        <section id="services-post" className="py-24 bg-brand-black text-white">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 h-auto bg-brand-black">

                    {/* 1. Description Card (Top Left) */}
                    <div className="bg-brand-gray border border-gray-700 p-8 flex flex-col justify-center rounded-lg">
                        <h3 className="text-3xl font-bold mb-6 tracking-widest uppercase text-white">
                            Services - Post
                        </h3>
                        <div className="w-12 h-1 bg-white mb-8"></div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            We polish the final piece to perfection. Our post-production pipeline handles everything from advanced grooming and simulation to lighting, compositing, and visual effects. We ensure that every frame meets the highest standards of visual fidelity and artistic intent.
                        </p>
                    </div>

                    {/* 2. Wireframe Scene (Top Center) */}
                    <div className="bg-brand-dark rounded-lg overflow-hidden border border-gray-800 relative group h-64 lg:h-auto">
                        <LazyVideo
                            src="https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/Compo%20Breakdown%2002small.mp4"
                            poster="https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/stillCompo.png"
                            alt="Wireframe Pass"
                            className="absolute inset-0 w-full h-full"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-xs rounded text-white z-10">Wireframe Pass</div>
                    </div>

                    {/* 3. Final Render (Right Column - Spans 2 Rows) */}
                    <div className="lg:col-span-1 lg:row-span-2 rounded-lg overflow-hidden border border-gray-800 relative group h-96 lg:h-auto">
                        <img
                            src="https://i.postimg.cc/zfQbfQHm/john-astudillo-pelo.jpg"
                            alt="Final High-Quality Render"
                            className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                            <span className="text-white font-bold tracking-wider">FINAL RENDER</span>
                        </div>
                    </div>

                    {/* 4. Grooming/Tech (Bottom Left - Spans 2 Columns) */}
                    <div className="lg:col-span-2 rounded-lg overflow-hidden border border-gray-800 relative group h-64 lg:h-auto">
                        <img
                            src="https://i.postimg.cc/8PgvWxKs/john-astudillo-xgen-pasos.jpg"
                            alt="Grooming Simulation"
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-xs rounded text-white">XGen / Grooming</div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ServicesPost;
