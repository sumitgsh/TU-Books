import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <div className=' nav d-flex justify-content-between'>
            <p><Link to="/" className="link">TU Books</Link></p>
            <div>
                <span><Link to="/books" className="link">Books</Link></span>
                <span><Link to="/about" className="link">About</Link></span>
            </div>  
        </div>
    )
}