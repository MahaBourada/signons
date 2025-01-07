import React from 'react'

const NewsCard = () => {
    return (
        <div className='flex items-start'>
            <div className='text-justify ml-3 mr-5 my-7 leading-7'>
                <h3 className='text-bodyText font-bold'>Cyclone Chido à Mayotte : journée de deuil national</h3>
                <div className='flex flex-col items-end mt-8'>
                    <p className='p-1 px-4 bg-secondary dark:bg-darkSecondary rounded-full w-fit'>Société & Politique</p>
                    <p className='text-end p-1 mx-1'>23/12/2024</p>
                </div>
            </div>

            <img src="/images/NewsPic.png" width={300} alt="Cyclone Chido à Mayotte : journée de deuil national" className='p-2 m-5' />
        </div>
    )
}

export default NewsCard