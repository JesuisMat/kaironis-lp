import { SocialIcon, PedagogiqueIcon, PolitiqueIcon } from '../svgAssets';
import styles from './solution.module.css';

export default function Solution() {
  const pillars = [
    {
      icon: <SocialIcon />,
      title: 'Social',
      description: 'Rétablir la confiance des citoyens grâce à une transparence totale sur les données et la simulation des impacts.'
    },
    {
      icon: <PedagogiqueIcon />,
      title: 'Pédagogique',
      description: 'Traduire la donnée complexe en informations claires pour garantir une compréhension immédiate des enjeux.'
    },
    {
      icon: <PolitiqueIcon />,
      title: 'Politique',
      description: "Donner les moyens aux décideurs de chiffrer l'impact de leurs choix pour justifier rigoureusement toute stratégie sanitaire."
    }
  ];

  return (
    <section className={styles.solution}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleRegular}>La solution n'est plus</span>{' '}
          seulement sanitaire
        </h2>

        <div className={styles.pillars}>
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.pillar}>
              <div className={styles.pillarIcon}>{pillar.icon}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
