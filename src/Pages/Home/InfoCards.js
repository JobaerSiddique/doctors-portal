import React from 'react';

const InfoCards = ({img,cardTitle,cardDes,bgColor}) => {
    return (
        <div class={`card lg:card-side bg-base-100  shadow-xl px-12 ${bgColor}`}>
  <figure><img className='mt-5' src={img} alt="Album"/></figure>
  <div class="card-body px-12 ">
    <h5 class="card-title text-white">{cardTitle}</h5>
    <p class='text-white'>{cardDes}</p>
    
    
  </div>
</div>
    );
};

export default InfoCards;