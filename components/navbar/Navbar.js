import Logo from '../logo/Logo';
import styles from './navbar.module.css';

export default function Navbar() {
  const navItems = ['Acceuil', 'Défis', 'Interfaces', 'À propos'];

  return (
    <nav className={styles.navbar}>
      <Logo />

      <div className={styles.navigation}>
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={index === 0 ? styles.active : ''}
          >
            {item}
          </a>
        ))}
      </div>

      <button className={styles.ctaButton}>
      <a className={styles.ctaButton1}href={process.env.NEXT_PUBLIC_DASHBOARD_URL}>
               Découvrir
              </a>
      </button>
    </nav>
  );
}
