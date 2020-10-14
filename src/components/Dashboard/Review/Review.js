import React from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <section>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div style = {{marginLeft: '350px' , backgroundColor: '#F4F7FC' , height: '950px'}} className="col-md-8">
            <h2 className="pt-5 ml-5" >Review</h2>
                <ReviewDetail></ReviewDetail>
            </div>
        </section>
    );
};

export default Review;