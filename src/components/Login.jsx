import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login as loginService } from '../store/authSlice';
import AuthClassObject from '../appwrite/auth';
import { Logo, Button } from './index';
import Spline from '@splinetool/react-spline';


function Login() {

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm("");
    const handleGoogleLogin = async () => {
        try {
            await AuthClassObject.loginWithGoogle();
            // Appwrite will redirect to the OAuth2 callback URL
        } catch (error) {
            console.error("Google login failed:", error);
            setError("Google login failed");
        }
    };

    const LoginUser = async (data) => {
        setError('');
        try {
            const Session = await AuthClassObject.login(data);
            if (Session) {
                const userData = await AuthClassObject.getCurrentUser();
                if (userData) dispatch(loginService(userData));
                navigate("/");
            }
        } catch (error) {
            console.error("Login failed:", error);
            setError(error.message || "Login failed");
        }
    };

    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-pink-500 mx-auto px-4 rounded-4xl max-w-screen h-20 min-h-screen">
            <div className="flex bg-white shadow-lg rounded-3xl w-full max-w-5xl overflow-hidden">

                <div className="p-10 w-full md:w-1/2">
                    <div className="mb-8">
                        <div className="mb-2 font-bold text-pink-400 text-2xl">Logo Here</div>
                        <p className="mb-1 text-gray-500">Welcome back !!!</p>
                        <h2 className="font-extrabold text-3xl">Log In</h2>
                    </div>

                    {error && <p className='mb-4 text-red-600'>{error}</p>}

                    <form onSubmit={handleSubmit(LoginUser)} className="space-y-6">
                        <div>
                            <label className="font-medium text-gray-700 text-sm">Email</label>
                            <input
                                type="email"
                                placeholder="login@gmail.com"
                                {...register('email', {
                                    required: true,
                                    validate: {
                                        matchPattern: (value) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            'Invalid email format',
                                    },
                                })}
                                className="block bg-blue-100 mt-1 px-4 py-2 border rounded-md focus:outline-none w-full"
                            />
                        </div>
                        <div>
                            <label className="flex justify-between font-medium text-gray-700 text-sm">
                                <span>Password</span>
                                <span className="text-gray-500 text-sm hover:underline cursor-pointer">Forgot Password ?</span>
                            </label>
                            <input
                                type="password"
                                placeholder="********"
                                {...register('password', { required: true })}
                                className="block bg-blue-100 mt-1 px-4 py-2 border rounded-md focus:outline-none w-full"
                            />
                        </div>
                        <Button type="submit" className="bg-pink-400 hover:bg-pink-500 rounded-full w-full h-10 font-semibold text-white transition">
                            LOGIN →
                        </Button>
                    </form>

                    <div className="my-6 text-gray-500 text-sm text-center">or continue with</div>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={handleGoogleLogin}
                            className="flex justify-center items-center hover:bg-gray-100 p-2 border rounded-full w-10 h-10 cursor-pointer"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                                alt="Google"
                                className="w-5 h-5"
                            />
                        </button>

                        {/* <button className="flex justify-center items-center hover:bg-gray-100 p-2 border rounded-full w-10 h-10">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-5 h-5" />
                        </button>
                        <button className="flex justify-center items-center hover:bg-gray-100 p-2 border rounded-full w-10 h-10">
                            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-5 h-5" />
                        </button> */}
                    </div>

                    <p className="mt-4 text-gray-500 text-sm text-center">
                        Don’t have an account yet? <Link to="/signup" className="font-medium text-pink-500 hover:underline">Sign up for free</Link>
                    </p>
                </div>
                <div className="relative md:flex justify-center items-center bg-blue-100 w-1/2">
                    <div className="w-full h-full">
                        <iframe src='https://my.spline.design/draganddropbookpencilschoolcopy-QhA1Iuir8KecLXxcT4dz70zb/' frameborder='0' width='100%' height='100%'></iframe></div>
                </div>

            </div>
        </div>
    );
}

export default Login;
