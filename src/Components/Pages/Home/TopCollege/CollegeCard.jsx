import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ collage }) => {
    const { collegeImage, _id, collegeName, admissionDates, events, researchHistory,  } = collage
    return (
        <div className='my-6 border p-4'>
            <div className="md:lg:flex flex-row-reverse">
                <figure className='md:lg:w-1/2'><img style={{width:'100%',height:'100%'}} src={collegeImage} alt="Movie" /></figure>
                <div className="card-body md:lg:w-1/2">
                    <h2 className="card-title">{collegeName}</h2>
                    <p>Addmission Date : {admissionDates}</p>
                    <p>Events :{events}</p>
                    <p>{researchHistory}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/details/${_id}`}><button className="border bg-[#9f1239] hover:bg-pink-950 active:bg-pink-950 text-white px-4 py-2">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;