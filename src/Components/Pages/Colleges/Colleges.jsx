import React, { useEffect, useState } from 'react';
import AllCollegeCard from './AllCollegeCard';

const Colleges = () => {
    const [allCollege, setAllCollege] = useState();
    console.log(allCollege)
    useEffect(() => {
        fetch('https://book-college-server.vercel.app/allColleges')
        .then(res => res.json())
        .then(data => setAllCollege(data))
    },[])
    return (
        <div>
            {
                allCollege?.map(college => <AllCollegeCard 
                key={college._id}
                college={college}
                ></AllCollegeCard>)
            }
        </div>
    );
};

export default Colleges;