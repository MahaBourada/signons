import React from 'react'
import ZoomFunc from '../components/ZoomFunc'

const MissingPage = () => {
  return (
    <main className='flex-grow mx-24'>
      <h1 className='text-display font-bold'>Page introuvable...</h1>
      <img src="/images/404.png" width={550} alt="Page introuvable" className='p-3 m-auto' />

      <ZoomFunc />
    </main>
  )
}

export default MissingPage