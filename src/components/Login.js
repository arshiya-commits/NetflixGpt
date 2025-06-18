import React from 'react';
import Header from '../components/Header'
import {useState,useRef} from 'react'
import validate from '../utils/validate';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  updateProfile } from "firebase/auth";
import { BG_IMG } from '../utils/constants';
const Login=()=>{
    const[isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate()
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null)
    const handleButtonClick=()=>{
        console.log(email.current.value);
        console.log(password.current.value);
       

        const message=validate(email.current.value,password.current.value);
        console.log(message)
        setErrorMessage(message);
        if(message) return
        if(!isSignInForm){
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName:name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        
      }).catch((error) => {
        setErrorMessage(error.message)
      });

    console.log(user);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage)
    // ..
  });

        }
        else{
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage)
  });

        }

        
    }
    const toggleSignINForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-10"></div>
        {/*logo*/}
        <div className='relative z-10'>
           <Header/>
        </div>
       {/* Background Image */}
        <div className='absolute top-0 left-0 w-full h-full -z-20'>
            <img src={BG_IMG} alt="bg-img"
            className='w-full h-full object-cover'></img>
        </div>
        {/*form */}
        <div className='flex items-center justify-center h-screen z-20 '>
        <form  className='bg-black bg-opacity-85 p-12 rounded-md text-white w-full max-w-md ' onSubmit={(e)=>{e.preventDefault()}}>
            <h1 className='text-3xl font-bold mb-10'>{isSignInForm? "Sign In" : "Sign UP"}</h1>
           {!isSignInForm && (<input type='text' ref={name} placeholder='Full Name' className='w-full p-3 mb-10 bg-gray-700 rounded'></input>)}
            <input type='text' placeholder='Email or mobile number' className='w-full p-3 mb-10 bg-gray-700 rounded' ref={email}></input>
            <input type='password' placeholder='Password' className='w-full p-3 mb-10 bg-gray-700 rounded' ref={password}></input>
            <p className='mb-3 text-red-700'>{errorMessage}</p>
            <button onClick={handleButtonClick} className='w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition'>{isSignInForm? "Sign In" : "Sign UP"}</button>
            <p onClick={toggleSignINForm} className='p-3 cursor-pointer'>{isSignInForm?"new to netflix?Sign up Now":"already a user!Sign In Now"} </p>
        </form>
        </div>
        


        </>
    )
}
export default Login;