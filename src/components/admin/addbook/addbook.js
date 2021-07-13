import React from 'react';
import './addbook.css';

export default function AddBook(){

    const addBook = () => {}

    return(
        <div className="admin-add-book-div">
            <form onSubmit={addBook}  className="col-md-6 col-sm-sm-8 col-10 m-2">
                <h3>Upload Book</h3>
                <div class="form-group">
                    <label for="bookName">Book name</label>
                    <input type="text" class="form-control" id="bookName" aria-describedby="emailHelp"
                    placeholder="Book Name" required/>
                </div>
                <div class="form-group">
                    <label for="author">Author</label>
                    <input type="text" class="form-control" id="author" aria-describedby="emailHelp"
                    placeholder="Author" required/>
                </div>
                <div class="form-group">
                    <label for="edition">Edition</label>
                    <input type="text" class="form-control" id="edition" aria-describedby="emailHelp" 
                    placeholder="Edition" required/>
                </div>
                <div class="mb-3">
                    <label for="tags">Tags</label>
                    <textarea class="form-control" id="tags" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="subjects">Subjects</label>
                    <textarea class="form-control" id="subjects" required></textarea>
                </div>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="validatedCustomFile" required />
                    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                </div>
                <div className="div-btn m-2">
                    <button type="submit" class="btn btn-warning">Submit</button>
                </div>
            </form>
        </div>
    )
}