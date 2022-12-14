import React from 'react';

const Services = ({service,setTreatment}) => {
  const {name,slots}=service;
  return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
  <div class="card-body py-3 ">
    <h2 class="card-title text-primary justify-center mt-2 "> {name}</h2>
    <p>{
        slots.length>0?<span>{slots[0]}</span>: <span className='text-red-600 '>Try another Date</span>
      }</p>
    <p className='mb-2'>{slots.length} {slots.length>1?'spaces':'space'} Available</p>
    <div class="card-actions justify-center">
     
      <label for="booking-modal"
      disabled={slots.length===0} 
      onClick={()=>setTreatment(service)}
      class="btn btn-primary justify-align-center">Book Appoinment</label>
    </div>
  </div>
</div>
    );
};

export default Services;