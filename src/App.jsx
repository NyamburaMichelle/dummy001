import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

function App() {
  const name="Michelle"
const features={
  name:"Angela",
  age: 24,
  parent:"Mrs Hunt"
}

  return (
    <div >
      <h1>GREEN</h1>

      <Navbar features={features} />
    </div>
  );
  
}

export default App;
