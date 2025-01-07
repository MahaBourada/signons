import React from 'react'

const LexiqueCard = ({ label, desc, bgImg, img }) => {
    return (
        <div className='flex flex-row items-start justify-start w-full bg-contain bg-no-repeat p-4 m-3 ml-6 hover:translate-x-[1px] hover:translate-y-[1px] hover:underline' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='w-[45%]'>
                <h3 className='text-heading font-bold'>{label}</h3>
                <p className='text-bodyText text-justify m-2'>{desc}</p>
            </div>
            <img src={img} width={300} alt="" className='w-fit' />
        </div>
    )
}

export default LexiqueCard