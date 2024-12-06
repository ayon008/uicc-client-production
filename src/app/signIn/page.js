'use client'
import useAuth from '@/Hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Google = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M18.1711 9.12776H17.4998V9.09318H9.99984V12.4265H14.7094C14.0223 14.3669 12.1761 15.7598 9.99984 15.7598C7.23859 15.7598 4.99984 13.5211 4.99984 10.7598C4.99984 7.9986 7.23859 5.75985 9.99984 5.75985C11.2744 5.75985 12.434 6.24068 13.3169 7.0261L15.674 4.66901C14.1857 3.28193 12.1948 2.42651 9.99984 2.42651C5.39775 2.42651 1.6665 6.15776 1.6665 10.7598C1.6665 15.3619 5.39775 19.0932 9.99984 19.0932C14.6019 19.0932 18.3332 15.3619 18.3332 10.7598C18.3332 10.2011 18.2757 9.65568 18.1711 9.12776Z" fill="#FFC107" />
            <path d="M2.62744 6.8811L5.36536 8.88901C6.10619 7.05485 7.90036 5.75985 9.99994 5.75985C11.2745 5.75985 12.4341 6.24068 13.317 7.0261L15.6741 4.66901C14.1858 3.28193 12.1949 2.42651 9.99994 2.42651C6.79911 2.42651 4.02327 4.2336 2.62744 6.8811Z" fill="#FF3D00" />
            <path d="M9.9998 19.0933C12.1523 19.0933 14.1081 18.2695 15.5869 16.9299L13.0077 14.7474C12.1431 15.4054 11.0863 15.7611 9.9998 15.7599C7.8323 15.7599 5.99189 14.3778 5.29855 12.4491L2.58105 14.5428C3.96022 17.2416 6.76105 19.0933 9.9998 19.0933Z" fill="#4CAF50" />
            <path d="M18.1712 9.12785H17.5V9.09326H10V12.4266H14.7096C14.3809 13.3501 13.7889 14.1571 13.0067 14.7478L13.0079 14.747L15.5871 16.9295C15.4046 17.0953 18.3333 14.9266 18.3333 10.7599C18.3333 10.2012 18.2758 9.65576 18.1712 9.12785Z" fill="#1976D2" />
        </svg>
    )
}

const Facebook = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M17.6667 10.8265C17.657 12.8725 16.8949 14.8435 15.5256 16.3639C14.1563 17.8842 12.2755 18.8477 10.2417 19.0707V13.0932H12.2C12.2862 13.0936 12.3695 13.0625 12.4343 13.0057C12.4991 12.9489 12.5409 12.8703 12.5517 12.7848L12.7633 10.9498C12.771 10.9016 12.768 10.8524 12.7546 10.8055C12.7413 10.7585 12.7178 10.7151 12.6859 10.6782C12.654 10.6413 12.6144 10.6118 12.5699 10.5918C12.5254 10.5718 12.4771 10.5617 12.4283 10.5623H10.2417V9.06233C10.2417 8.36566 10.4358 7.88983 11.4317 7.88983H12.3583C12.4504 7.88744 12.5378 7.84913 12.602 7.7831C12.6661 7.71707 12.7019 7.62856 12.7017 7.5365V5.95816C12.6995 5.86613 12.6614 5.77859 12.5955 5.71428C12.5296 5.64996 12.4412 5.61397 12.3492 5.614H10.85C10.4289 5.58389 10.0063 5.64603 9.61168 5.79609C9.21706 5.94616 8.85995 6.18052 8.56526 6.48283C8.27056 6.78514 8.04539 7.14812 7.90544 7.54643C7.7655 7.94474 7.71416 8.3688 7.755 8.789V10.5523H6.2825C6.23652 10.5523 6.19101 10.5615 6.14864 10.5794C6.10628 10.5972 6.06792 10.6234 6.03584 10.6564C6.00376 10.6893 5.9786 10.7283 5.96185 10.7711C5.94511 10.814 5.93711 10.8597 5.93833 10.9057V12.739C5.93833 12.8303 5.97459 12.9178 6.03914 12.9824C6.10368 13.0469 6.19122 13.0832 6.2825 13.0832H7.755V18.9473C5.86414 18.5827 4.15794 17.5744 2.92647 16.0939C1.69499 14.6134 1.01426 12.7521 1 10.8265C1 8.61636 1.87797 6.49674 3.44078 4.93394C5.00358 3.37114 7.1232 2.49316 9.33333 2.49316C11.5435 2.49316 13.6631 3.37114 15.2259 4.93394C16.7887 6.49674 17.6667 8.61636 17.6667 10.8265Z" fill="#1D54B8" />
        </svg>
    )
}

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const { signIn, createWithGoogle } = useAuth();

    const onSubmit = async (data) => {
        const { email, password } = data;

        try {
            // Show loading alert
            Swal.fire({
                title: 'Signing in...',
                text: 'Please wait while we process your request.',
                allowOutsideClick: false, // Prevent closing by clicking outside
                didOpen: () => {
                    Swal.showLoading(); // Display loading spinner
                },
            });

            await signIn(email, password); // Perform your sign-in logic

            // Show success alert after successful sign-in
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully signed in.',
                icon: 'success',
                confirmButtonText: 'OK',
            });

            return router.push('/');
        } catch (error) {
            // Show error alert in case of failure
            Swal.fire({
                icon: 'error',
                title: 'Connection failed!',
                text: error.code?.split('auth/')[1],
            });
        }
    };

    const googleLogin = () => {
        createWithGoogle();
        return router.push('/')
    }


    return (
        <div className="2xl:mt-[100px] xl:mt-[100px] singIn">
            <div className="2xl:py-40 xl:py-32 pb-20 pt-[130px] flex items-center justify-center">
                <div className="card signInForm w-[90%] max-w-md shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                        <div>
                            <h1 className="text-white 2xl:text-3xl xl:text-3xl text-center font-bold">Login</h1>
                            <p className="text-white text-base font-normal text-center mt-2 opacity-70">
                                Enter your valid credentials to access your account
                            </p>
                        </div>
                        <div className="form-control">
                            <input
                                type="email"
                                placeholder="john@gmail.com"
                                className={`email input input-bordered ${errors.email && "input-error"}`}
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                placeholder="password"
                                className={`password input input-bordered ${errors.password && "input-error"}`}
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                            <label className="label mt-3">
                                <Link href="#" className="text-white text-sm opacity-65">
                                    <span>Forgotten password?</span>
                                    <span className="ml-2 font-semibold text-orange text-sm">Reset</span>
                                </Link>
                            </label>
                        </div>
                        <div className="form-control my-3">
                            <button type="submit" className="btn count text-white border-none text-base">
                                Login
                            </button>
                        </div>
                        <div>
                            <p className="text-center text-white">
                                <span>Don’t have an account?</span> <Link href={'/signUp'} className="text-orange">Sign Up</Link>
                            </p>
                        </div>
                        <div class="flex items-center w-3/4 mx-auto mt-2">
                            <hr class="flex-grow border-white opacity-65" />
                            <span class="px-4 text-white opacity-65">or</span>
                            <hr class="flex-grow border-white opacity-65" />
                        </div>
                    </form>
                    <div className='pt-4 pb-8 px-8'>
                        <button onClick={() => googleLogin()} style={{ borderRadius: '26px' }} className='btn bg-white w-full'>
                            <Facebook />
                            <span>Login with Facebook </span>
                        </button>
                        <button onClick={() => googleLogin()} style={{ borderRadius: '26px' }} className='btn mt-4 bg-white w-full'>
                            <Google />
                            <span>Login with Google </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;