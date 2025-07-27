import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'
import service from '../appwrite/config'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        service.getAllPost([]).then((post) => {
            if (post) {
                setPosts(post.documents)
            }
            setLoading(false)
        })
    }, [])

    const LoadingSkeleton = () => (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden animate-pulse">
            <div className="bg-gray-200 w-full h-48"></div>
            <div className="p-6">
                <div className="bg-gray-200 mb-3 rounded w-3/4 h-4"></div>
                <div className="bg-gray-200 mb-2 rounded w-full h-3"></div>
                <div className="bg-gray-200 mb-4 rounded w-2/3 h-3"></div>
                <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 rounded-full w-8 h-8"></div>
                    <div className="bg-gray-200 rounded w-20 h-3"></div>
                </div>
            </div>
        </div>
    )

    const EmptyState = () => (
        <div className="flex flex-col justify-center items-center col-span-full py-16 text-center">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 mb-6 p-8 rounded-full">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>
            <h3 className="mb-2 font-semibold text-gray-800 text-xl">No stories yet</h3>
            <p className="mb-6 max-w-md text-gray-600">
                Be the first to share your developer journey and inspire the community!
            </p>
            <button className="bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-600 hover:to-purple-700 hover:shadow-lg px-6 py-3 rounded-lg font-medium text-white hover:scale-105 transition-all duration-200 transform">
                Write Your First Post
            </button>
        </div>
    )

    return (
        <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
            {/* Enhanced Hero Section */}
            <div className="relative mb-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20 rounded-2xl">
                    <Container>
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm mb-6 px-4 py-2 rounded-full text-blue-100 text-sm">
                                <span className="bg-green-400 mr-2 rounded-full w-2 h-2 animate-pulse"></span>
                                Join thousands of developers sharing their stories
                            </div>
                            <h1 className="mb-6 font-bold text-white text-5xl md:text-6xl leading-tight">
                                Welcome to{' '}
                                <span className="bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent">
                                    DevBlog
                                </span>
                            </h1>
                            <p className="mx-auto mb-8 max-w-2xl font-medium text-blue-100 text-xl leading-relaxed">
                                Share your coding adventures, breakthrough moments, and lessons learned.
                                Connect with a community that celebrates every line of code.
                            </p>
                            <div className="flex sm:flex-row flex-col justify-center gap-4">
                                <button
                                    className="bg-white hover:bg-gray-50 hover:shadow-xl px-8 py-4 rounded-xl font-semibold text-blue-600 hover:scale-105 transition-all duration-200 cursor-pointer transform"
                                    onClick={() => navigate('/add-post')}
                                >
                                    Start Writing
                                </button>

                                <button
                                    className="hover:bg-white/10 backdrop-blur-sm px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-200 transform"
                                    onClick={() => navigate('/all-posts')}
                                >
                                    Explore Stories
                                </button>

                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            {/* Enhanced Main Content */}
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-bold text-gray-800 text-3xl md:text-4xl">
                        Latest Stories
                    </h2>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full w-24 h-1"></div>
                </div>

                {loading ? (
                    <div className="gap-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {[...Array(8)].map((_, i) => (
                            <LoadingSkeleton key={i} />
                        ))}
                    </div>
                ) : (
                    <div className="gap-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {posts.length > 0 ? (
                            posts.map((post, index) => (
                                <div
                                    key={post.$id}
                                    className="hover:scale-105 transition-all animate-fade-in-up duration-300 transform"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animationFillMode: 'both'
                                    }}
                                >
                                    <PostCard {...post} />
                                </div>
                            ))
                        ) : (
                            <EmptyState />
                        )}
                    </div>
                )}

                {/* Stats Section */}
                {posts.length > 0 && (
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 mt-16 p-8 rounded-2xl">
                        <div className="gap-8 grid sm:grid-cols-3 text-center">
                            <div className="hover:scale-105 transition-transform duration-200 transform">
                                <div className="mb-2 font-bold text-blue-600 text-3xl">{posts.length}</div>
                                <div className="font-medium text-gray-600">Stories Shared</div>
                            </div>
                            <div className="hover:scale-105 transition-transform duration-200 transform">
                                <div className="mb-2 font-bold text-purple-600 text-3xl">∞</div>
                                <div className="font-medium text-gray-600">Lines of Code</div>
                            </div>
                            <div className="hover:scale-105 transition-transform duration-200 transform">
                                <div className="mb-2 font-bold text-indigo-600 text-3xl">1+</div>
                                <div className="font-medium text-gray-600">Developers</div>
                            </div>
                        </div>
                    </div>
                )}
            </Container>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out;
                }
            `}</style>
        </div>
    )
}

export default Home