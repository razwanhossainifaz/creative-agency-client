import React, { useEffect, useState } from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        id: 1,
        img: service1,
        title: 'Web & Mobile Design',
        description: 'We cruft stunning and amazing web UI , using a well drafted UX to fit your product.'
    },
    {
        id: 2,
        img: service2,
        title: 'Graphic Design',
        description: 'Amazing flyers , social media posts and brand representations that would make your brand stand out.'
    },
    {
        id: 3,
        img: service3,
        title: 'Web Development',
        description: 'With well written codes , we build amazing apps for all platforms , mobile and web apps in general.'
    },
]

const Services = () => {

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 style = {{fontWeight: 700}}>Provide Awesome <span style = {{color: '#7AB259'}}>Services</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.id}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;