import React from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faShoppingCart, faTaxi, faCommentDots, faPlus, faUserShield } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    return (
        <div>
                <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
                <img style = {{width: "200px" , height: '60px'}} className = 'mr-auto img-fluid  mt-3' src={logo} alt=""/>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/dashboard/order" className="text-white">
                                <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/servicelist" className="text-white">
                                <FontAwesomeIcon icon={faTaxi} /> <span>Service list</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/review" className="text-white">
                                <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/servicelists" className="text-white">
                                <FontAwesomeIcon icon={faTaxi} /> <span>Service list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addservices" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/ad" className="text-white" >
                            <FontAwesomeIcon icon={faUserShield} /> <span>Make Admin</span>
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                    </div>
                </div>
        </div>
    );
};

export default Sidebar;