import React from "react";
import Home from './Component/Home.jsx'
import Today from './Component/Today.jsx'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
     <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/today" element={ <Today />}/>
     </Routes>
  );
};

export default App;
