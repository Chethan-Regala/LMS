"use client";

import React from 'react';
import Image from 'next/image';
import TechWing from '../public/Techwing Logo.png'
import { useRouter } from 'next/navigation';
interface FooterProps {
    links?: { label: string; href: string }[];
    copyright?: string;
}

const Footer: React.FC<FooterProps> = ({
    links = [
        { label: "Privacy", href: "#" },
        { label: "Safety", href: "#" },
        { label: "Help", href: "#" }
    ],

}) => {
    const router = useRouter();
    return (
        <footer className="mt-20 pt-12 border-t border-[#E5E2D9] flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex gap-8">
                {links.map((link, index) => (
                    <button
                        key={index}
                        className="text-[11px] font-bold text-[#888] uppercase hover:text-[#121212] transition-colors"
                    >
                        {link.label}
                    </button>
                ))}
            </div>

            <Image
                src={TechWing}
                alt="Techwing Logo"
                className='h-8 w-auto   hover:cursor-pointer transition-all duration-300'
                onClick={() => router.push("https://techwing.org/")}
            />
        </footer>
    );
};

export default Footer;
