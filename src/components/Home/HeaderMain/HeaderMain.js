import React from 'react';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
    <main style = {{height : '800px'}} className = 'row d-flex align-items-center'>
        <div className="col-md-4 offset-md-1">
            <h1 style = {{color: '#203047' , fontSize: '50px' , fontWeight: '800'}}>Let's Grow Your <br/>Brand To The <br/>Next Level</h1>
            <p className = 'text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptatum.<br/>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Quod non in, odit error corrupti illo!</p>
            <button style ={{backgroundColor: '#111430' , color: "white" , border: 'none' ,}} className = 'btn btn-primary pr-5 pl-5'>HIRE US</button>
        </div>
        <div className="col-md-6">
            <img className = 'img-fluid' src={frame} alt="frame"/>
        </div>
    </main>
    );
};

export default HeaderMain;