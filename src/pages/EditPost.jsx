// import React, { useState, useEffect } from 'react'
// import service from '../appwrite/config'
// import { PostForm, Container } from '../components/index'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// function EditPost() {
//     const { id } = useParams()
//     const [post, setPost] = useState(null)
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (id) {
//             service.getPost(id).then((post) => {
//                 if (post) {
//                     setPost(post);
//                 } else {
//                     navigate('/');
//                 }
//             });
//         } else {
//             navigate('/');
//         }
//     }, [id, navigate]);

//     return (
//         <div>
//             <Container>
//                 {post ? (
//                     <PostForm post={post} />
//                 ) : (
//                     <div className='text-center'>Loading...</div>
//                 )}
//             </Container>
//         </div>
//     )
// }

// export default EditPost
import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import { PostForm, Container } from '../components/index'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function EditPost() {
    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    // ✅ check if logged-in user is the post owner
                    if (post.UserId === userData?.$id) {
                        setPost(post)
                    } else {
                        navigate('/') // or show "unauthorized" message
                    }
                } else {
                    navigate('/')
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate, userData])

    return (
        <div>
            <Container>
                {post ? (
                    <PostForm Post={post} />
                ) : (
                    <div className='text-center'>Loading...</div>
                )}
            </Container>
        </div>
    )
}

export default EditPost
