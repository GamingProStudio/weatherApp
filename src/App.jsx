import React from "react";
import Home from './Component/Home.jsx'
import Today from './Component/Today.jsx'
import Custom404 from './Component/404.jsx'
import About from './Component/About.jsx'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
     <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/today" element={ <Today />}/>
      <Route path="/about" element={ <About />}/>
      <Route path="*" element={ <Custom404 />}/>
     </Routes>
  );
};

export default App;
