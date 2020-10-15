import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import google from '../../../images/logos/google.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const infosData = [
    {
        id: 1,
        img: slack
    },
    {
        id: 2,
        img: google
    },
    {
        id: 3,
        img: uber
    },
    {
        id: 4,
        img: netflix
    },
    {
        id: 5,
        img: airbnb
    },
]

const ClientInfo = () => {
    return (
        <section className="d-flex container text-center">
            {
                infosData.map(info => <InfoCard info = {info} key = {info.id}></InfoCard>)
            }
        </section>
    );
};

export default ClientInfo;