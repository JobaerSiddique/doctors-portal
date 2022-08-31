import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../Firebaseinit';
import Loading from '../Shared Page/Loading';
import Navbar from '../Shared Page/Navbar';

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth); 
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  // let navigate=useNavigate()
  const onSubmit = async data => {
    
    await createUserWithEmailAndPassword(data.email,data.password) 
    await updateProfile( {displayName: data.name})
    console.log(data)
    
    // navigate('/appoinment')
    

  }
  let signInError;

   if(gLoading || loading|| updating){
    return <Loading></Loading>
    
   }
   if(error || gError||updateError){
    
        signInError=<p class='text-red-600 font-bold'>{error?.message||gError.message}</p>
      
   }
   if(gUser || user){
    console.log(gUser,user)
   }
   
   
   
    
    return (
     <>
      <Navbar></Navbar>
        
        <div className='flex justify-center  items-center h-screen'>
              
              <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="text-center text-2xl font-bold ">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-control w-full max-w-xs">
      <label class="label">
      <span class="label-text">Name</span>
      
    </label>
    <input 
    type="name"
    placeholder="Enter Your Name" 
    class="input input-bordered w-full max-w-xs" 
    {...register("name", {
      required:{
        value:true,
        message:'name is required'
      },
     
    })}
   
    />
     <label class="label">
     {errors.email?.type === 'required' && <span className='text-red-500 '>{errors.name.message}</span>}
     
     </label>
    
  </div>
      
      
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
        
        <input class='btn  w-full max-w-xs  text-white ' type="submit" value="Sign Up"  />
      </form>
      <p>Already have a Account ? <Link class="text-primary" to="/login">Please Login</Link></p>
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

export default Register;