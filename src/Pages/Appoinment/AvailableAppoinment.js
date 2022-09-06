import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared Page/Loading';
import Booking from './Booking';
import Services from './Services';

const AvailableAppoinment = ({date}) => {
    // const [services,setServices]=useState([])

    
    const [treatment,setTreatment]=useState(null)
    const formattedDate = format(date,'PP')
    const {data:services , isLoading} = useQuery(['available',formattedDate], ()=>fetch(`http://localhost:5000/available?date=${formattedDate }`)
    .then(res=>res.json())
    )

    if(isLoading){
        return <Loading></Loading>
    }

    
 
    return (
        <div>
            <h2 className='text-center text-2xl text-primary font-bold '>Availabale Appoinment : {format(date, 'PP')}.</h2>
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