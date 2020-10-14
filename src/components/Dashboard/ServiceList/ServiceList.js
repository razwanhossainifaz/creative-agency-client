import React from 'react';
import service1 from '../../../images/icons/service1.png';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8" style = {{backgroundColor: '#F4F7FC' , height: '950px' , marginLeft: '350px'}}>
                    <h1 className = 'mt-3 mb-3'>Order</h1>
                    <div className="customFormStyle">
                    <div className="bg-white p-5">
                        <div className="">
                            <img src={service1} alt="" />
                            <h3>Web and Mobile design</h3>
                            <p className="text-secondary">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;