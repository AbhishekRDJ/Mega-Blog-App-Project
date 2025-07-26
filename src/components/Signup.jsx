import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthClassObject from '../appwrite/auth';
import { Button, Logo } from './index';
import { logout as logoutService } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm("");

    const SignupUser = async (data) => {
        setError('');
        try {
            const UserData = await AuthClassObject.createAccount(data);
            if (UserData) {
                const userData = await AuthClassObject.getCurrentUser();
                if (userData) dispatch(logoutService(userData));
                navigate("/login");
            }
        } catch (error) {
            console.log("Signup Error: ", error);
            setError(error.message || "Signup failed. Try again later.");
        }
    };

    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-pink-500 mx-auto px-4 rounded-4xl max-w-screen h-20 min-h-screen">
            <div className="flex bg-white shadow-lg rounded-3xl w-full max-w-5xl overflow-hidden">

                <div className="p-10 w-full md:w-1/2">
                    <div className="mb-8">
                        <div className="mb-2 font-bold text-pink-400 text-2xl">Logo Here</div>
                        <p className="mb-1 text-gray-500">Let’s get started!</p>
                        <h2 className="font-extrabold text-3xl">Sign Up</h2>
                    </div>

                    {error && <p className="mb-4 text-red-600">{error}</p>}

                    <form onSubmit={handleSubmit(SignupUser)} className="space-y-6">
                        <div>
                            <label className="font-medium text-gray-700 text-sm">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                {...register('name', { required: true })}
                                className="block bg-blue-100 mt-1 px-4 py-2 border rounded-md focus:outline-none w-full"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-gray-700 text-sm">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
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
                            <label className="font-medium text-gray-700 text-sm">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                {...register('password', { required: true })}
                                className="block bg-blue-100 mt-1 px-4 py-2 border rounded-md focus:outline-none w-full"
                            />
                        </div>
                        <Button type="submit" className="bg-pink-400 hover:bg-pink-500 rounded-full w-full h-10 font-semibold text-black transition">
                            <p>SIGN UP →</p>
                        </Button>
                    </form>

                    <p className="mt-6 text-gray-500 text-sm text-center">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-pink-500 hover:underline">Sign In</Link>
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

export default Signup;
