import styles from './logo.module.css';

export default function Logo({ size = 'medium' }) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <div className={styles.logoIcon}>
        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.5" cy="12.5" r="12.5" fill="#8585F6"/>
          <circle cx="12.5" cy="12.5" r="9.5" fill="white" fillOpacity="0.2"/>
          <text x="12.5" y="18" fontSize="15.529" fontFamily="Satoshi-Bold" fontWeight="700" fill="white" textAnchor="middle">K</text>
        </svg>
      </div>
      <p className={styles.logoText}>Kaironis</p>
    </div>
  );
}
