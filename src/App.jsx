
import { Outlet } from 'react-router-dom';
import Navbar from './Componentes/Navbar';

import './App.css'


function App() {
  

  return (
    <>
          
      <div className="App">
        <Navbar/>
        <h2>Cine Terror</h2>
        <Outlet/>
      </div>
       
    </>
  );
}

export default App
