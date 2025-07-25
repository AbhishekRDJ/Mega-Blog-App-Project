import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({ children, Authentication = true }) {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!authStatus && Authentication) {
            navigate('/login');
        }
        if (authStatus && !Authentication) {
            navigate('/');
        }
        setLoading(false);


    }, [authStatus, navigate, Authentication]);
    return (
        loading ? <div className='flex justify-center items-center h-screen'>Loading...</div> : children
    )
}

