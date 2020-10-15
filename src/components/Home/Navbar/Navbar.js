import React, { useContext } from 'react';
import logo from '../../../images/logos/logo.png';
import {Link} from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <img style = {{width: "300px" , height: '80px'}} className = 'mr-auto img-fluid ml-5 mt-3' src={logo} alt=""/>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/dashboard/order">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Contact Us</a>
                    </li>
                    {
                        loggedInUser.email ? <p className="ml-2 mt-2"><strong>{loggedInUser.name}</strong></p> : 
                        <>
                            <Link to = '/login'>
                                <button style ={{backgroundColor: '#111430' , color: "white" , border: 'none' ,}} className = 'btn btn-primary pr-4 pl-4'>Login</button>
                            </Link>
                        </>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;