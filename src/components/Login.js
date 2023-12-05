import React, { useState } from 'react'

const Login = () => {
    const [isSignInForm,seIsSignInForm] = useState(true);
  return (
    <div>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-banner" />
        </div>
        <form className="absolute bg-black text-white p-12 w-3/12 my-40 ml-auto mr-auto left-0 right-0 opacity-90 rounded-lg">
            <h1 className=" text-3xl py-4 font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input className="p-3 my-4 w-full bg-gray-800" type="text" placeholder="Full Name" />}
            <input className="p-3 my-4 w-full bg-gray-800" type="email" placeholder="Email Id" />
            <input className="p-3 my-4 w-full bg-gray-800" type="password" placeholder="Password" />
            <button className="p-3 my-6 w-full bg-red-700 rounded-lg hover:bg-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={()=>seIsSignInForm(prev => !prev)} className="p-3 cursor-pointer">{isSignInForm?"New to netflix? Sign Up.":"Already registered? Sign in."}</p>
        </form>
    </div>
  )
}

export default Login