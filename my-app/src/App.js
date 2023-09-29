import React from 'react';
import { Main } from './Components/Main';
import {Routes, Route,} from 'react-router-dom';
import './Components/style.css';
import { Marvel } from './Components/Marvel';
import Favorites from './Components/Favorites';
import Navbar from './Components/Navbar';



function App() {
  
  return (
<>
    <Navbar /> 
     <Routes>
       <Route path='/'element={<Main/>}/>
       <Route path='/:id' element={<Marvel/>}/>
       <Route path="/favorites" element={<Favorites />} /> 
     </Routes>
   
</>
  )
}

export default App;