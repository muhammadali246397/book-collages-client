
import React, { useContext, useState } from 'react';
import Container from '../SharePage/Container';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const location = useLocation()
    const {logIn,googleSignin,resetpassword,user} = useContext(AuthContext)
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
   
    
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        logIn(data.email,data.password)
        .then(result => {
            console.log(result.user)
            alert('login successfully')
            reset()
            navigate(from)
        })
        .catch(error => console.log(error.message))
    }

    const googlelogin = () => {
        googleSignin()
        .then(result => {
            alert('login successfully')
            navigate(from)
        })
        .catch(error => console.log(error))
    }

    const passwordReset = (email) => {
        resetpassword(email)
        .then(result => {
            console.log(result)
            alert('password reset successfully')
        })
        .catch(error => console.log(error))
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div>
            <Container>
            <div className='w-full flex items-center justify-center'>
                    <div className="md:w-1/3 border-2 p-10 mb-12 md:mt-[25vh]">
                        <h3 className='text-3xl text-center font-semibold'>Login</h3>
                        <form className='w-full' onSubmit={handleSubmit(onSubmit)} >

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Email <span className='text-warning'>*</span> </span>
                                </label>
                                <input className="input input-bordered w-full " type="text" placeholder="Email..." {...register("email", { required: true, maxLength: 80 })} />
                                {errors.email && <span>This field is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Password <span className='text-warning'>*</span> </span>
                                </label>
                                <div className="relative">
                                    <input className="input input-bordered w-full" type={passwordVisible ? "text" : "password"} placeholder="Password..." {...register("password", { required: true, maxLength: 80 })} />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        {passwordVisible ? (
                                            <FaEyeSlash className="text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
                                        ) : (
                                            <FaEye className="text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
                                        )}
                                    </div>
                                </div>
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <input className=' btn bg-rose-700 w-full text-white hover:bg-pink-950 mt-4' type="submit" value='Login' />
                            <p className='mt-2 '>New to our website? <Link className='font-bold text-rose-800' to='/signup' >Please Resister</Link></p>
                            <p ><button onClick={() => passwordReset(user?.email)} className='text-rose-800'>reset password</button></p>
                            
                        </form>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider">OR</div>

                        </div>
                        <div className='text-center'>
                            <button onClick={googlelogin}  className='btn btn-circle btn-outline bg-rose-800 hover:bg-pink-950  text-white'><FaGoogle></FaGoogle></button>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;