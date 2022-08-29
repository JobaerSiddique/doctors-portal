import React from 'react';
import { format } from 'date-fns';
const Booking = ({treatment,date,setTreatment}) => {
   const {_id,name,slots}=treatment;
   
   const handleOnSubmit = event=>{
      event.preventDefault()
      const slots= event.target.slot.value;
      console.log(_id,name,slots)
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
    <input type="text" name='name' placeholder="Patient's Name" class="input input-bordered w-full max-w-xs" />
    <input type="email" name='email' placeholder="Patient's email" class="input input-bordered w-full max-w-xs" />
    <input type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs" />
    <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <input type="submit" value="submit" class="btn btn-primary w-full max-w-xs" />
    

    </form>
  </div>
</div> 
        </div>
    );
};

export default Booking;