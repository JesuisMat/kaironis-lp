import { CheckIcon } from '../svgAssets';
import styles from './discovery.module.css';
import Image from 'next/image';

export default function Discovery() {
  const benefits = [
    'Une réponse directe aux défis de la santé publique',
    'Décidez avec des données toujours à jour',
    "Accédez à des indicateurs actualisés en temps réel : couvertures vaccinales, passages aux urgences, prévisions d'épidémies.",
    "Simulez l'impact de vos décisions avant de les prendre",
    'Testez différents scénarios de distribution vaccinale et anticipez leur effet sur la pression hospitalière.',
    'Expliquez vos choix avec des visuels parlants',
    "Générez automatiquement des cartographies, des graphiques d'impact et des synthèses accessibles pour la communication publique."
  ];

  return (
    <section className={styles.discovery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleRegular}>Découvrir</span>
            <br />
            la plateforme
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/images/why.png"
                alt="Découverte de la plateforme Kaironis"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className={styles.details}>
            <h3 className={styles.subtitle}>
              Pourquoi <span className={styles.highlight}>Kaironis</span> ?
            </h3>

            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <div className={styles.checkIcon}>
                    <CheckIcon />
                  </div>
                  <p className={styles.benefitText}>{benefit}</p>
                </div>
              ))}
            </div>

            <button className={styles.ctaButton}>
              Demander une démo
            </button>
          </div>
        </div>

        <p className={styles.footer}>
          Générez automatiquement des cartographies, des graphiques d'impact et des synthèses accessibles pour la communication publique.
        </p>
      </div>
    </section>
  );
}
