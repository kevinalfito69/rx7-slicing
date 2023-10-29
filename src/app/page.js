import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
<Navbar/>

<main className="grid min-h-screen grid-cols-1 lg:grid-cols-3  gap-4  md:px-24 py-2 md:py-4 justify-between max-w-screen-xl m-auto">

<div className='grid md:col-span-2 px-2 md:px-8'>
<div className="bg-black rounded-2xl px-6 py-4 flex max-h-28 md:max-h-52 justify-between ">
    <h4 className='text-white text-sm md:text-[35px] md:leading-10'>
      <span className='text-lg'>with an</span> <span className='block font-bold'>Aero Dynamic </span>Bodykit
    </h4>
    <Image className='w-7/12' width={300}
      height={600} src="/img/sidebody.png" alt="rx7"/>
    </div>
    <h2 className='text-2xl md:text-[40px] uppercase font-extrabold'>the power of Mazda to present an overpowering JDM car</h2>
    <p className='text-sm md:text-base text-gray-600'>The Mazda RX-7 is a two-door sports car known for its aerodynamic design and unique rotary engine. The rotary engine, often called the rotary engine, is a characteristic of the RX-7 that sets it apart from most other cars. A rotary engine is a type of engine that uses a rotating triangular rotor to produce power, giving the car fast and responsive acceleration.</p>
    <div className='flex gap-4 mt-4'>
      <a href="" className='border-4 max-h-11 md:max-h-20 border-black rounded-full w-full justify-center flex items-center p-4 text-sm  md:text-xl'>See our Garage</a>
      <a href="" className=' max-h-11 md:max-h-20 bg-black text-white rounded-full w-full justify-center flex items-center p-4 text-sm  md:text-xl'>Buy <span className='font-bold italic'>RX-7</span></a>
    </div>
    <p className='font-semibold mt-4'>
    <span className='text-4xl font-bold block'> 255 HP</span>
Equipped with a 13B-REW rotary engine
    </p>
</div>
<div className='grid justify-center gap-2'>
  
  <Image width={350} height={350} alt="1" src="/img/1.png"/>
  <Image width={350} height={350} alt="1" src="/img/2.png"/>
  <Image width={350} height={350} alt="1" src="/img/3.png"/>
</div>
    </main>
    </>
  )
}
