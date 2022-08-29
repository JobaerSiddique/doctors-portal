import React from 'react';
import Navbar from '../Shared Page/Navbar';
import HomeHeader from './HomeHeader';
import Info from './Info';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeHeader></HomeHeader>
            <Info></Info>
        </div>
    );
};

export default Home;