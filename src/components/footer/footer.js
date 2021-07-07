import React from 'react';
import './footer.css';

export default function Footer(){
    return(
        <div className="container-fluid back-footer">
            <div className="row">
                <div className="col-md-5 col-sm-12 mb-2">
                    <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of 
                    a document or a typeface without relying on meaningful content.
                    </p> 
                    <p>&copy; Copyright reserverd 2021</p>
                </div>
                <div className="col-md-3 col-sm-12 mb-2">
                    <ul style={{listStyle:"none"}}>
                        <li>tubooks@gmail.com</li>
                        <li>+91-1234567890</li>
                    </ul>
                </div>
                <div className="col-md-2 col-sm-12 mb-2">
                <ul className="pl-3">
                        <li><a>About</a></li>
                        <li><a>Jobs</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <div className="col-md-2 col-sm-12">
                    <ul className="pl-3">
                        <li><a>Contact us</a></li>
                        <li><a>Terms</a></li>
                        <li><a>Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}