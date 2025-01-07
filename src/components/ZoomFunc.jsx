import React from 'react'
import { ZoomIn, ZoomOut } from 'lucide-react'

const ZoomFunc = () => {
    return (
        <div className='flex flex-col fixed bottom-10 left-8'>
            <button type="button" className='hover:translate-x-[1px] hover:translate-y-[1px]'>
                <ZoomOut color="#1F1F1F" size={46} />
            </button>
            <button type="button" className='hover:translate-x-[1px] hover:translate-y-[1px]'>
                <ZoomIn color="#1F1F1F" size={46} />
            </button>
        </div>
    )
}

export default ZoomFunc