import React from 'react'

const NewsCard = () => {
    return (
        <div className='flex items-start'>
            <div className='text-justify m-5 leading-7'>
                <h3 className='text-bodyText font-bold'>Cyclone Chido à Mayotte : journée de deuil national</h3>
                <p className='text-end'>Société & Politique</p>
                <p className='text-end'>23/12/2024</p>
            </div>

            <img src="/images/NewsPic.png" width={300} alt="Cyclone Chido à Mayotte : journée de deuil national" className='p-2 m-5' />
        </div>
    )
}

export default NewsCard