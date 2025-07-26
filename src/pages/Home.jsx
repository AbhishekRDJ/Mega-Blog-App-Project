import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'
import service from '../appwrite/config'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getAllPost([]).then((post) => {
            if (post) {
                setPosts(post.documents)
            }
        })
    }, [])

    return (
        <div className="py-8 w-full h-screen">
            <Container>
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
