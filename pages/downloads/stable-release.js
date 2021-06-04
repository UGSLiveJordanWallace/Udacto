import styles from '../../styles/Home.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import Head from 'next/head';

const StableRelease = () => {
    return (
        <>
        <Head>
            <title>Udacto</title>
            <meta name="description" content="Udacto is a voice assisstant that performs basic computer tasks." />
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <div className={styles.container}>
            <h1 className={styles.title}>Stable Release</h1>
            <a href={"../installer/udacto-installer.cmd"} download="udacto-installer.cmd" className={styles.description}>
                Download Installer <IoIosArrowDown /> <br></br>
                <Image src="/images/udacto-main-page.png" width={300} height={190}/>
            </a>
            <footer className={styles.footer}>
                <div className={styles.description}>
                <a href="/downloads">Go Back</a>
                </div>
            </footer>
        </div>
        </>
    )
}

export default StableRelease;
