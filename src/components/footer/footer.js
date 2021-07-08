import React from 'react';
import './footer.css';

export default function Footer(){
    return(
        <div className="container-fluid back-footer">
            <div className="row">
                <div className="col-md-4 col-sm-12 mb-2">
                    <img src="" alt="logo"></img>
                </div>
                {/* align-left class is used for responsiveness */}
                <div className="col-md-4 col-sm-12 mb-2">
                    <p align="center" className="align-left">Made with love &hearts; for and by the students of Tezpur University</p>
                </div>
                <div className="col-md-4 col-sm-12 mb-2">
                    <ul style={{listStyle:"none"}} align="right" className="align-left">
                        <li><b>Contact us</b></li>
                        <li>tubooks@gmail.com</li>
                        <li>+91-1234567890</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}