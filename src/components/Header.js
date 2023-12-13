import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(appStore => appStore.user);


  const signoutHandle = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className="absolute bg-gradient-to-b from-black w-full p-4 z-10 flex justify-between">
        <img  className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {
          user &&
          <div className="flex justify-center items-center  flex-col">
            <button onClick={signoutHandle} className="border-2 border-red-600 p-2 m-2 rounded-lg  text-white">LOG OUT</button>
          </div>
        }
       
    </div>
  )
}

export default Header