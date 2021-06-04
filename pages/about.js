import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';

function About() {
    return (
        <div>
            <Head>
                <title>Udacto</title>
                <meta name="description" content="Udacto is a voice assisstant that performs basic computer tasks." />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <h1 className={styles.title}>Jordan Wallace</h1>
            
            <Image className={styles.image} src={"/images/Jordan's About Me Photo.jpg"} width={500} height={500} />
            
            <div className={styles.paragraph}>
                <p>Hello I am Jordan Wallace from Maryland. I am a passionate software, web, and game developer, who is studying both AP computer science and computer science principles at Bishop McNamara Highschool. 
                I wasn't always a developer though, in the beginning of 2020 I was an athlete trying to make it in basketball. Basketball, to me, was my only option. So when Covid 19 hit, all of the effort towards basketball unfortunately went away. 
                It wasn't until the beginning of September that I was exposed to a field that I had never thought I would enjoy before. 
                <strong> Coding</strong>. Afterwards I started learning the fundamentals and developing skills outside of class. That was nine months ago, I am still learning as I go, and hope to make an unforgetable career out of this industry. 
                The best is yet to come.</p>
            </div>
            <footer className={styles.footer}>
                <div className={styles.description}>
                    <a href="/">Main Page</a>
                </div>
            </footer>
        </div>
    )
}

export default About;