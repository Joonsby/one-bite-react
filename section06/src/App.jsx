import { useState } from 'react'
import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';

function App() {
  const [number,setNumber] = useState(0);  

  return (
    <div style={{padding:'5%'}}>
      <h1>Simple Counter</h1>
      <Viewer number={number}/>
      <Controller/>
    </div>
  )
}

export default App
