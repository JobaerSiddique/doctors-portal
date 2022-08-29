import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from './Services';

const AvailableAppoinment = ({date}) => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-5xl text-primary '>Availabale Appoinment : {format(date, 'PP')}.</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mt-24">
                {
                    services.map(service=><Services
                     key={service._id}
                     service={service}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinment;