import React from 'react'
import LexiqueCard from '../components/LexiqueCard'
import { Link } from 'react-router-dom'
import ZoomFunc from '../components/ZoomFunc'

const LexiquePage = () => {
  return (
    <main className='flex-grow mx-24'>
      <div className='w-3/4 mb-6'>
        <h1 className='text-heading font-bold'>Lexique de la Langue des Signes Française (LSF)</h1>
        <p className='text-bodyText text-justify m-2'>Cette section est dédiée à l'apprentissage des bases essentielles de la LSF. Que vous soyez débutant ou que vous souhaitiez approfondir vos connaissances, vous y trouverez des ressources clés pour explorer cette langue visuelle et riche de sens.</p>
      </div>

      <div className='flex flex-row items-center justify-around my-14 ml-14'>
        <Link to="/lexique/alphabet">
          <LexiqueCard label="Alphabet" desc="Découvrez comment signer chaque lettre de l'alphabet et apprenez à épeler des mots ou des noms." bgImg="src/assets/vectors/AlphabetShape.svg" img="/images/AlphabetPic.png" />
        </Link>

        <Link to="/lexique/vocabulaire">
          <LexiqueCard label="Vocabulaire" desc="Familiarisez-vous avec des mots et expressions courants pour communiquer efficacement dans la vie quotidienne." bgImg="src/assets/vectors/VocabulaireShape.svg" img="/images/VocabulairePic.png" />
        </Link>
      </div>
      
      <ZoomFunc />
    </main>
  )
}

export default LexiquePage