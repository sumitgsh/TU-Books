import React from 'react';
import './footer.css';
import logo from "../../assets/images/Logo.png"

export default function Footer(){
    return(
        <div className="container-fluid back-footer">
            <div className="row mt-5">
                <div className="col-md-2 col-sm-12 col-4 mb-2 logo__con">
                <img src={logo} alt="logo" className="logo"></img>
                </div>
                <div className="col-md-6 col-sm-12 mb-2 col-4 offset-md-1">
                    <p align="center" className="align-center f__message">Made with &hearts; for and by the students of Tezpur University</p>
                </div>
                <div className="col-md-2 col-sm-12 col-4 mb-2">
                    <ul style={{listStyle:"none"}} align="right" className="align-left contacts">
                        <li><b>Contact us</b></li>
                        <li>tubooks@gmail.com</li>
                        <li>+91-1234567890</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}