import React from 'react';
import './suggestion.css'

export default function Suggestion(){
    return(
        <div className="suggest">
            <div className="suggest-div">
                <h4>Didn't Find Your Books Suggest Us</h4>
                <p>We promise to value your suggestion and respond</p>
                <form>
                    <div>
                        <label for="book-name"><b>Book Name</b></label>
                        <input type="text" name="book-name" id="book-name"></input>
                    </div>
                    <div>
                        <label for="book-author"><b>Book Author</b></label>
                        <input type="text" name="book-author" id="book-author"></input>
                    </div>
                    <div align="center">
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}