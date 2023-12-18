import { useEffect } from "react";
import { Header,Login,Browse } from "./components";
import { Route,Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils";




function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({uid:user.uid,accessToken:user.accessToken,email:user.email,displayName:user.displayName}))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
  },[dispatch,navigate])

  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/browse" element={<Browse/>} />
        </Routes>
    </div>
  );
}

export default App;
