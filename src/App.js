import { Header,Login,Browse } from "./components";
import { Route,Routes } from "react-router-dom";

function App() {
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
