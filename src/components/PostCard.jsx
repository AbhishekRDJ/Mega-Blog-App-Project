import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
function PostCard({ $id, title, featureImage }) {
    return (
        <Link
            to={`/post/${$id}`}>
            <div className='p-4 rounded-xl w-full'>
                <div className='justify-center mb-4 w-full'>
                    <img src={service.getFilePreview($id)} alt={title} className='rounded-lg w-full h-64 object-cover' />
                </div>
                <h2 className='mb-2 font-semibold text-2xl'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard