import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
export default function Protected({ children, authentication = true }) {
    const authStatus = useSelector((state) => state.auth.status);

    if (authentication) {
        return authStatus ? children : <Navigate to="/login" replace />;
    } else {
        return !authStatus ? children : <Navigate to="/" replace />;
    }
}

