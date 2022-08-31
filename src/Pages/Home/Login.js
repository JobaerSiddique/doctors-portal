
import React from 'react';
import { useSignInWithGoogle,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebaseinit';
import Loading from '../Shared Page/Loading';
import Navbar from "../Shared Page/Navbar"

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth); 
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  const navigate=useNavigate()
  const location = useLocation()

  let from= location.state?.from?.pathname || "/appoinment"
  const onSubmit = (data) => {
    
    signInWithEmailAndPassword(data.email,data.password) 
    navigate('/appoinment')
    

  }
  let signInError;
  
   if(gLoading || loading){
    return <Loading></Loading>
    
   }
   if(error || gError){
    
        signInError=<p class='text-red-600 font-bold'>{error?.message||gError.message}</p>
      
   }
   if(gUser || user){
    navigate (from ,{repalce:true})
   }
   
   

  return (
        <>
        <Navbar></Navbar>
        
      <div className='flex justify-center  items-center h-screen'>
            
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl font-bold ">Login</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    
    
    
    <div class="form-control w-full max-w-xs">
    <label class="label">
    <span class="label-text">E-Mail</span>
    
  </label>
  <input 
  type="email"
  placeholder="Enter Your E-Mail" 
  class="input input-bordered w-full max-w-xs" 
  {...register("email", {
    required:{
      value:true,
      message:'Email is required'
    },
    pattern: {
     value: /[A-Za-z]{3}/,
    message:'Provide a Vaild Email'
    }
  })}
 
  />
   <label class="label">
   {errors.email?.type === 'required' && <span className='text-red-500 '>{errors.email.message}</span>}
   {errors.email?.type === 'pattern' && <span className='text-red-500 '>{errors.email.message}</span>}
   </label>
  
</div>
<div class="form-control w-full max-w-xs">
<label class="label">
    <span class="label-text">Password</span>
    
  </label>
  <input 
  type="password"
  placeholder="Enter Your password" 
  class="input input-bordered w-full max-w-xs" 
  {...register("password", {
    required:{
      value:true,
      message:'password is required'
    },
    minLength: {
      value:6,
     message:'Must a have 6 character or longer'
    }
  })}
 
  />
   <label class="label">
   {errors.password?.type === 'required' && <span className='text-red-500 '>{errors.password.message}</span>}
   {errors.password?.type === 'minLength' && <span className='text-red-500 '>{errors.password.message}</span>}
   </label>
</div>
     {signInError}
      
      <input class='btn  w-full max-w-xs  text-white ' type="submit" value="Login"  />
    </form>
    <p>New to Doctors Portal? <Link class="text-primary" to="/register">Create New Account</Link></p>
    <div class="divider">OR</div>
    <button
    onClick={() => signInWithGoogle( )}
    class="btn btn-outline">Continue With Google</button>
   
    
  </div>
</div>

  
        </div>
        </>
        
    );
};

export default Login;