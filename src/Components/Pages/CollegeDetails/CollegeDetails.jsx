import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from '../../SharePage/Container';

const CollegeDetails = () => {
    const singleCollegeDetails = useLoaderData()
    console.log(singleCollegeDetails)
    const { collegeImage, _id, collegeName, admissionDates, events, researchHistory, admissionProcess  } = singleCollegeDetails
    return (
        <div className='my-20'>
            <Container>
                <div className='relative'>
                    <img src={collegeImage} alt="" />
                    <div className='w-1/2 text-center absolute top-1/4 left-1/4 h-20 bg-black items-center justify-center text-white bg-opacity-50 px-32 py-28'>
                    <h2 className='text-5xl font-bold '>{collegeName}</h2>
                    </div>
                </div>
                <div>
                    <p className='mt-4'><span className='font-bold'>Admission Process :</span>{admissionProcess}</p>

                </div>
            </Container>
        </div>
    );
};

export default CollegeDetails;