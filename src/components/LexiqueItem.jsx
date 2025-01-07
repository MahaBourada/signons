import { ExternalLink } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const LexiqueItem = ({ label, link }) => {
    return (
        <Link to={link}>
            <li className='flex flex-row items-center justify-between w-fit bg-main rounded-full text-bodyText py-[1px] px-4 m-2 hover:underline hover:translate-x-[1px] hover:translate-y-[1px]'>
                <p className='m-2'>{label}</p>
                <ExternalLink color="#1F1F1F" className='m-2' />
            </li>
        </Link>
    )
}

export default LexiqueItem