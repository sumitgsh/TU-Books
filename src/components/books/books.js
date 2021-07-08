import React from 'react';
import './books.css';
import BookCover from '../bookcover/bookcover';

export default function Books(){
    return(
        <div className="container-fluid mx-2 my-5">
            <div className="row">
                <div className="col-lg-2 col-12">
                    <h5>Filter your books</h5>
                    <p>Filter by:</p>
                    <form className="sgForm">
                        <div className="pr-2 py-1">
                            <label for="author-name">Author Name:</label>
                            <select name="author-name" id="author-name">
                                <option></option>
                                <option>option 1</option>
                                <option>option 2</option>
                            </select>
                        </div>
                        <div className="pr-2 py-1">
                            <label for="book-title">Book title:</label>
                            <select name="book-title" itemID="book-title">
                                <option></option>
                                <option>option 1</option>
                                <option>option 2</option>
                            </select>
                        </div>
                        <div className="pr-2 py-1">
                            <label for="subject">Subject:</label>
                            <select name="subject" name="subject">
                                <option></option>
                                <option>option 1</option>
                                <option>option 2</option>
                            </select>
                        </div>
                        <div className="pr-2 py-1" align="center">
                            <button type="submit" className="button-suggest">Search</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-10 col-12">
                    <h5>Search Results:</h5>
                    <div className="row">
                        <BookCover name="Introduction to Software Engineering" author="Rajib Mall" edition="4th" img="" link="ss"/>
                        <BookCover name="Database Management System with MySQL" author="Dannis Ritchie" edition="5th" img="" link="ss"/>
                        <BookCover name="Programming in C" author="E Balaguruswamy" edition="2nd" img="" link="hi5"/>
                        <BookCover name="Programming in Java" author="E Balaguruswamy" edition="2nd" img="" link="ss"/>
                        <BookCover name="Data Mining and Data Warehousing" author="Prateek Bhatia" edition="1st" img="" link="ss"/>
                    </div>
                </div>
            </div>
        </div>
    )
}