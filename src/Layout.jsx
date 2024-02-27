import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-[#151C1A] text-white'>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Layout