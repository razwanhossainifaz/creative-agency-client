import React from 'react';
import OrderSubmit from '../OrderSubmit/OrderSubmit';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8" style = {{backgroundColor: '#F4F7FC' , height: '950px' , marginLeft: '350px'}}>
                    <h1 className = 'mt-3 mb-3'>Order</h1>
                    <OrderSubmit></OrderSubmit>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;