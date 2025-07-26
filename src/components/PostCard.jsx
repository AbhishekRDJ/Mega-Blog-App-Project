import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, Title, Feature_Img, AuthorName }) {
    // const imageUrl = service.getFileURL(Feature_Img);
    // console.log("Image preview URL:", imageUrl);

    return (
        // console.log("Feature_Img File ID:", Feature_Img),

        <Link to={`/post/${$id}`} className="group">
            <article className="flex flex-col justify-between bg-white shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 rounded-2xl h-[420px] overflow-hidden transition-all hover:-translate-y-2 duration-300 transform">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                    {Feature_Img ? (
                        <>
                            <img
                                src={service.getFileURL(Feature_Img)}
                                alt={Title || 'Post'}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="right-4 bottom-4 absolute opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300 transform">
                                <div className="bg-white/90 shadow-lg backdrop-blur-sm p-2 rounded-full">
                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex justify-center items-center bg-gradient-to-br from-gray-200 to-gray-300 w-full h-64">
                            <div className="text-center">
                                <div className="flex justify-center items-center bg-gray-400 mx-auto mb-3 rounded-full w-16 h-16">
                                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-500 text-sm">No Image</p>
                            </div>
                        </div>
                    )}
                </div>
                \
                <div className="p-6">

                    <h2 className="mb-3 font-bold text-gray-900 group-hover:text-blue-600 text-xl line-clamp-2 transition-colors duration-200">
                        {Title || 'Untitled Post'}
                    </h2>
                    <h4>{AuthorName}</h4>

                    <div className="flex items-center opacity-0 group-hover:opacity-100 font-medium text-blue-600 text-sm transition-all translate-y-2 group-hover:translate-y-0 duration-300 transform">
                        <span>Read more</span>
                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 transform"></div>
            </article>
        </Link>
    )
}

export default PostCard