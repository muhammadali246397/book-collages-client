import React, { useEffect, useState } from 'react';
import Container from '../../../SharePage/Container';
import CollegeCard from './CollegeCard';

const TopCollege = () => {
    const [colleges, setCollege] = useState([]);
    console.log(colleges)
    useEffect(() => {
        fetch("http://localhost:4000/college")
        .then(res => res.json())
        .then(data => setCollege(data) )
    },[])
    return (
        <div>
            <Container>
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