import React from 'react';
import './search.css';
import banner from '../../assets/images/banner.png';

export default function Search() {

    return (
        <div className="container-fluid py-1">
            <div className="row text-center">
                <div className="col-md-7 col-sm-12 align-self-center text-left p-5">
                    <p className="p1">Find your books under-one roof.<br/>No more asking <span>Before exam</span></p>
                    <p className="p2">The quick way to find your book</p>
                </div>
                <div className="col-md-5 text-center banner-div">
                    <img className="align-self-center sideimg" src={banner} alt="banner"></img>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-7 col-sm-10 p-5">
                    <div className="rounded-pill searchBtn">
                        <input type="text" placeholder="Search for your book...."></input>
                        <button type="button" className="rounded-pill">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}