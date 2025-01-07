import React from 'react'
import HistoireCard from '../components/HistoireCard'
import { Link } from 'react-router-dom'
import ZoomFunc from '../components/ZoomFunc'

const HistoirePage = () => {
  return (
    <main className='flex-grow my-10 mx-24 grid grid-cols-2 place-self-center m-auto gap-y-16'>
      <Link to="/histoire/antiquite">
        <HistoireCard label="Antiquité" desc="L'histoire de la communication gestuelle remonte à l'Antiquité, où les signes étaient utilisés pour pallier les barrièr..." img="/images/Antiquite.png" />
      </Link>

      <Link to="/histoire/chine">
        <HistoireCard label="Chine" desc="Saviez-vous que la langue des signes chinoise (LSC) a des racines profondes dans l'histoire du pays ? Avec des variations ..." img="/images/Chine.png" />
      </Link>

      <Link to="/histoire/etats-unis">
        <HistoireCard label="Etats-Unis" desc="La langue des signes américaine (ASL) est aujourd'hui l'une des langues des signes les plus reconnues au monde..." img="/images/EtatsUnis.png" />
      </Link>

      <Link to="/histoire/japon">
        <HistoireCard label="Japon" desc="Au Japon, la langue des signes japonaise (JSL) est plus qu'un moyen de communication : elle reflète l'harmonie entre..." img="/images/Japon.png" />
      </Link>

      <ZoomFunc />
    </main>
  )
}

export default HistoirePage