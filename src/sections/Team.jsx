import React from 'react';
import { FaLinkedin, FaVimeo, FaArtstation, FaInstagram } from 'react-icons/fa';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Darshi Velasco',
            role: 'Darshi Velasco is a Colombian 3D animator with over seven years of experience crafting high-end content for international studios, global brands, and large-scale productions. His work spans projects for Disney+, Paramount, Discovery Kids, the Super Bowl, and immersive experiences such as Stranger Things VR Quest 3.',
            url: "https://i.postimg.cc/C1qbj0jV/Darshi-Profile.jpg",
            socials: [
                { icon: FaLinkedin, url: 'https://www.linkedin.com/in/darshi-velasco-mu%C3%B1oz-54007b45/' },
                { icon: FaVimeo, url: 'https://vimeo.com/user25869814?fl=pl&fe=by' }
            ]
        },
        {
            id: 2,
            name: 'John Astudillo',
            role: 'John Fredy Astudillo Moreno 3D Generalist and 2D Animator with over 10 years of professional experience. Credits include feature films, TV series and commercials. Passionate about audiovisual experimentation and creative challenges.',
            url: "https://i.postimg.cc/8zQLftkg/fred.jpg",
            socials: [
                { icon: FaArtstation, url: 'https://www.artstation.com/johnastudillo' },
                { icon: FaInstagram, url: 'https://www.instagram.com/jfam_vii/' }
            ]
        },
        {
            id: 3,
            name: 'Juan José Vélez',
            role: 'Juan José Vélez, from Colombia, with more than 6 years of experience as a 3D Character Animator. He has worked on films, series, and short films, and has collaborated with major brands and streaming platforms such as Supercell, Nickelodeon, the Super Bowl, Paramount Plus, Señal Colombia, Disney Plus, and PopCap Games.',
            url: "https://i.postimg.cc/bvmWMKVT/Juan-Jo.png",
            socials: [
                { icon: FaLinkedin, url: 'https://www.linkedin.com/in/juan-jos%C3%A9-v%C3%A9lez-castrill%C3%B3n-86124315b/' },
                { icon: FaVimeo, url: 'https://vimeo.com/1104632499?fl=pl&fe=sh' }
            ]
        },
        {
            id: 4,
            name: 'Dan',
            role: 'Daniel Velasco is a Colombian illustrator and graphic designer with over 12 years of experience,creating, composing, and designing posters, comics, and advertising across various graphic fields, including video games, theater, festivals, and 2D animation.',
            url: "https://i.postimg.cc/qqGWVX6z/DAN.png",
            socials: [
                { icon: FaArtstation, url: 'https://www.artstation.com/juandanielvelasco4' },
                { icon: FaInstagram, url: 'https://www.instagram.com/dan.inquieto/' }
            ]
        },
    ];

    return (
        <section id="team" className="py-24 bg-brand-black text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-widest uppercase">
                    TEAM
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="group">
                            <div className="aspect-[3/4] bg-brand-gray rounded-lg overflow-hidden mb-6 relative border border-gray-800 group-hover:border-white/30 transition-all duration-300">
                                <img
                                    src={member.url}
                                    alt={member.name}
                                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {member.socials && member.socials.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-brand-green transform hover:scale-110 transition-all duration-300"
                                        >
                                            <social.icon size={24} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold tracking-wide mb-1">{member.name}</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
