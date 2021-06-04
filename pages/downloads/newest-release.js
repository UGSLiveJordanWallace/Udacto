import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { IoIosArrowDown } from 'react-icons/io';

const NewestRelease = () => {
    return (
        <>
        <Head>
            <title>Udacto</title>
            <meta name="description" content="Udacto is a voice assisstant that performs basic computer tasks." />
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <div className={styles.container}>
            <h1 className={styles.title}>Newest Release</h1>
            <a href={"/udacto-updated.zip"} download="udacto-installer.zip" className={styles.description}>
                Download ZipFile <IoIosArrowDown /> <br></br>
                <Image src="/images/udacto-dic-page.png" width={300} height={190}/>
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

export default NewestRelease;
