import React from 'react';

const InfoCard = ({info}) => {
    return (
        <div className="my-5">
            <img src={info.img} alt="" style = {{width: '200px' , height: '85px'}} className="ml-3 mr-4" />
        </div>
    );
};

export default InfoCard;