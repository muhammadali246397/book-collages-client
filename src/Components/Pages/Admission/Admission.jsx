import React from 'react';
import Container from '../../SharePage/Container';
import { Link } from 'react-router-dom';

const Admission = () => {
    return (
        <div className='my-20'>
            <Container>
                <div className='text-center bg-slate-300 p-20 text-4xl font-bold bg-opacity-50'>Select Your College For addmission</div>
                <div>
                    <h3 className='font-bold text-4xl my-5 text-center'>Colleges</h3>
                  
                    <li className='my-2 font-bold text-rose-700 hover:text-black'><Link to='/form'>North South University</Link></li>
                    <li className='my-2 font-bold text-rose-700 hover:text-black'><Link to='/form'>East West University</Link></li>
                    <li className='my-2 font-bold text-rose-700 hover:text-black'><Link to='/form'>Independent University, Bangladesh</Link></li>
                    <li className='my-2 font-bold text-rose-700 hover:text-black'><Link to='/form'>Ahsanullah University of Science and Technology</Link></li>
                    <li className='my-2 font-bold text-rose-700 hover:text-black'><Link to='/form'>Daffodil International University</Link></li>
                   
                </div>
            </Container>
        </div>
    );
};

export default Admission;