import styles from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Comprendre la donnée
            <br />
            <span className={styles.headlineEmphasis}>
              Restaurer la confiance
            </span>
            .
          </h1>

          <p className={styles.subheadline}>
            Une plateforme pour{" "}
            <span className={styles.highlight}>rendre la santé publique</span>{" "}
            lisible, pour les décideurs
          </p>

          <div className={styles.ctaGroup}>
            <button className={styles.primaryCta}>
              <a
                className={styles.ctaButton}
                href={process.env.NEXT_PUBLIC_DASHBOARD_URL}
              >
                Demander une démo
              </a>
            </button>
            <button className={styles.secondaryCta}>
              <a
                className={styles.ctaButton}
                href={process.env.NEXT_PUBLIC_DASHBOARD_URL}
              >
                En savoir plus
              </a>
            </button>
          </div>
        </div>

        <div className={styles.illustration}>
          <div className={styles.imageWrapper}>
            {/* Placeholder for illustration - can be replaced with actual image */}
            <Image
              src="/images/hero.png"
              alt="Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
