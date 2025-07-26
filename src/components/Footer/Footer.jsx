import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

function Footer() {
    return (
        <footer className="z-100 bg-gray-900 mt-auto px-4 py-12 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="mb-4 font-bold text-xl">My Blog</h3>
                        <p className="mb-4 text-gray-300">
                            Sharing thoughts, insights, and stories about technology, life, and everything in between.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://x.com/AbhishekRDJ" className="text-gray-300 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="https://github.com/AbhishekRDJ" className="text-gray-300 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="http://linkedin.com/in/abhishek-sangule-07b202319/" className="text-gray-300 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:abhisheksangule6@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 font-semibold text-lg">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                            <li><a href="/login" className="text-gray-300 hover:text-white transition-colors">Login</a></li>
                            <li><a href="/all-posts" className="text-gray-300 hover:text-white transition-colors">All Posts</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-semibold text-lg">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Technology</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lifestyle</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Food</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center mt-8 pt-8 border-gray-700 border-t">
                    <p className="mb-4 md:mb-0 text-gray-300 text-sm">
                        © 2025 My Blog. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
