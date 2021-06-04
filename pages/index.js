import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
    <Head>
      <title>Udacto</title>
      <meta name="description" content="Udacto is a voice assisstant that performs basic computer tasks." />
      <link rel="icon" href="/images/favicon.ico" />
    </Head>

    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Udacto</h1>

        <div className={styles.grid}>
          <a href="/downloads" className={styles.card}>
            <h2>Download &rarr;</h2>
            <p>Download the Udacto voice assistant, the voice assistant that helps run basic computer commands</p>
          </a>

          <a href="/extra-info/recognized-words" className={styles.card}>
            <h2>Recognized Words &rarr;</h2>
            <p>This is the Dictionary and Language Model files that help the voice assistant understand your commands</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.description}>
          <a href="/about">Udacto Developer</a>
        </div>
      </footer>
    </div>
  </>
  )
}
