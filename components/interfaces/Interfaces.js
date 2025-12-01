import styles from './interfaces.module.css';

export default function Interfaces() {
  const interfaces = [
    {
      title: 'Une vue experte',
      description: 'Claire, immédiate et orientée action en se concentrant sur les KPI et le ROI.',
      backgroundClass: styles.essentialBg
    },
    {
      title: 'Une vue contextualisée',
      description: 'Conçue pour donner du sens aux données complexes et faciliter la communication.',
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
            Accédez aux données sources, explorez les modèles prédictifs, et{' '}
            <span className={styles.highlight}>construisez des scénarios d'anticipation</span>.
          </p>
        </div>

        <div className={styles.cards}>
          {interfaces.map((item, index) => (
            <div key={index} className={`${styles.card} ${item.backgroundClass}`}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <button className={styles.cardButton}>
              <a className={styles.ctaButton}href={process.env.NEXT_PUBLIC_DASHBOARD_URL}>
               En savoir plus
              </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
