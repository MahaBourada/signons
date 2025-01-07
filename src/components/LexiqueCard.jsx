import React from 'react'

const LexiqueCard = ({ label, desc, img }) => {
    return (
        <div className={`flex bg-[url(${img})] bg-contain bg-no-repeat`}>
            <div className='w-1/4'>
                <h3 className='text-heading font-bold'>{label}</h3>
                <p className='text-bodyText text-justify'>{desc}</p>
            </div>
            <img src="/images/AlphabetPic.png" alt="" />
        </div>
    )
}

export default LexiqueCard