import React from 'react';
import { Main } from './Components/Main';
import {Routes, Route,} from 'react-router-dom';
import './Components/style.css';
import { Marvel } from './Components/Marvel';


function App() {
  return (
<>
     <Routes>
       <Route path='/'element={<Main/>}/>
       <Route path='/:id' element={<Marvel/>}/>
       <Route path="/" element={<Main />} />
     </Routes>
   
</>
  )
}

export default App;