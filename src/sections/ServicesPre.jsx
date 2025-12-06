import React from 'react';

const ServicesPre = () => {
    return (
        <section id="services-pre" className="py-24 bg-brand-dark text-white">
            <div className="container mx-auto px-6">

                {/* Top Row: Character Evolution */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-center">
                    {/* Left: 2D Concept Art */}
                    <div className="bg-brand-gray p-4 rounded-lg border border-gray-800 h-80 flex items-center justify-center overflow-hidden">
                        <img
                            src="https://i.postimg.cc/xT826ZNP/page3-01.png"
                            alt="2D Concept Art"
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <div className="bg-brand-gray p-4 rounded-lg border border-gray-800 h-80 flex items-center justify-center overflow-hidden">
                        <img
                            src="https://i.postimg.cc/YC0xbB3h/page3-00.png"
                            alt="3D Wireframe"
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>


                    {/* Right: Text Block */}
                    <div className="flex flex-col justify-center h-full pl-4">
                        <h3 className="text-3xl font-bold mb-6 tracking-widest uppercase text-white border-l-4 border-white pl-4">
                            Services - Pre
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg pl-4">
                            We build the creative and visual foundation of every project. From initial sketches to detailed animatics, our pre-production process ensures that every character, environment, and story beat is meticulously planned before production begins.
                        </p>
                    </div>
                </div>

                {/* Bottom Row: Storyboarding */}
                <div className="w-full">
                    <h4 className="text-xl font-bold mb-6 tracking-wider text-gray-400">NARRATIVE PLANNING</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[{ id: 1, url: "https://i.postimg.cc/85ZYW14T/SEGUNDA-PAGINA-TERCER-MOMENTO-final.png" },
                        { id: 2, url: "https://i.postimg.cc/hv3HFSQp/01.png" },
                        { id: 3, url: "https://i.postimg.cc/L8j0DkDn/04Low.jpg" },].map((item) => (
                            <div key={item.id} className="aspect-video bg-brand-gray border border-gray-700 rounded overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                                <img
                                    src={item.url}
                                    alt={`Storyboard Panel ${item}`}
                                    className="w-full h-full object-cover sepia"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesPre;
