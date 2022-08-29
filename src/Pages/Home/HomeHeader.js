import React from 'react';
import chair from '../../assets/images/chair.png'

const HomeHeader = () => {
    return (
        <div class="hero min-h-screen bg-white-200 px-12">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-md rounded-lg shadow-2xl" />
    <div className='px-12'>
      <h2 class="text-7xl font-bold">Your New Smile Starts Here</h2>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white hover:from-pink-500 hover:to-yellow-500">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default HomeHeader;