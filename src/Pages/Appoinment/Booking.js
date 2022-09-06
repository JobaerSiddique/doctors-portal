import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';


import { toast } from 'react-toastify';
import auth from '../../Firebaseinit';
const Booking = ({treatment,date,setTreatment}) => {
   const {_id,name,slots}=treatment;
   const [user] = useAuthState(auth)
   const formattedDate = format(date,"PP")
   const handleOnSubmit = event=>{
      event.preventDefault()
      const slots= event.target.slot.value;
      console.log(_id,name,slots)
      const booking={
        treatmentId:_id,
        treatment:name,
        date:formattedDate,
        slots,
        patientName:user.displayName,
        patient:user.email,
        phone:event.target.phone.value
      }

      fetch('http://localhost:5000/booking',{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.success){
          toast(`Appoinment is succssfully at ${formattedDate} & ${slots}` )
        }
        else{
          toast.error(`Alredy have a appoinment at ${data.booking?.date} & ${data.booking?.slots}` )
        }
      })

      setTreatment(null)
   }
   
   return (
        <div>
          <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold text-primary">Booking For : {name}</h3>
    <form onSubmit={handleOnSubmit} className='mt-5 grid grid-cols-1 gap-5 justify-items-center' >
    <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
    <select name='slot' class="select select-bordered w-full max-w-xs">
  {
    slots.map(slot=><option value={slot}>{slot}</option>)
  }
  
</select>
    <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
    <input type="email" name='email'disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
    
    <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <input type="submit" value="submit" class="btn btn-primary w-full max-w-xs" />
    

    </form>
  </div>
</div> 
        </div>
    );
};

export default Booking;