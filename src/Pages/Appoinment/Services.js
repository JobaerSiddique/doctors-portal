import React from 'react';

const Services = ({service}) => {
  const {name,slots}=service;
  return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
  <div class="card-body ">
    <h2 class="card-title text-primary justify-center "> {name}</h2>
    <p>{slots.length}{slots.length>1?'spaces':'space'}Available</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary justify-align-center">Book Appoinment</button>
    </div>
  </div>
</div>
    );
};

export default Services;