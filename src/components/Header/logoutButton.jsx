import React from 'react'
import { useDispatch } from 'react-redux'
import AuthClassObject from '../../appwrite/auth';
import { logout } from '../../store/authSlice'
function LogoutButton() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        AuthClassObject.logout().then(() => {
            dispatch(logout());
            console.log("Logout successful");
        }).catch((error) => {
            console.error("Logout failed:", error);
        })
    }
    return (
        <button
            className='hidden md:flex justify-center items-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition cursor-pointer'
            onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutButton