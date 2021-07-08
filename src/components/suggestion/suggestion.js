import React from 'react';
import './suggestion.css'

export default function Suggestion(){
    return(
        <div className="suggest">
            <div className="suggest-div">
                <h2 class="text-center">Didn't Find Your Books Write Us!!</h2>
                <p>We promise to value your Suggestion and Respond </p>
                <form>
                    <div class="block">
                        <label for="book-name"><b>Book Name</b></label>
                        <input type="text" name="book-name" id="book-name"></input>
                    </div>
                    <div class="block">
                        <label for="book-author"><b>Book Author</b></label>
                        <input type="text" name="book-author" id="book-author"></input>
                    </div>
                    <div align="center">
                        <button type="submit" className="submit-btn rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}