'use client'
import React, { useState } from 'react'

import { usePathname } from 'next/navigation'
export default function Navbar() {
    const [btnClick, setBtnClick] = useState(false)
    const router = usePathname()
  return (
    <header className='sticky md:max-w-screen-xl border-b w-full top-0 bg-white shadow-sm m-auto'>
    <nav className='flex justify-between p-4  items-center relative'>
        <button className='p-2 md:hidden outline-none hover:outline-gray-200 rounded-lg' onClick={() => setBtnClick(!btnClick)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.999 12.876c-.036 0-.105-.046-.222-.26a7.531 7.531 0 0 0-1.975-2.353A8.255 8.255 0 0 0 7.7 9.065a17.945 17.945 0 0 0-.345-.136c-1.012-.4-2.061-.813-3.035-1.377a8.982 8.982 0 0 1-.32-.19c.194-.34.42-.665.67-.962a6.055 6.055 0 0 1 1.253-1.131a7.126 7.126 0 0 1 1.618-.806c1.218-.434 2.677-.647 4.458-.649c1.783.002 3.241.215 4.459.65a7.097 7.097 0 0 1 1.619.805a6.08 6.08 0 0 1 1.253 1.13c.25.298.475.623.67.963c-.103.064-.212.129-.32.192c-.976.564-2.023.977-3.037 1.376l-.345.136a8.26 8.26 0 0 0-2.1 1.198a7.519 7.519 0 0 0-1.975 2.354c-.117.213-.187.259-.224.259m0 7.072c-1.544-.002-2.798-.129-3.83-.387c-1.013-.252-1.855-.64-2.576-1.188a5.792 5.792 0 0 1-1.392-1.537a7.607 7.607 0 0 1-.81-1.768a10.298 10.298 0 0 1-.467-2.983c0-.674.047-1.313.135-1.901c1.106.596 2.153.895 3.08 1.16l.215.06c1.29.371 2.314.857 3.135 1.488c.475.368.89.793 1.23 1.264c.369.508.663 1.088.877 1.725c.096.289.2.468.403.468c.207 0 .308-.18.405-.468a6.124 6.124 0 0 1 2.107-2.988c.82-.632 1.845-1.118 3.135-1.489l.216-.06c.926-.265 1.973-.564 3.078-1.16c.09.589.136 1.227.136 1.9c0 .458-.046 1.664-.465 2.984a7.626 7.626 0 0 1-.809 1.768a5.789 5.789 0 0 1-1.396 1.537c-.723.548-1.565.936-2.574 1.188c-1.035.258-2.288.385-3.833.387m9.692-14.556c-1.909-2.05-4.99-2.99-9.692-2.995c-4.7.005-7.781.944-9.69 2.994C.89 6.913 0 9.018 0 11.874c0 1.579.39 5.6 3.564 7.676c1.9 1.242 4.354 2.046 8.435 2.052c4.083-.006 6.536-.81 8.437-2.052C23.609 17.474 24 13.452 24 11.874c0-2.848-.897-4.968-2.31-6.483Z"/></svg>
        </button>
        <h1 className='text-2xl'>Mazda <i className='font-bold'>RX-7</i></h1>
        
        <ul className={`md:flex text-gray-600 gap-4  absolute left-0 right-0 justify-center bg-white md:bg-none flex-col md:flex-row p-4 md:p-0 translate-y-32 md:translate-y-0 w-full md:w-fit md:static border-2 md:border-none items-center ${btnClick ? 'flex' : 'hidden'}`}>
            <li className={router == '/'? 'text-bold text-black font-semibold':""}><a href="">Home</a></li>
            <li className={router == '/bodykit'? 'text-bold text-black font-semibold':""}><a href="">Bodykit</a></li>
            <li className={router == '/spareparts'? 'text-bold text-black font-semibold':""}><a href="">Spare Parts</a></li>
            <li className={router == '/engine'? 'text-bold text-black font-semibold':""}><a href="">Engine</a></li>
            <li className={router == '/events'? 'text-bold text-black font-semibold':""}><a href="">Events</a></li>
        </ul>
        <div className=' gap-4 font-normal items-center hidden sm:flex'>
            <a className='text-gray-700 underline' href="">Sign In</a>
            <a href="" className='bg-black rounded-full text-white py-1 px-4'>Sign Up</a>
        </div>
    </nav>
    </header>
  )
}
