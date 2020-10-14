import React from 'react';
import FeedBackDetail from '../FeedBackDetail/FeedBackDetail';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

const feedBackData = [
    {
        id: 1,
        img: customer1,
        title: 'Nash Patrik',
        post: 'CEO , Manpal',
    },
    {
        id: 1,
        img: customer2,
        title: 'Mirriam Barron',
        post: 'CEO , Manpal',
    },
    {
        id: 1,
        img: customer3,
        title: 'Bria Malone',
        post: 'CEO , Manpal',
    }
]

const FeedBack = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 style = {{fontWeight: 700}}>Clients <span style = {{color: '#7AB259'}}>Services</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        feedBackData.map(feedBack => <FeedBackDetail feedBack = {feedBack} key = {feedBack.id}></FeedBackDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeedBack;