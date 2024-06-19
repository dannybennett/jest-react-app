import { useState, useEffect } from 'react'
import waitSvg from './assets/3-dots-scale.svg';
import ICoffee from "./types/coffee.type";
import fetchCoffee from './services/coffee.service';
import Iframe from './components/Iframe.tsx';
import './App.css'


function App() {
  const [coffee, setCoffee] = useState<ICoffee>({ file: waitSvg });

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
      <div>
        <img src={(coffee.file ?? '')} className='image' />
      </div>
      <div>
        <Iframe link={"https://picsum.photos/400/400"} />
      </div>
    </>
  )
}

export default App