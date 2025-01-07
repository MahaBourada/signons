import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const Layout = () => {
  return (
    <div className='App flex flex-col min-h-screen bg-background bg-big-screen bg-repeat-y font-main text-blackText leading-10'>
        <Header />
        <Outlet />
        <footer>Footer</footer>
    </div>
  )
}

export default Layout