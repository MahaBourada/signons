import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import ThemeSwitch from './ThemeSwitch.jsx'

const Header = () => {
    return (
        <header className='flex items-center p-1 m-2 mx-5'>
            <Link to="/" className='p-1 pb-6'>
                <img src={'/vectors/Logo.svg'} width={500} alt="Logo Signons" className='dark:hidden' />
                <img src={'/vectors/DarkLogo.svg'} width={500} alt="Logo Signons" className='hidden dark:block' />
            </Link>

            <SearchBar />

            <nav className='flex justify-between items-center w-[75%] text-bodyText font-bold'>
                <Link to="/origine" className='hover:underline hover:translate-x-[1px] hover:translate-y-[1px]'>
                    Origine
                </Link>
                <Link to="/histoire" className='hover:underline hover:translate-x-[1px] hover:translate-y-[1px]'>
                    Histoire
                </Link>
                <Link to="/lexique" className='hover:underline hover:translate-x-[1px] hover:translate-y-[1px]'>
                    Lexique
                </Link>
                <Link to="/medias" className='hover:underline hover:translate-x-[1px] hover:translate-y-[1px]'>
                    Médias
                </Link>
            </nav>

            <ThemeSwitch />
        </header>
    )
}

export default Header