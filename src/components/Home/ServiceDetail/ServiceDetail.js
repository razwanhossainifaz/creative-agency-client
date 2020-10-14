import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{width: '100px' , height: '90px'}} className = 'img-fluid' src={service.img} alt="" />
            <h5 className="mt-3 mb-3 p-2">{service.title}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;