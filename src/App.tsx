import { useState, useEffect } from 'react'
import waitSvg from './assets/3-dots-scale.svg';
import ICoffee from "./types/coffee.type";
import fetchCoffee from './services/coffee.service';
import './App.css'


function App() {
  const [coffee, setCoffee] = useState<ICoffee>({file:waitSvg});

  useEffect(() => {
    const getCoffee = async () => {
      const images = await fetchCoffee();
      setCoffee(images);
      console.log(images)
    };

    getCoffee();
  }, [])

  return (
    <>
      <h2>Coffee Beans</h2>
      <div className="card">
        <img src={(coffee.file ?? '')} className='image' />
      </div>
    </>
  )
}

export default App