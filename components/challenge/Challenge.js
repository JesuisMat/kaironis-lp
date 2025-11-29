import styles from './challenge.module.css';
import Image from 'next/image';

export default function Challenge() {
  return (
    <section className={styles.challenge}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.circleImage}>
            <div className={styles.imageWrapper}>
            <Image
              src="/images/medecin.png"
              alt="Médecin"
              layout="fill"
              objectFit="cover"
            />
            </div>
            <svg viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="148" cy="148" r="148" fill="url(#challengeGradient)" fillOpacity="0.2"/>
              <defs>
                <linearGradient id="challengeGradient" x1="0" y1="0" x2="296" y2="296">
                  <stop stopColor="#8585F6"/>
                  <stop offset="1" stopColor="#9C8BFF"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            Un défi <span className={styles.emphasis}>majeur</span>
          </h2>

          <div className={styles.line}></div>

          <p className={styles.description}>
            Depuis la crise COVID,{' '}
            <span className={styles.highlight}>une partie importante de la population</span>{' '}
            ne comprend plus clairement les décisions sanitaires. Des obligations mal perçues,
            des données difficiles à interpréter, des messages contradictoires. Cette
            incompréhension nourrit la méfiance et freine l'efficacité des politiques publiques.
          </p>
        </div>
      </div>
    </section>
  );
}
