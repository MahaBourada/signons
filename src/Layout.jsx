import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div className='App flex flex-col min-h-screen bg-background bg-big-screen bg-repeat-y font-main text-blackText leading-10'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout