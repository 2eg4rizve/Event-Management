/* eslint-disable no-unused-vars */

import { Link, Navigate, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {

   
    const { createUser, handleUpdateProfile } = useAuth();

    const useNavigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        //get field value
        const name = e.target.name.value;
        const email = e.target.email.value;
        const img = e.target.img.value;
        const password = e.target.password.value;

        console.log(name, email, img, password);

        if (password.length < 1) {
            toast.error('password must be greater then 0 charter')
        }

        //creating a new user

        createUser(email, password)
            .then(res => {
                handleUpdateProfile(name, img)
                    .then(() => {
                        toast.success("User Created Successfully")
                        Navigate('/')
                    })
            })
            .catch(error => {
                toast.error(error.massage)
            })



    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" name='name' />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered " name="email" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='img' />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name="password" />
                            </div>

                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral" type='submit'>Register</button>
                            </div>

                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;