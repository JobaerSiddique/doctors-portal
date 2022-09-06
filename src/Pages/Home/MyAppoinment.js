import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebaseinit';

const MyAppoinment = () => {
   const [appoinment , setAppoinment]= useState([])
    const [user] = useAuthState(auth) 
   
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=>setAppoinment(data))
       }
    },[user])
    return (
        <div>
            <h1>My Appoinment : {appoinment.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>BOOKING ID</th>
        <th>NAME</th>
        <th>DATE</th>
        <th>TIME</th>
        <th>TREATMENT</th>
      </tr>
    </thead>
    <tbody>
     {
        appoinment.map(a=><tr>
            <th>{a._id}</th>
            <td>{a.patientName}</td>
            <td>{a.date}</td>
            <td>{a.slots}</td>
            <td>{a.treatment}</td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppoinment;