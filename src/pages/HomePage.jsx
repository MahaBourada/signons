import React from 'react'
import NewsCard from '../components/NewsCard'
import ZoomFunc from '../components/ZoomFunc'

const HomePage = () => {
    return (
        <main className='flex-grow flex justify-evenly relative'>
            <section className='w-[40%] p-10 bg-[url("assets/vectors/AcceuilShape.svg")] bg-contain bg-no-repeat'>
                <h1 className='font-bold text-display text-center p-1 m-2 mb-4'>Une langue pour tous !</h1>
                <p className='text-bodyText text-justify'>Un espace dédié à la découverte, l'apprentissage, et la célébration des langues des signes.</p>
                <h4 className='font-bold text-bodyText'>Sur notre site vous allez apprendre sur :</h4>
                <ul className='text-bodyText text-justify'>
                    <li>
                        <span className='font-bold'>L'histoire et l'évolution de la LSF : </span>son origine, ses figures emblématiques, et son impact culturel.
                    </li>
                    <li>
                        <span className='font-bold'>Les langues des signes dans le monde : </span>comparaisons avec d'autres langues des signes et leurs contextes culturels.
                    </li>
                    <li>
                        <span className='font-bold'>Les bases de la Langue des Signes Française (LSF) : </span>alphabet, chiffres et vocabulaire du quotidien.
                    </li>
                    <li>
                        <span className='font-bold'>Les ressources pédagogiques : </span>vidéos, livres, et outils pour approfondir vos connaissances.
                    </li>
                </ul>
            </section>

            <article className='w-[40%]'>
                <h1 className='text-heading font-bold bg-main rounded-full w-fit px-5 py-2'>Actualités de la semaine</h1>
                <NewsCard />
                <hr className='border-blackText' />
                <NewsCard />
                <hr className='border-blackText' />
                <NewsCard />
                <hr className='border-blackText' />
                <p className='text-end'>
                    <span className='font-bold'>Source : </span>https://www.media-pi.fr/
                </p>
            </article>

            <ZoomFunc />
        </main>
    )
}

export default HomePage