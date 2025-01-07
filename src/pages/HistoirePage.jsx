import React from 'react'
import HistoireCard from '../components/HistoireCard'

const HistoirePage = () => {
  return (
    <main className='flex-grow mx-24 grid grid-cols-2 justify-items-center gap-y-16'>
        <HistoireCard />
        <HistoireCard />
        <HistoireCard />
        <HistoireCard />
    </main>
  )
}

export default HistoirePage