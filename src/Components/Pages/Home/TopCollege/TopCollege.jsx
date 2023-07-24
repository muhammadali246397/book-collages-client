import React, { useEffect, useState } from 'react';
import Container from '../../../SharePage/Container';
import CollegeCard from './CollegeCard';

const TopCollege = () => {
    const [colleges, setCollege] = useState([]);
    console.log(colleges)
    useEffect(() => {
        fetch("https://book-college-server.vercel.app/college")
        .then(res => res.json())
        .then(data => setCollege(data) )
    },[])
    return (
        <div>
            <Container>
                <div className='my-10'>
                    <h2 className='font-bold text-4xl text-center '><span className='border-b-2 border-rose-700 p-2'>Top University</span></h2>
                </div>
                <div className='my-5'>
                    {
                        colleges.map(collage => <CollegeCard 
                            key={collage._id}
                            collage ={collage}
                        ></CollegeCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default TopCollege;