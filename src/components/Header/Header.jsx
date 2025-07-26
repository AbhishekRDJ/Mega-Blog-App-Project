// components/Header.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logo, LogoutButton, Container } from "../index";
import { Menu, X } from "lucide-react";

export default function Header() {
    const authstatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/", protected: true },
        { name: "About", href: "/about" },
        { name: "Add-post", href: "/add-post", protected: true },
        { name: "All-posts", href: "/all-posts", protected: true },
        { name: "Signup", href: "/signup", protected: true },
    ];

    const visibleLinks = navLinks.filter(
        (link) => !link.protected || authstatus
    );

    const handleNavigation = (path) => {
        setIsOpen(false);       // Close mobile menu
        navigate(path.trim());  // Navigate
    };

    const NavLinks = ({ isMobile = false }) => (
        <div className={`space-${isMobile ? "y" : "x"}-${isMobile ? "2" : "6"} ${isMobile ? "flex flex-col" : "flex"}`}>
            {visibleLinks.map((link) => (
                <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className="font-medium text-gray-700 hover:text-blue-600 transition"
                >
                    {link.name}
                </button>
            ))}

            {authstatus && (
                <div className={isMobile ? "pt-2" : "pl-4"}>
                    <LogoutButton />
                </div>
            )}
        </div>
    );

    return (
        <header className="top-0 z-50 sticky bg-white shadow-sm w-full">

            <Container>
                <div className="flex justify-between items-center mx-auto px-4 py-3 max-w-7xl">
                    <Logo widthprops="200px" />

                    <nav className="hidden md:flex items-center">
                        <NavLinks />
                    </nav>

                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-white px-4 pb-4">
                        <NavLinks isMobile />
                    </div>
                )}
            </Container>
        </header>
    );
}
