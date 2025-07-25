import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import { PostForm, Container } from '../components/index'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditPost() {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) {
            service.getPost(id).then((post) => {
                if (post) {
                    setPost(post)
                } else {
                    navigate('/all-post')
                }
            })
        } else {
            navigate('/all-post')
        }

    }, [id, navigate])
    return (
        <div>
            <Container>
                {post ? (
                    <PostForm post={post} />
                ) : (
                    <div className='text-center'>Loading...</div>
                )}
            </Container>
        </div>
    )
}

export default EditPost