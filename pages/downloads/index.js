import styles from '../../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
    return (
        <>
        <Head>
            <title>Udacto</title>
            <meta name="description" content="Udacto is a voice assisstant that performs basic computer tasks." />
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
        
        <div className={styles.container}>
            <h1 className={styles.title}>Downloads</h1>

            <div className={styles.grid}>
                <a href="/downloads/stable-release" className={styles.card}>
                    <h2>Stable Release &rarr;</h2>
                    <p>This is the tested version of Udacto. This contains an executable, source folder, and app configuration file</p>
                </a>
                <a href="/downloads/newest-release" className={styles.card}>
                    <h2>Newest Release &rarr;</h2>
                    <p>This is has newest change of Udacto. This contains a .jar file, source folder, and app configuration file</p>
                </a>
            </div>

            <footer className={styles.footer}>
                <div className={styles.description}>
                <a href="/">Main Page</a>
                </div>
            </footer>
        </div>
        </>
    )
}
