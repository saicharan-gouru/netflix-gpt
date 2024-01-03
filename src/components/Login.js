import React, { useState,useRef } from 'react';
import { BACKGROUND_IMAGE_URL, addUser, signInValidator,signUpValidator } from '../utils';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';


const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [error,setError] = useState(null)
    const email = useRef(null)
    const pwd = useRef(null)
    const name = useRef(null)
    
    const dispatch = useDispatch();


    const buttonHandle = () => {
      if(isSignInForm)
      setError(signInValidator(email.current.value,pwd.current.value))
      else
      setError(signUpValidator(name.current.value,email.current.value,pwd.current.value))


      if(!isSignInForm && error===null){
        createUserWithEmailAndPassword(auth, email.current.value,pwd.current.value)
        .then((userCredential) => {
          // Signed up
          const user=userCredential.user
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const {uid,accessToken,email,displayName} = auth.currentUser;
            dispatch(addUser({uid:uid,accessToken:accessToken,email:email,displayName:displayName}))
            
          }).catch((error) => {
            setError(error)
          }); 
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode+ " " +errorMessage)
        });
      }

      if(isSignInForm && error===null){
        signInWithEmailAndPassword(auth, email.current.value,pwd.current.value)
        .then((userCredential) => {
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode+ " " +errorMessage)

        });
      }
    }

    
    
  return (
    <div>
        <div className="absolute">
            <img src={BACKGROUND_IMAGE_URL} alt="background-banner" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black text-white p-12 w-3/12 my-40 ml-auto mr-auto left-0 right-0 opacity-90 rounded-lg">
            <h1 className=" text-3xl py-4 font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={name} className="p-3 my-4 w-full bg-gray-800" type="text" placeholder="Full Name" />}
            <input ref={email} className="p-3 my-4 w-full bg-gray-800" type="email" placeholder="Email Id" required />
            <input ref={pwd} className="p-3 my-4 w-full bg-gray-800" type="password" placeholder="Password" required />
            <p className="text-red-600 font-bold text-center">{error}</p>
            <button onClick={buttonHandle} className="p-3 my-6 w-full bg-red-700 rounded-lg hover:bg-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={()=>{setError(null);setIsSignInForm(prev => !prev)}} className="p-3 cursor-pointer">{isSignInForm?"New to netflix? Sign Up.":"Already registered? Sign in."}</p>
        </form>
    </div>
  )
}

export default Login