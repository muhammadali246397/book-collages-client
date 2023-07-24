import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from '../../SharePage/Container';

const CollegeDetails = () => {
    const singleCollegeDetails = useLoaderData()
    console.log(singleCollegeDetails)
    const { collegeImage, _id, collegeName, admissionDates, events, researchHistory, admissionProcess,sports  } = singleCollegeDetails
    console.log(sports[0].category)
    
    return (
        <div className='my-20'>
            <Container>
                <div className='relative'>
                    <img className='w-full h-[70vh]' src={collegeImage} alt="" />
                    <div className='md:w-2/3 text-center absolute top-1/4 md:left-[200px] bg-black items-center justify-center text-white bg-opacity-50 px-20 py-28'>
                    <h2 className='text-4xl font-bold '>{collegeName}</h2>
                    </div>
                </div>
                <div>
                    <p className='mt-4'><span className='font-bold'>Admission Process :</span>{admissionProcess}</p>
                    <p className='mt-4'><span className='font-bold'>Events : </span>{events}</p>
                    <p className='mt-4'><span className='font-bold'>Research History : </span>{researchHistory}</p>
                    <h4 className='text-xl font-bold'>Sports :</h4>
                    <p className='mt-4'><span className='font-bold'>{sports[0].category} : </span>{sports[0].description}</p>
                    <p className='mt-4'><span className='font-bold'>{sports[1].category} : </span>{sports[1].description}</p>

            


                </div>
            </Container>
        </div>
    );
};

export default CollegeDetails;