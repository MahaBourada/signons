import React from 'react'

const OriginePage = () => {
  return (
    <main className='flex-grow mx-24'>
      <div>
        <div className='flex'>
          <div className='m-1 mb-10'>
            <h1 className='text-heading font-bold m-1 my-2'>Quand est-ce que ça a commencé ?</h1>
            <p className='text-bodyText text-justify mx-3'>L'histoire de la langue des signes française remonte au XVIIIe siècle, grâce aux efforts du prêtre Charles-Michel de l'Épée. Connu comme le « père de l'éducation des sourds », il a développé une méthode basée sur les signes naturels utilisés par les sourds à Paris.
              En 1760, il fonde la première école pour les enfants sourds, l'Institut national des jeunes sourds de Paris, qui deviendra un modèle pour l'éducation des sourds dans le monde entier. Cette initiative marque un tournant dans la reconnaissance de la langue des signes comme un outil essentiel pour l'éducation et la communication.</p>
          </div>
          <img src="/images/AbbeEpee.png" alt="Abbée de l'Epée" />
        </div>
        <img src="/images/AncienINJS.png" alt="Institut National des Jeunes Sourds, Paris en 'année'" />
      </div>

      <div className='flex'>
        <div>
          <div className='m-1 mb-10'>
            <h1 className='text-heading font-bold m-1 my-2'>Premier obstacle : l'interdiction</h1>
            <p className='text-bodyText text-justify mx-3'>Malheureusement, en 1880, le Congrès de Milan a porté un coup sévère à l'enseignement en langue des signes. Les éducateurs de l'époque ont décidé de privilégier l'oralisation, interdisant l'usage de la langue des signes dans les écoles. Cette interdiction a causé une marginalisation des communautés sourdes et un recul dans la transmission de la langue. Pendant près d'un siècle, la LSF a survécu grâce à la communauté sourde elle-même, qui a continué à utiliser les signes en dehors des institutions officielles. Ce n'est qu'à la fin du XXe siècle que la LSF a retrouvé une reconnaissance officielle en France.</p>
          </div>

          <div className='m-1 mb-10'>
            <h1 className='text-heading font-bold m-1 my-2'>Une renaissance progressive</h1>
            <p className='text-bodyText text-justify mx-3'>Au milieu du XXe siècle, le mouvement pour les droits des sourds a commencé à gagner en force. Les associations de personnes sourdes ont joué un rôle clé dans la promotion de la langue des signes et dans la revendication de leur droit à l'utiliser. En 1977, la langue des signes française (LSF) a été réintroduite dans certaines écoles, marquant un tournant dans l'histoire de son enseignement. Cette période a vu naître de nombreuses initiatives pour documenter, enseigner et valoriser la LSF comme une langue à part entière.</p>
          </div>
        </div>

        <img src="/images/NotreDame.png" alt="Notre de Dame de Paris en 'année'" />
      </div>

      <div className='flex'>
        <img src="/images/ReveilSourd.png" alt="Pièce théâtrales LSF" />
        <div className='m-1 mb-10'>
          <h1 className='text-heading font-bold m-1 my-2'>La reconnaissance officielle</h1>
          <p className='text-bodyText text-justify mx-3'>En 1991, une avancée majeure a été franchie avec la loi Fabius, qui a autorisé l'usage de la LSF dans l'enseignement. Plus tard, en 2005, la loi sur l'égalité des droits et des chances a officiellement reconnu la LSF comme une langue à part entière en France. Cette reconnaissance a permis de légitimer son usage dans les institutions publiques et de sensibiliser davantage le public à l'importance de cette langue.</p>
        </div>
      </div>

      <div className='m-1 mb-10'>
        <h1 className='text-heading font-bold m-1 my-2'>La LSF aujourd'hui</h1>
        <p className='text-bodyText text-justify mx-3'>De nos jours, la LSF est enseignée dans de nombreuses écoles, universités et centres de formation. Elle est également valorisée dans la culture populaire à travers des films, des séries et des événements artistiques mettant en avant la richesse de la langue et de la culture sourde. Cependant, des défis subsistent, notamment pour garantir l'accès à des interprètes en LSF dans tous les domaines de la vie publique et pour renforcer son enseignement dès le plus jeune âge.
          L'impact de la LSF va au-delà des frontières françaises. Sa structure a inspiré le développement d'autres langues des signes à travers le monde, comme l'American Sign Language (ASL), qui partage des racines avec la LSF. La reconnaissance des langues des signes au niveau mondial continue d'évoluer, avec des efforts pour leur inclusion dans les politiques éducatives et sociales.</p>
      </div>

      <div className='m-1 mb-10'>
        <h1 className='text-heading font-bold m-1 my-2'>Bibliographie</h1>
        <ul className='mx-10 list-disc text-bodyText'>
          <li>https://adsignes.fr/histoire-langue-des-signes</li>
          <li>https://www.surdi.info/langue-des-signes-francaise-lsflangue-des-signes-siecles-histoire</li>
          <li>https://des-mains-et-des-signes.fr/la-lsf</li>
          <li>https://fr.wikipedia.org/wiki/Langue_des_signes_fran%C3%A7aise</li>
        </ul>
      </div>
    </main>
  )
}

export default OriginePage