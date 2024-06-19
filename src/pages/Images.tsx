import { useState, useEffect } from 'react'
import waitSvg from '../assets/3-dots-scale.svg';
import ICoffee from "../types/coffee.type.ts";
import fetchCoffee from '../services/coffee.service.ts';
import Iframe from '../components/Iframe.tsx';
import '../App.css'


function Images() {
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
      <h2>Image</h2>
      <div>
        <img src={(coffee.file ?? '')} className='image' />
      </div>
      <h2>Iframe</h2>
      <div>
        <Iframe link={"https://picsum.photos/400/400"} />
      </div>
    </>
  )
}

export default Images