'use client'
import ButtonPrimary from '@/shared/ButtonPrimary';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            // Show loading alert
            Swal.fire({
                title: 'Submitting...',
                text: 'Please wait while we submit your message.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Simulate a form submission delay
            fetch('https://uicc-server.vercel.app/contact', {
                method: 'POST', // Use uppercase for the method
                headers: { // Specify headers explicitly
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // Stringify the body for JSON
            })
            // Handle success
            Swal.fire({
                icon: 'success',
                title: 'Message Sent',
                text: 'Your message has been sent successfully!',
                confirmButtonText: 'OK'
            });

            // Reset form fields
            reset();

        } catch (error) {
            // Handle error
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'There was an error submitting your message. Please try again.',
                confirmButtonText: 'Retry'
            });
        }
    };

    return (
        <div className="2xl:w-3/4 xl:w-3/4 w-full mx-auto 2xl:mt-20 xl:mt-20 mt-12 2xl:p-0 xl:p-0 p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-semibold">First Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="First name"
                            {...register("firstName", { required: "First name is required" })}
                            className="input input-bordered"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Last Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Last name"
                            {...register("lastName", { required: "Last name is required" })}
                            className="input input-bordered"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "Enter a valid email"
                                }
                            })}
                            className="input input-bordered"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Phone Number</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            {...register("tel", { required: "phone is required" })}
                            className="input input-bordered"
                        />
                        {errors.tel && <p className="text-red-500 text-sm">{errors.tel.message}</p>}
                    </div>

                    <div className="form-control 2xl:col-span-2 xl:col-span-2">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Subject</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Write a subject"
                            {...register("subject", { required: "Subject is required" })}
                            className="input input-bordered"
                        />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                    </div>

                    <div className="form-control 2xl:col-span-2 xl:col-span-2 mt-4">
                        <textarea
                            rows={3}
                            placeholder="Write your message"
                            {...register("message", { required: "Message is required" })}
                            className="textarea textarea-bordered textarea-lg"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>

                </div>
                <div className="form-control mt-10 w-1/2 mx-auto">
                    <a href="https://wa.me/8801958377801"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp">
                        <ButtonPrimary width={true} text={'Send Message'} />
                    </a>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;