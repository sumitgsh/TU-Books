import React from 'react';
import './home.css';
import Navbar from '../navbar/navbar';
import Search from '../search/search';
import Topics from '../topics/topics';

export default function Home() {

    return (
        <div className='background'>
            <Navbar />
            <Search />
            <Topics />
        </div>
    )
}