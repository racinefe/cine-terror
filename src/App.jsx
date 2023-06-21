import { Outlet } from "react-router-dom";

import Footer from "./componentes/Footer";


import "./App.css";


function App() {
  return (
    <div className="app-container">
     
      <Outlet />
      <Footer/>
    </div>
  );
}
//s
export default App;