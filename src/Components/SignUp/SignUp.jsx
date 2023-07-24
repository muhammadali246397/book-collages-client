import React, { useContext, useState } from 'react';
import Container from '../SharePage/Container';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser,googleSignin} = useContext(AuthContext)
    const navigate = useNavigate();
    const [confirmpass, setConfirmPass] = useState('');
    const { register,reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit= data => {
      console.log(data)
      createUser(data.email,data.password)
      .then(result => {
        console.log(result.user)
        alert('signUp seccessfull')
        reset();
        navigate('/')
      })
      .catch(error => console.log(error))

    }

    const googlelogin = () => {
        googleSignin()
        .then(result => {
            alert('login successfully')
            navigate('/')
        })
        .catch(error => console.log(error))
    }


    const validateConfirmPassword = (value) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
        if (!passwordRegex.test(value)) {
            return 'Password must be at least 6 characters long, contain one capital letter, and one special character';
          }
        if (value !== confirmpass) {
            return 'Passwords do not match';
          }
          return true;
    };
    return (
        <div>
            <Container>
                <div className='w-full flex items-center justify-center'>
                    <div className="md:w-1/2 border-2 p-10 mb-12 md:mt-[25vh]">
                        <h3 className='text-3xl text-center font-semibold'>Resister</h3>
                        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                            <div style={{ justifyContent: 'space-between' }} className="md:flex">
                                <div style={{ width: '270px' }} className="form-control  mr-4">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Name <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="text" placeholder="Name..." {...register("name", { required: true, maxLength: 80 })} />
                                    {errors.name && <span>This field is required</span>}
                                </div>
                                <div style={{ width: '270px' }} className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Email <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="email" placeholder="Email..." {...register("email", { required: true, maxLength: 80 })} />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                            </div>
                            <div style={{ justifyContent: 'space-between' }} 
                            className="md://
                            flex">
                                <div style={{ width: '270px' }} className="form-control  mr-4">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Password <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="password" placeholder="password..." {...register("password", { required: true, maxLength: 80, validate: validateConfirmPassword })} />
                                    {errors.password && <span className='text-warning'>{errors.password.message}</span>}
                                </div>
                                <div style={{ width: '270px' }} className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Confirm Password <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="password" placeholder="Confirm Password..." {...register("confirmpass", { required: true, maxLength: 80, validate: validateConfirmPassword })}
                                        onChange={(e) => setConfirmPass(e.target.value)} />
                                    {/* {errors.confirmpass && <span>password not matching</span>} */}
                                </div>
                            </div>
                        

                            <input className=' btn bg-rose-700 w-full text-white hover:bg-pink-950 mt-4' type="submit" value='Resister' />
                            <p className='mt-2 '>Allready have an account? <Link className='font-bold text-rose-800' to='/login' >Please Login</Link></p>
                        </form>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider">OR</div>

                        </div>
                        <div className='text-center'>
                            <button  onClick={googlelogin} className='btn btn-circle btn-outline bg-rose-700 hover:bg-pink-950 text-white'><FaGoogle></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;