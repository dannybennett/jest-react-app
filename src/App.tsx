import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ICoffee from "./types/coffee.type";
import fetchCoffee from './services/coffee.service';


function App() {
  const [count, setCount] = useState(0)
  const [coffee, setCoffee] = useState<Array<ICoffee>>([]);

  useEffect(() => {
    const getCoffee = async () => {
      const images = await fetchCoffee();
      setCoffee(images);
    };

    getCoffee();
  }, [])

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="card">
        <img src={coffee.file} />
      </div>
    </>
  )
}

export default App
