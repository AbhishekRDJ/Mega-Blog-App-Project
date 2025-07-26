import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { Edit, Delete } from "lucide-react";
import EditPost from "./EditPost";

export default function Post() {
    const [post, setPost] = useState(null);
    const [authername, setAutherName] = useState('');
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.UserId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                if (userData.authername) {
                    setAutherName(userData.authername);
                } else if (userData.name) {
                    setAutherName(userData.name);
                } else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.Feature_Img);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-8 md:py-12 min-h-screen">
            <Container>
                <div className="relative bg-white shadow-2xl mb-10 rounded-2xl overflow-hidden">
                    {post?.Feature_Img ? (
                        <div className="relative">
                            <img
                                src={service.getFileURL(post.Feature_Img)}
                                alt={post.Title}
                                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center bg-gradient-to-r from-gray-200 to-gray-300 h-64 sm:h-80 md:h-96">
                            <div className="text-center">
                                <div className="flex justify-center items-center bg-gray-400 mx-auto mb-4 rounded-full w-20 sm:w-24 h-20 sm:h-24">
                                    <svg className="w-10 sm:w-12 h-10 sm:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-600">No image available</p>
                            </div>
                        </div>
                    )}

                    {isAuthor && (
                        console.log("Feature_Img File ID:", post.$id),
                        <div className="top-4 sm:top-6 right-4 sm:right-6 z-10 absolute flex gap-2 sm:gap-3 text-white">
                            <Link to={`/edit-post/${slug}`}>
                                <Button
                                    bgColor="bg-emerald-500 hover:bg-emerald-600"
                                    className="bg-emerald-500/90 shadow-lg hover:shadow-xl backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-2 border border-white/20 rounded-full font-semibold text-white hover:scale-105 transition-all duration-200"
                                >
                                    <Edit className="w-4 sm:w-5 h-4 sm:h-5" />
                                </Button>
                            </Link>
                            <Button
                                onClick={deletePost}
                                className="bg-red-500/90 shadow-lg hover:shadow-xl backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-2 border border-white/20 rounded-full font-semibold text-white hover:scale-105 transition-all duration-200"
                            >
                                delete
                                <Delete className="ml-1 w-4 sm:w-5 h-4 sm:h-5" />
                            </Button>
                        </div>
                    )}
                </div>

                <article className="mx-auto px-4 max-w-4xl">
                    <header className="mb-10 text-center">
                        <h1 className="bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6 font-bold text-transparent text-4xl sm:text-5xl md:text-6xl leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex justify-center items-center mb-6 sm:mb-8">
                            <div className="bg-gradient-to-r from-transparent via-gray-400 to-transparent w-24 sm:w-32 h-px"></div>
                            <div className="bg-gray-400 mx-3 rounded-full w-2 h-2"></div>
                            <div className="bg-gradient-to-r from-transparent via-gray-400 to-transparent w-24 sm:w-32 h-px"></div>
                        </div>
                        <div className="text-gray-600 text-base sm:text-lg">
                            <time className="font-medium">
                                {post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) : `Published  ||   Author: ${authername}`}
                            </time>
                        </div>
                    </header>

                    <div className="bg-white shadow-xl p-6 sm:p-8 md:p-12 rounded-2xl">
                        <div className="max-w-none prose prose-sm sm:prose lg:prose-lg browser-css">
                            <div className="text-gray-800 text-base sm:text-lg leading-relaxed">
                                {post?.Content ? parse(post.Content) : (
                                    <div className="py-10 sm:py-12 text-center">
                                        <div className="flex justify-center items-center bg-gray-200 mx-auto mb-4 rounded-full w-14 sm:w-16 h-14 sm:h-16">
                                            <svg className="w-6 sm:w-8 h-6 sm:h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-500 text-lg sm:text-xl">No content available</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 sm:mt-12 text-center">
                        <Link
                            to="/"
                            className="group inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                            <svg className="mr-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:-translate-x-1 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to all posts
                        </Link>
                    </div>
                </article>
            </Container>
        </div>
    ) : null;
}
