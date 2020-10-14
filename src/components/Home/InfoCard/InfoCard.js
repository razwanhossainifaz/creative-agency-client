import React from 'react';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-2">
            <div className={`d-flex`}>
                <img style = {{width: '200px' , height: '85px'}} className = 'img-fluid mt-5 mb-5 p-3' src={info.img} alt=""/>
            </div>
        </div>
    );
};

export default InfoCard;