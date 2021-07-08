import React from 'react';
import './bookcover.css';

export default function BookCover(props){
    return(
        <div className="col-md-6 col-12">
            <div className="cover-div">
                <div className="cover-img-div">
                    <img src={props.img} alt="cover"></img>
                </div>
                <div className="cover-details-div">
                    <p>{props.name}</p>
                    <p>Author: {props.author}</p>
                    <p>Edition: {props.edition}</p>
                </div>
                <div className="cover-actions-div">
                    <button class="btn btn-success mb-2">View</button>
                    <button class="btn btn-success">Download</button>
                </div>
            </div>
        </div>
    )
}