import Logo from '../logo/Logo';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Services</h3>
            <div className={styles.links}>
              <a href="#accueil" className={styles.link}>Accueil</a>
              <a href="#defi" className={styles.link}>Défi</a>
              <a href="#interfaces" className={styles.link}>Interfaces</a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>À propos</h3>
            <div className={styles.links}>
              <a href="#solution" className={styles.link}>Notre solution</a>
              <a href="#fonctionnalites" className={styles.link}>Fonctionnalités</a>
              <a href="#demo" className={styles.link}>Demander une démo</a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <div className={styles.contactInfo}>
              <a href="https://github.com/kaironis" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.icon}>
                  <img src="/images/github.png" alt="GitHub" className={styles.contactIcon} />
                </div>
                <span className={styles.contactText}>github.com/kaironis</span>
              </a>
              <a href="https://linkedin.com/company/kaironis" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.icon}>
                  <img src="/images/linkedin.png" alt="LinkedIn" className={styles.contactIcon} />
                </div>
                <span className={styles.contactText}>@Kaironis</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.logoSection}>
          <Logo size="small" />
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>© 2024-2025 Kaironis - Tous droits réservés</p>
          <div className={styles.legalLinks}>
            <a href="#cgv" className={styles.legalLink}>CGV</a>
            <span className={styles.separator}>•</span>
            <a href="#confidentialite" className={styles.legalLink}>Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
