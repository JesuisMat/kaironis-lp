import Navbar from './navbar/Navbar';
import Hero from './Hero/Hero';
import Challenge from './challenge/Challenge';
import Quote from './quote/Quote';
import Solution from './solution/Solution';
import Interfaces from './interfaces/Interfaces';
import Features from './features/Features';
import Discovery from './discovery/Discovery';
import Footer from './footer/Footer';
import ScrollReveal from './ScrollReveal';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <Navbar />

      <main className={styles.main}>
        <ScrollReveal direction="up" delay={0}>
          <Hero />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Challenge />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Quote>
            L'enjeu désormais est de transformer les gestes collectifs nécessaires en véritables
            réflexes compris, acceptés et assumés par tous.
          </Quote>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Solution />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Quote>
            Une donnée que l'on comprend est une donnée à laquelle on peut faire confiance
          </Quote>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Interfaces />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Features />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Discovery />
        </ScrollReveal>
      </main>

      <ScrollReveal direction="up" delay={0.1}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
