import { Outlet } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";


import "./App.css";


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}
//s
export default App;