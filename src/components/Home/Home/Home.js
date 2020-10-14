import React from 'react';
import ClientInfo from '../ClientInfo/ClientInfo';
import Contact from '../Contact/Contact';
import FeedBack from '../FeedBack/FeedBack';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ClientInfo></ClientInfo>
            <Services></Services>
            <OurWorks></OurWorks>
            <FeedBack></FeedBack>
            <Contact></Contact>
        </div>
    );
};

export default Home;