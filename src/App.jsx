import React from "react";
import Home from './Component/Home.jsx'
import Today from './Component/Today.jsx'
import Lost from './Component/Lost.jsx'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
     <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/today" element={ <Today />}/>
      <Route path="*" element={ <Lost />}/>
     </Routes>
  );
};

export default App;
