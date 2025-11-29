import styles from './features.module.css';

export default function Features() {
  const features = [
    {
      title: '10+ visualisations interactives',
      description: "Graphiques avec 2 niveaux de complexité : du grand public aux experts data, chacun accède à l'interprétation adaptée à son niveau de qualification."
    },
    {
      title: 'Module de prédiction intégré',
      description: 'Anticipez les tendances épidémiques et les besoins en vaccins grâce à des modèles Prophet entraînés sur 13 ans de données historiques.'
    },
    {
      title: 'Simulateur avec paramètres',
      description: "Testez différents scénarios de distribution en temps réel : ajustez les taux de vaccination par zone et visualisez l'impact sur les passages aux urgences."
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
