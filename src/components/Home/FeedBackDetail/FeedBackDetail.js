import React from 'react';

const FeedBackDetail = ({feedBack}) => {
    return (
        <div className="col-md-4 text-white">
            <div className="card p-3">
                <div className={'d-flex justify-content-center'}>
                    <div className="mr-3">
                        <img style = {{width: '80px' , height: '80px'}} className = "img-fluid" src={feedBack.img} alt=""/>
                    </div>
                    <div style = {{color: 'black'}} className = 'mt-3'>
                        <h3>{feedBack.title}</h3>
                        <h6>{feedBack.post}</h6>
                    </div>
                </div>
                <p className = 'text-secondary mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium veritatis totam porro alias, libero id molestias corporis. Dicta, vitae?</p>
            </div>
        </div>
    );
};

export default FeedBackDetail;