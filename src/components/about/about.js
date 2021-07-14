import React from 'react';
import './about.css';

export default function About() {
    return (
        <div class="container">
            <div class="row top">
                TU Books is developed with the intention to provide a reliable resource platform where students of the Tezpur University can look for books and preview/download it without searching it on various places on the Internet. It allows the student to have a soft copy of their books which can be accessible from anywhere and can use the platform for reading books.
            </div>
            <h3>Our Contributors</h3>
            <div class="row">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="inner-box">
                            <div class="card-front col1">
                            </div>
                            <div class="card-back">
                                <p>Prince Singh <br />MCA Student</p>
                                <div class="social-media">
                                    <a href="#"><img src="fb.jpg" /></a>
                                    <a href="#"><img src="fb.jpg" /></a>
                                    <a href="#"><img src="fb.jpg" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="inner-box">
                            <div class="card-front col2">
                            </div>
                            <div class="card-back">
                                <p>Sumit Ghosh <br />MCA Student</p>
                                <div class="social-media">
                                    <a href="#"><img src="fb.jpg" /></a>
                                    <a href="#"><img src="fb.jpg" /></a>
                                    <a href="#"><img src="fb.jpg" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="inner-box">
                            <div class="card-front col3">
                            </div>
                            <div class="card-back">
                                <p>Manab Kalyan Saha <br />MCA Student</p>
                                <div class="social-media">
                                    <a href="#"><img src="fb.jpg" /></a>
                                    <a href="#"><img src="fb.jpg" /></a>
                                    <a href="#"><img src="fb.jpg" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}