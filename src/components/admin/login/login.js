import React from 'react';
import './login.css';

export default function Login(){

    const loginAdmin = (e) => {
        e.preventDefault();
    }

    return(
        <div className="admin-login-div">
            <form onSubmit={loginAdmin}  className="col-md-4 col-sm-sm-8 col-10">
                <h3>Admin Login</h3>
                <div class="form-group">
                    <label for="userNameAdmin">Username</label>
                    <input type="text" class="form-control" id="userNameAdmin" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="adminPassword">Password</label>
                    <input type="password" class="form-control" id="adminPassword" />
                </div>
                <div className="div-btn">
                    <button type="submit" class="btn btn-warning">Submit</button>
                </div>
            </form>
        </div>
    )
}