import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AddServiceDetail from '../AddServiceDetail/AddServiceDetail';

const AddService = () => {
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8" style = {{backgroundColor: '#F4F7FC' , height: '950px' , marginLeft: '350px'}}>
                    <AddServiceDetail></AddServiceDetail>
                </div>
            </div>
        </section>
    );
};

export default AddService;