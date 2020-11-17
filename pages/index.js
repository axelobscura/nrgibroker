import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NRGIBROKER - DIAGNÓSTICO DE DESARROLLO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://azul.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://azul.mx/templates/azulmx2013/images/badge.png" alt="AZUL Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
