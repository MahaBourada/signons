import React from 'react'

const HistoireCard = () => {
    return (
        <div className='flex items-center w-[85%] bg-[url("assets/vectors/HistoireVector.svg")] bg-contain bg-no-repeat'>
            <div className='p-2 m-2'>
                <h1 className='text-heading font-bold'>Antiquité</h1>
                <p className='text-justify mx-2'>L'histoire de la communication gestuelle remonte à l'Antiquité, où les signes étaient utilisés pour pallier les barrières ...</p>
            </div>
            <img src="/images/Antiquite.png" width={225} alt="Carte de l'antiquité" className='p-2' />
        </div>
    )
}

export default HistoireCard