import React from 'react';
import Container from '../../SharePage/Container';
import { useForm } from 'react-hook-form';

const AdmissionForm = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const submitForm = data => {
        console.log(data)
        const {candidateName, phone, date, subject, address, photo, university, email} = data
        const result = {candidateName, phone, date, subject, address, photo, university, email}

        fetch('http://localhost:4000/admission',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(result)
           
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Submit successfull')
                reset();
            }
        })
        
    }

    return (
        <div>
            <Container>
                <div className='w-full flex items-center justify-center'>
                    <div className="md:w-1/2 border-2 p-10 mb-12 md:mt-[25vh]">
                        <h3 className='text-3xl text-center font-semibold'>Admission Form</h3>
                        <form onSubmit={handleSubmit(submitForm)} className='w-full'>

                            <div style={{ justifyContent: 'space-between' }} className="md:flex">
                                {/* University Name Field */}
                                <div style={{ width: '270px' }} className="form-control  mr-4">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">University Name <span className='text-warning'>*</span> </span>
                                    </label>
                                    <select className='border p-3 rounded-md' {...register("university", { required: true, maxLength: 150 })}>
                                        <option value="North South University">North South University</option>
                                        <option value="East West University">East West University</option>
                                        <option value="Independent University, Bangladesh">Independent University, Bangladesh</option>
                                        <option value="Ahsanullah University of Science and Technology">Ahsanullah University of Science and Technology</option>
                                        <option value="Daffodil International University">Daffodil International University</option>
                                    </select>
                                    {errors.university && <span>This field is required</span>}
                                </div>
                                {/* Candidate Name Field */}
                                <div style={{ width: '270px' }} className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Candidate Name <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="text" placeholder="Candidate Name..." {...register("candidateName", { required: true, maxLength: 80 })} />
                                    {errors.candidateName && <span>This field is required</span>}
                                </div>
                            </div>
                            {/* Subject and Date of Birth Fields */}
                            <div style={{ justifyContent: 'space-between' }} className="md:flex">
                                <div style={{ width: '270px' }} className="form-control  mr-4">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Subject <span className='text-warning'>*</span> </span>
                                    </label>
                                    <select className='border p-3 rounded-md' {...register("subject", { required: true, maxLength: 150 })}>
                                        <option value="ComputerScience">Computer Science</option>
                                        <option value="CivilEngineering">Civil Engineering</option>
                                        <option value="ElectricalEngineering">Electrical And Electronic Engineering</option>
                                    </select>
                                    {errors.subject && <span>This field is required</span>}
                                </div>
                                <div style={{ width: '270px' }} className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Date Of Birth <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="date" {...register("date", { required: true, maxLength: 80 })} />
                                    {errors.date && <span>This field is required</span>}
                                </div>
                            </div>
                            {/* Phone Number and Email Fields */}
                            <div style={{ justifyContent: 'space-between' }} className="md:flex">
                                <div style={{ width: '270px' }} className="form-control  mr-4">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Phone Number <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="text" placeholder="Phone Number" {...register("Phone", { required: true, maxLength: 80 })} />
                                    {errors.Phone && <span>This field is required</span>}
                                </div>
                                <div style={{ width: '270px' }} className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Email<span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="email" placeholder="Email..." {...register("email", { required: true, maxLength: 80 })} />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                            </div>
                            {/* Address and Photo Fields */}
                            <div style={{ justifyContent: 'space-between' }} className="md:flex">
                                <div style={{ width: '270px' }} className="form-control  mr-4">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Address <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="text" placeholder="Address" {...register("address", { required: true, maxLength: 80 })} />
                                    {errors.address && <span>This field is required</span>}
                                </div>
                                <div style={{ width: '270px' }} className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Photo <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="file-input file-input-bordered file-input-md w-full" type="file" {...register("photo", { required: true, maxLength: 80 })} />
                                    {errors.photo && <span>This field is required</span>}
                                </div>
                            </div>

                            <input className='btn bg-rose-700 w-full text-white hover:bg-pink-950 mt-4' type="submit" value='Submit' />

                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AdmissionForm;
