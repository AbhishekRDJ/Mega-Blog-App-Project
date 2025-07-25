import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login as loginService } from '../store/authSlice'
import { Button, Select, Logo } from './index'
import { useDispatch } from 'react-redux'
import AuthClassObject from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Login() {
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm("")
    const LoginUser = async (data) => {
        setError('')
        try {
            const Session = await AuthClassObject.login(data);
            if (Session) {
                const userData = await AuthClassObject.getCurrentUser();
                if (userData) dispatch(loginService(userData));
                navigate("/");
            }


        } catch (error) {
            console.error("Login failed:", error);
            setError(error);
        }
    }
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center bg-white shadow-md p-6 rounded-lg w-full max-w-md'>
                <span className='inline-block mb-2 w-full max-w-[100px]'>
                    <Logo widthprops='100%' />
                </span>
                <h2 className='font-bold text-2xl leading-tight'>Sign in to your account</h2>
                <p className='mt-2 text-black/60 text-base text-center'>
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to='/signup'
                        className='font-medium text-primary hover:underline transition-all duration-200'
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className='mt-8 text-red-600 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(LoginUser)} className='mt-8 w-full'>
                    <div className='space-y-5'>
                        <input
                            label='Email: '
                            placeholder='Enter your email'
                            type='email'
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        'Email address must be a valid address',
                                },
                            })}
                            className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                        />
                        <input
                            label='Password: '
                            type='password'
                            placeholder='Enter your password'
                            {...register('password', {
                                required: true,
                            })}
                            className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                        />
                        <Button type='submit' className='w-full'>
                            Sign in
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login 