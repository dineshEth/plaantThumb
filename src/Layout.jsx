import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'

const Layout = () => {
  return (
    <div className='bg-[#151C1A] text-white'>
    <Header />
    {/* <Navbar /> */}
    <Outlet />
    <Footer />
    </div>
  )
}

export default Layout