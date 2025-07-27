import React from 'react';
import { User, Mail, MapPin, Calendar, Heart, Coffee, Code, Pen, Backpack, SkipBack, ArrowBigLeft, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate()
    return (
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
            <div className="mx-auto px-6 py-12 max-w-4xl">
                {/* Header Section */}
                <button onClick={() => navigate(-1)} className='flex gap-1.5 w-fit'>
                    <ArrowLeft />
                    <p>Back</p>
                </button>
                <div className="mb-16 text-center">
                    <div className="inline-block relative mb-6">
                        <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl mx-auto rounded-full w-32 h-32">
                            <User className="w-16 h-16 text-white" />
                        </div>
                        <div className="-right-2 -bottom-2 absolute flex justify-center items-center bg-green-400 shadow-lg rounded-full w-12 h-12">
                            <Heart className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <h1 className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 font-bold text-gray-800 text-transparent text-5xl">
                        About Me
                    </h1>
                    <p className="mx-auto max-w-2xl text-gray-600 text-xl leading-relaxed">
                        Welcome to my corner of the internet! I'm passionate about sharing ideas,
                        experiences, and insights through the art of writing.
                    </p>
                </div>

                {/* Main Content */}
                <div className="gap-12 grid md:grid-cols-2 mb-16">
                    {/* Story Section */}
                    <div className="bg-white shadow-xl hover:shadow-2xl p-8 rounded-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                            <Pen className="mr-3 w-8 h-8 text-blue-500" />
                            <h2 className="font-bold text-gray-800 text-3xl">My Story</h2>
                        </div>
                        <p className="mb-6 text-gray-600 leading-relaxed">
                            I started this blog as a way to document my journey and share the lessons
                            I've learned along the way. What began as a personal project has grown into
                            a platform where I explore topics that fascinate me and hopefully inspire others.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Writing has always been my way of processing the world around me. Through this
                            blog, I aim to create content that's both thoughtful and accessible, covering
                            everything from technology and creativity to personal growth and life experiences.
                        </p>
                    </div>

                    {/* What I Do Section */}
                    <div className="bg-white shadow-xl hover:shadow-2xl p-8 rounded-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                            <Code className="mr-3 w-8 h-8 text-purple-500" />
                            <h2 className="font-bold text-gray-800 text-3xl">What I Do</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-blue-500 mt-2 mr-3 rounded-full w-2 h-2"></div>
                                <p className="text-gray-600">Write in-depth articles about technology and innovation</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-purple-500 mt-2 mr-3 rounded-full w-2 h-2"></div>
                                <p className="text-gray-600">Share personal experiences and life lessons</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-green-500 mt-2 mr-3 rounded-full w-2 h-2"></div>
                                <p className="text-gray-600">Create tutorials and guides for fellow developers</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-orange-500 mt-2 mr-3 rounded-full w-2 h-2"></div>
                                <p className="text-gray-600">Explore creative projects and artistic endeavors</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fun Facts & Contact */}
                <div className="gap-12 grid md:grid-cols-2">
                    {/* Fun Facts */}
                    <div className="bg-gradient-to-br from-orange-50 to-pink-50 shadow-xl p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <Coffee className="mr-3 w-8 h-8 text-orange-500" />
                            <h2 className="font-bold text-gray-800 text-3xl">Fun Facts</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Calendar className="mr-3 w-5 h-5 text-blue-500" />
                                <span className="text-gray-700">Started blogging in 2020</span>
                            </div>
                            <div className="flex items-center">
                                <Coffee className="mr-3 w-5 h-5 text-brown-500" />
                                <span className="text-gray-700">Powered by coffee and curiosity</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="mr-3 w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Based somewhere on Earth 🌍</span>
                            </div>
                            <div className="flex items-center">
                                <Heart className="mr-3 w-5 h-5 text-red-500" />
                                <span className="text-gray-700">Love connecting with readers</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <Mail className="mr-3 w-8 h-8 text-blue-500" />
                            <h2 className="font-bold text-gray-800 text-3xl">Let's Connect</h2>
                        </div>
                        <p className="mb-6 text-gray-600 leading-relaxed">
                            I love hearing from readers! Whether you have questions, feedback,
                            or just want to say hello, don't hesitate to reach out.
                        </p>
                        <div className="space-y-3">
                            <a
                                href="mailto:hello@yourblog.com"
                                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                                <Mail className="mr-3 w-5 h-5" />
                                hello@yourblog.com
                            </a>
                            <div className="flex space-x-4 pt-4">
                                <button className="bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-lg px-6 py-2 rounded-lg text-white transition-colors duration-200">
                                    Twitter
                                </button>
                                <button className="bg-gray-800 hover:bg-gray-900 shadow-md hover:shadow-lg px-6 py-2 rounded-lg text-white transition-colors duration-200">
                                    GitHub
                                </button>
                                <button className="bg-blue-700 hover:bg-blue-800 shadow-md hover:shadow-lg px-6 py-2 rounded-lg text-white transition-colors duration-200">
                                    LinkedIn
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl p-8 rounded-2xl text-white">
                        <h3 className="mb-4 font-bold text-3xl">Thanks for stopping by!</h3>
                        <p className="opacity-90 mb-6 text-xl">
                            I hope you find something here that resonates with you.
                            Feel free to explore my posts and join the conversation.
                        </p>
                        <button className="bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl px-8 py-3 rounded-lg font-semibold text-blue-600 transition-colors duration-200">
                            Read My Latest Posts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}