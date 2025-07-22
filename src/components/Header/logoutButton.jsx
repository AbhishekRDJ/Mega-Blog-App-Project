import React from 'react'
import useDispatch from 'react-redux'
import service from '../../appwrite/config';
import { logout } from '../../store/authSlice'
function LogoutButton() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        service.logout().then(() => {
            dispatch(logout());
            console.log("Logout successful");
        }).catch((error) => {
            console.error("Logout failed:", error);
        })
    }
    return (
        <button
            className=''
            onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutButton