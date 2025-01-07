import React from 'react'

const HistoireCard = ({ label, desc, img }) => {
    return (
        <div className='m-auto flex items-center w-[85%] bg-[url("assets/vectors/HistoireVector.svg")] dark:bg-[url("assets/vectors/HistoireVectorDark.svg")] bg-contain bg-no-repeat hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer'>
            <div className='p-2 m-2 hover:underline'>
                <h1 className='text-heading font-bold'>{label}</h1>
                <p className='text-bodyText text-justify mx-2'>{desc}</p>
            </div>
            <img src={img} width={225} alt="Carte de l'antiquité" className='p-4 m-1' />
        </div>
    )
}

export default HistoireCard