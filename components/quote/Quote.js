import styles from './quote.module.css';

export default function Quote({ children }) {
  return (
    <section className={styles.quote}>
      <div className={styles.container}>
        <div className={styles.quoteContent}>
          <span className={styles.quoteMarkStart}>"</span>
          <p className={styles.quoteText}>{children}</p>
          <span className={styles.quoteMarkEnd}>"</span>
        </div>
      </div>
    </section>
  );
}
