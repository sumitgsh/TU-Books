import React from 'react';
import './topics.css';
import physics from '../../assets/images/physics.png';
import chemistry from '../../assets/images/chemistry.png';
import economics from '../../assets/images/economics.png';
import maths from '../../assets/images/maths.png';
import biology from '../../assets/images/biology.png';
import sociology from '../../assets/images/sociology.png';

export default function Topcis(){
    
    return(
        <div className="container">
            <div className="row space">
                <h5>Subjects</h5>
            </div>
            <div className="row space my-2">
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={physics} className="topic-logo neo" alt="subject 1"></img>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={chemistry} className="topic-logo neo" alt="subject 2"></img>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={biology} className="topic-logo neo" alt="subject 3"></img>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={maths} className="topic-logo neo" alt="subject 4"></img>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={economics} className="topic-logo neo" alt="subject 5"></img>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={sociology} className="topic-logo neo" alt="subject 6"></img>
                </div>
            </div>
        </div>
    )
}