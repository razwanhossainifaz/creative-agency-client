import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    return (
        <section>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div style = {{marginLeft: '350px' , backgroundColor: '#F4F7FC' , height: '950px'}} className="col-md-8">
                <ServiceDetail></ServiceDetail>
            </div>
        </section>
    );
};

export default Service;