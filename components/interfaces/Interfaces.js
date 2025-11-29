import styles from './interfaces.module.css';

export default function Interfaces() {
  const interfaces = [
    {
      title: 'Une vue essentielle',
      description: 'claire, immédiate, orientée action — pour les décideurs.',
      backgroundClass: styles.essentialBg
    },
    {
      title: 'Une vue experte',
      description: 'complète, détaillée, modélisée — pour les analystes.',
      backgroundClass: styles.expertBg
    }
  ];

  return (
    <section className={styles.interfaces}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleRegular}>Deux interfaces</span>
            <br />
            une même réalité
          </h2>
          <p className={styles.subtitle}>
            Explorez les données sources, validez les modèles prédictifs, et{' '}
            <span className={styles.highlight}>construisez des scénarios d'anticipation</span>.
          </p>
        </div>

        <div className={styles.cards}>
          {interfaces.map((item, index) => (
            <div key={index} className={`${styles.card} ${item.backgroundClass}`}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <button className={styles.cardButton}>En savoir plus</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
