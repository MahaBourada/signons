import React from 'react'
import LexiqueCard from '../components/LexiqueCard'

const LexiquePage = () => {
  return (
    <main className='flex-grow mx-24'>
      <h1 className='text-heading font-bold'>Lexique de la Langue des Signes Française (LSF)</h1>
      <p className='text-bodyText text-justify'>Cette section est dédiée à l'apprentissage des bases essentielles de la LSF. Que vous soyez débutant ou que vous souhaitiez approfondir vos connaissances, vous y trouverez des ressources clés pour explorer cette langue visuelle et riche de sens.</p>

      <div className='flex items-center'>
        <LexiqueCard label="Alphabet" desc="Découvrez comment signer chaque lettre de l'alphabet et apprenez à épeler des mots ou des noms." img="/assets/vectors/AlphabetShape.svg" />
        <LexiqueCard label="Vocabulaire" desc="Familiarisez-vous avec des mots et expressions courants pour communiquer efficacement dans la vie quotidienne." img="/assets/vectors/VocabulaireShape.svg" />
      </div>
    </main>
  )
}

export default LexiquePage