import React from 'react';
import InfoCards from './InfoCards';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 ' >
            <InfoCards bgColor='bg-teal-400' cardDes='asdfsdafrggaegagfgr' cardTitle='Opening Hour' img={clock}></InfoCards>
            <InfoCards bgColor='bg-black'  cardDes='asdfsdafrggaegagfgr' cardTitle='Visit Our Location' img={location}></InfoCards>
            <InfoCards  bgColor='bg-teal-400' cardDes='asdfsdafrggaegagfgr' cardTitle='Contact Us' img={phone}>
            

            </InfoCards>
        </div>
    );
};

export default Info;