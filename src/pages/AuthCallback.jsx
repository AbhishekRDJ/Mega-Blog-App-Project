// src/pages/AuthCallback.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthClassObject from '../appwrite/auth';
import { login } from '../store/authSlice';

export default function AuthCallback() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        AuthClassObject.getCurrentUser()
            .then(userData => {
                if (userData) {
                    dispatch(login({ userData }));
                    navigate('/', { replace: true });
                } else {
                    // no session → send back to login
                    navigate('/login', { replace: true });
                }
            })
            .catch(() => navigate('/login', { replace: true }))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="font-medium text-lg">Finalizing login…</p>
            </div>
        );
    }
    return null;
}
