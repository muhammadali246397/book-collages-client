import React from 'react';
import Container from '../Container';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <Container>
                <footer className="footer p-10 bg-base-200 text-base-content">
                    <div>
                        <span className="footer-title text-rose-900">Manu</span>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/colleges'>Colleges</NavLink>
                        <NavLink to='/admission'>Admission</NavLink>
                        <NavLink to='/mycollege'>My College</NavLink>
                    </div>
                    <div>
                        <span className="footer-title text-rose-900">Admission</span>
                        <Link to='/form'>North South University</Link>
                        <Link to='/form'>East West University</Link>
                        <Link to='/form'>Independent University, Bangladesh</Link>
                        <Link to='/form'>Ahsanullah University of Science and Technology</Link>
                        <Link to='/form'>Daffodil International University</Link>
                    </div>

                    <div>
                        <span className="footer-title text-rose-900">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn bg-rose-700 text-white hover:bg-pink-950 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>

        </div>
    );
};

export default Footer;