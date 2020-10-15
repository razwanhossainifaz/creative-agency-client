import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import MakeAdminDetail from '../MakeAdminDetail/MakeAdminDetail';

const MakeAdmin = () => {
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div style = {{backgroundColor: '#F4F7FC' , height: '950px' , marginLeft: '350px'}} className="col-md-8">
                    <MakeAdminDetail></MakeAdminDetail>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;