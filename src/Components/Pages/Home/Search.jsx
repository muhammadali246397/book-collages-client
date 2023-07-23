
import React from 'react';
import Container from '../../SharePage/Container';

const Search = () => {
    return (
        <div className='my-10'>
            <Container>
               <div className='w-1/3 mx-auto'>
               <input className='border px-4 py-2' type="text"  placeholder='Search collages'/>
               <button className=' mx-4 border bg-[#9f1239] hover:bg-pink-950 active:bg-pink-950 text-white px-4 py-2'>Search</button>
               </div>
            </Container>
        </div>
    );
};

export default Search;