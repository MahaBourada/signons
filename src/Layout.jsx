import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div className='App flex flex-col min-h-screen bg-bgColor bg-big-screen bg-repeat-y font-main text-blackText leading-10 dark:text-whiteText dark:bg-darkBg'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout