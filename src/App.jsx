import { Outlet } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";


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