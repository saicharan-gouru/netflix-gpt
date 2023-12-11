import React, { useState,useRef } from 'react';
import { signInValidator,signUpValidator } from '../utils';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
    const [isSignInForm,seIsSignInForm] = useState(true);
    const [error,setError] = useState(null)
    const email = useRef(null)
    const pwd = useRef(null)
    const name = useRef(null)
  


    const buttonHandle = () => {
      if(isSignInForm)
      setError(signInValidator(email.current.value,pwd.current.value))
      else
      setError(signUpValidator(name.current.value,email.current.value,pwd.current.value))


      if(!isSignInForm && error===null){
        createUserWithEmailAndPassword(auth, email.current.value,pwd.current.value)
        .then((userCredential) => {
          // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage)
          // ..
        });
      }
    }

    
    
  return (
    <div>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-banner" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black text-white p-12 w-3/12 my-40 ml-auto mr-auto left-0 right-0 opacity-90 rounded-lg">
            <h1 className=" text-3xl py-4 font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={name} className="p-3 my-4 w-full bg-gray-800" type="text" placeholder="Full Name" />}
            <input ref={email} className="p-3 my-4 w-full bg-gray-800" type="email" placeholder="Email Id" required />
            <input ref={pwd} className="p-3 my-4 w-full bg-gray-800" type="password" placeholder="Password" required />
            <p className="text-red-600 font-bold text-center">{error}</p>
            <button onClick={buttonHandle} className="p-3 my-6 w-full bg-red-700 rounded-lg hover:bg-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={()=>seIsSignInForm(prev => !prev)} className="p-3 cursor-pointer">{isSignInForm?"New to netflix? Sign Up.":"Already registered? Sign in."}</p>
        </form>
    </div>
  )
}

export default Login