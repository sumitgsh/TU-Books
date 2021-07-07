import React from 'react';
import './home.css';
import Navbar from '../navbar/navbar';
import Search from '../search/search';
import Topics from '../topics/topics';
import Footer from '../footer/footer';

export default function Home() {

    return (
        <div className='background'>
            <Navbar />
            <Search />
            <Topics />
            <Footer />
        </div>
    )
}