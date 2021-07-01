import React from 'react';
import './search.css';

export default function Search() {

    return (
        <div className="container searchComponent">
            <div className="row  text-left">
                <div className="col align-self-center">
                    <p className="p1">Find your books under-one roof<br/>& no more asking before exam</p>
                    <p className="p2">The quick way to find your book</p>
                </div>
                <div className="col text-right">
                    <img src="" alt="banner"></img>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <div className="searchBtn">
                        <input type="text" placeholder="Search for your book...."></input>
                        <button type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}