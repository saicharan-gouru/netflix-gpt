import { useEffect } from "react";
import { Header,Login,Browse } from "./components";
import { Route,Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils";



function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({uid:user.uid,accessToken:user.accessToken,email:user.email}))
      } else {
        dispatch(removeUser())
      }
    });
  },[dispatch])

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
