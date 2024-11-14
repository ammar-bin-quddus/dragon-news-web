import React from 'react'
import headerLogo from '../assets/logo.png'
import moment from 'moment'

const Header = () => {
  return (
    <div className='w-full my-8 flex flex-col gap-3 justify-center items-center'>
        <img className='w-80' src={headerLogo} alt="" />
        <p className='text-[#706F6F] text-md'>Journalism Without Fear or Favour</p>
        <p className='text-[#706F6F] text-lg font-semibold'>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  )
}

export default Header