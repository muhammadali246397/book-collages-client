import React, { useContext } from 'react';
import Container from '../Container';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const handlelogout = () => {
        logOut();
    }
    
    const navItem = <>
       <li className='mx-4 '><NavLink to='/'>Home</NavLink></li>
       <li className='mx-4 '><NavLink to='/colleges'>Colleges</NavLink></li>
       <li className='mx-4 '><NavLink to='/admission'>Admission</NavLink></li>
       <li className='mx-4 '><NavLink to='/mycollege'>My College</NavLink></li>
       
       {
        user?<>
        <li className='mx-4 '><button onClick={handlelogout}>Logout</button></li>
        <li></li>
        </>:<>
        <li className='mx-4 '><NavLink to='login'>Login</NavLink></li>
        </>
       }
    </>
    return (
        <div>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItem}
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">BOOKINGS</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                         {navItem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="">{user?.email}</a>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Navbar;