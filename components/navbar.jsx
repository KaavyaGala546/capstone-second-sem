"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
    const [hoveredNav, setHoveredNav] = useState(null);
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "#services" },
        { name: "Properties", href: "#properties" },
        { name: "About", href: "#about" },
        { name: "Agents", href: "#agent" },
    ];

    return (
        <nav className="flex items-center justify-between py-3 px-8 md:px-12 lg:px-16">
            {/* Logo */}
            <Link href="/" className="logo flex items-center cursor-pointer">
                <div className="mr-2">
                    <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 22V12H15V22"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <h1 className="text-xl font-bold">ESTATES</h1>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={`text-sm font-medium ${hoveredNav === index ? "text-black" : "text-gray-500"
                            } hover:text-black transition-colors`}
                        onMouseEnter={() => setHoveredNav(index)}
                        onMouseLeave={() => setHoveredNav(null)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Contact Us Button */}
            <button className="flex items-center bg-black text-white px-6 py-3 rounded-full text-sm">
                <span className="mr-2 flex items-center">
                    <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                    Contact Us Now
                </span>
                <ArrowRight className="w-4 h-4" />
            </button>
        </nav>
    );
};

export default Navbar;
