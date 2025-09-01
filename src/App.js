
import './index.css'
import React from 'react';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Sidebar from './Components/Assets/Sidebar';
function App() {
  return (
    <div className="App">
       {/* <BrowserRouter>
        <Routes>
          <Route/>
        </Routes>
       </BrowserRouter> */}
        <Sidebar/>
    </div>
  );
}

export default App;
