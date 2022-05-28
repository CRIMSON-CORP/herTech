import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons"



export default function Signup() {
  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
    <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
      <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
      <p className='text-black text-sm font-medium text-center mt-1.5'>You're 1-click away from creating an account</p>

      <input type="email" placeholder='email address' className='w-full h-9 rounded-lg border-2 border-gray-300 px-6 mt-4' />
      <input type="password" placeholder='password' className='w-full h-9 rounded-lg border-2 border-gray-300 px-6 mt-4'  />

      <button className='w-full h-9 rounded-lg bg-black text-white font-bold text-md mt-5'>Create account</button>
      <p className=' text-center mt-4 font-medium text-base text-gray-600'>OR</p>
      
      <button className='w-full h-9 rounded-lg bg-gray-300 text-black font-normal text-base mt-4'><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Continue with Google</button>
      <button className='w-full h-9 rounded-lg bg-gray-300 text-black font-normal text-base mt-4'><FontAwesomeIcon icon={faLinkedin} className = "text-[#2D6EAE]"></FontAwesomeIcon> Continue with LinkedIn</button>
      <p className='text-center mt-4 text-gray-700 font-medium'>Already have an account? <Link to='/login'><span className='font-bold text-black'>Login</span></Link></p>
    </div>
    </div>
  )
}