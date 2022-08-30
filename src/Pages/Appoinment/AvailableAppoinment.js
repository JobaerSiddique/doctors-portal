import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import Services from './Services';

const AvailableAppoinment = ({date}) => {
    const [services,setServices]=useState([])
    const [treatment,setTreatment]=useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/service')
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
                     setTreatment={setTreatment}
                    ></Services>)
                }
            </div>
            {treatment && <Booking 
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
            ></Booking>}
        </div>
    );
};

export default AvailableAppoinment;