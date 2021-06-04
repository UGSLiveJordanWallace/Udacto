import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const RecognizedWords = () => {
    return (
        <>
            <Head>
                <title>Udacto</title>
                <meta name="description" content="Udacto is a voice assisstant that performs basic computer tasks." />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <h1 className={styles.title}>Words Recognized By Udacto</h1>
            <div className={styles.case}>
                <div className={styles.col}>
                    <p>A  /  AH</p>
                    <p>A(2)  /  EY</p>
                    <p>ABOUT  /  AH B AW T</p>
                    <p>AFTER  /  AE F T ER</p>
                    <p>ALL  /  AO L</p>
                    <p>ALSO  /  AO L S OW</p>
                    <p>AN  /  AE N</p>
                    <p>AN(2)  /  AH N</p>
                    <p>AND  /  AH N D</p>
                    <p>AND(2)  /  AE N D</p>
                    <p>ANY  /  EH N IY</p>
                    <p>ARE  /  AA R</p>
                    <p>ARE(2)  /  ER</p>
                    <p>AS  /  AE Z</p>
                    <p>AS(2)  /  EH Z</p>
                    <p>AT  /  AE T</p>
                </div>
                <div className={styles.col}>
                    <p>BACK  /  B AE K</p>
                    <p>BE  /  B IY</p>
                    <p>BECAUSE  /  B IH K AO Z</p>
                    <p>BECAUSE(2)  /  B IH K AH Z</p>
                    <p>BECAUSE(3)  /  B IH K AA Z</p>
                    <p>BEHAVIOR  /  B IH HH EY V Y ER</p>
                    <p>BICYCLE  /  B AY S IH K AH L</p>
                    <p>BUT  /  B AH T</p>
                    <p>BY  /  B AY</p>
                    <p>CAN  /  K AE N</p>
                    <p>CAN(2)  /  K AH N</p>
                    <p>CASE  /  K EY S</p>
                    <p>CHILD  /  CH AY L D</p>
                    <p>CHROME  /  K R OW M</p>
                    <p>COME  /  K AH M</p>
                    <p>COMPANY  /  K AH M P AH N IY</p>
                </div>
                <div className={styles.col}>
                    <p>COULD  /  K UH D</p>
                    <p>DAY  /  D EY</p>
                    <p>DO  /  D UW</p>
                    <p>EVEN  /  IY V IH N</p>
                    <p>EYE  /  AY</p>
                    <p>FACT  /  F AE K T</p>
                    <p>FIRST  /  F ER S T</p>
                    <p>FOR  /  F AO R</p>
                    <p>FOR(2)  /  F ER</p>
                    <p>FOR(3)  /  F R ER</p>
                    <p>FROM  /  F R AH M</p>
                    <p>GET  /  G EH T</p>
                    <p>GET(2)  /  G IH T</p>
                    <p>GIVE  /  G IH V</p>
                    <p>GO  /  G OW</p>
                    <p>GOOD  /  G UH D</p>
                </div>
            </div>
            <div className={styles.case}>
                <div className={styles.col}>
                    <p>GOOD(2)  /  G IH D</p>
                    <p>GOVERNMENT  /  G AH V ER N M AH N T</p>
                    <p>GROUP  /  G R UW P</p>
                    <p>HAND  /  HH AE N D</p>
                    <p>HAVE  /  HH AE V</p>
                    <p>HE  /  HH IY</p>
                    <p>HER  /  HH ER</p>
                    <p>HIM  /  HH IH M</p>
                    <p>HIM(2)  /  IH M</p>
                    <p>HIS  /  HH IH Z</p>
                    <p>HOW  /  HH AW</p>
                    <p>I  /  AY</p>
                    <p>IF  /  IH F</p>
                    <p>IN  /  IH N</p>
                    <p>INTO  /  IH N T UW</p>
                    <p>INTO(2)  /  IH N T AH</p>
                </div>
                <div className={styles.col}>
                    <p>IT  /  IH T</p>
                    <p>ITS  /  IH T S</p>
                    <p>JUST  /  JH AH S T</p>
                    <p>JUST(2)  /  JH IH S T</p>
                    <p>KNOW  /  N OW</p>
                    <p>LIFE  /  L AY F</p>
                    <p>LIKE  /  L AY K</p>
                    <p>LOOK  /  L UH K</p>
                    <p>MAKE  /  M EY K</p>
                    <p>MAN  /  M AE N</p>
                    <p>ME  /  M IY</p>
                    <p>MOST  /  M OW S T</p>
                    <p>MOST(2)  /  M OW S</p>
                    <p>MY  /  M AY</p>
                    <p>NEW  /  N UW</p>
                </div>
                <div className={styles.col}>
                    <p>NEW(2)  /  N Y UW</p>
                    <p>NO  /  N OW</p>
                    <p>NOT  /  N AA T</p>
                    <p>NOTEPAD  /  N OW T P AE D</p>
                    <p>NOW  /  N AW</p>
                    <p>NUMBER  /  N AH M B ER</p>
                    <p>OF  /  AH V</p>
                    <p>ON  /  AA N</p>
                    <p>ON(2)  /  AO N</p>
                    <p>ONE  /  W AH N</p>
                    <p>ONE(2)  /  HH W AH N</p>
                    <p>ONLY  /  OW N L IY</p>
                    <p>OR  /  AO R</p>
                    <p>OR(2)  /  ER</p>
                    <p>OTHER  /  AH DH ER</p>
                    <p>OUR  /  AW ER</p>
                </div>
            </div>
            <div className={styles.case}>
                <div className={styles.col}>
                    <p>OUR(2)  /  AW R</p>
                    <p>OUR(3)  /  AA R</p>
                    <p>OUT  /  AW T</p>
                    <p>OVER  /  OW V ER</p>
                    <p>PART  /  P AA R T</p>
                    <p>PEOPLE  /  P IY P AH L</p>
                    <p>PERSON  /  P ER S AH N</p>
                    <p>PLACE  /  P L EY S</p>
                    <p>POINT  / P OY N T</p>
                    <p>PROBLEM  /  P R AA B L AH M</p>
                    <p>SAY  /  S EY</p>
                    <p>SEE  /  S IY</p>
                    <p>SHE  /  SH IY</p>
                    <p>SO  /  S OW</p>
                    <p>SOME  /  S AH M</p>
                    <p>START  /  S T AA R T</p>
                    <p>TAKE  /  T EY K</p>
                    <p>THAN  /  DH AE N</p>
                    <p>THAN(2)	DH AH N</p>
                </div>
                <div className={styles.col}>
                    <p>THAT  /  DH AE T</p>
                    <p>THAT(2)  /  DH AH T</p>
                    <p>THE  /  DH AH</p>
                    <p>THE(2)  /  DH IY</p>
                    <p>THEIR  /  DH EH R</p>
                    <p>THEM  /  DH EH M</p>
                    <p>THEM(2)  /  DH AH M</p>
                    <p>THEN  /  DH EH N</p>
                    <p>THERE  /  DH EH R</p>
                    <p>THESE  /  DH IY Z</p>
                    <p>THEY  /  DH EY</p>
                    <p>THING  /  TH IH NG</p>
                    <p>THINK  /  TH IH NG K</p>
                    <p>THIS  /  DH IH S</p>
                    <p>TIME  /  T AY M</p>
                    <p>TO  /  T UW</p>
                    <p>TO(2)  /  T IH</p>
                    <p>TO(3)  /  T AH</p>
                    <p>TWO  /  T UW</p>
                </div>
                <div className={styles.col}>
                    <p>UP  / AH P</p>
                    <p>US  /  AH S</p>
                    <p>US(2)  /  Y UW EH S</p>
                    <p>USE  /  Y UW S</p>
                    <p>USE(2)  /  Y UW Z</p>
                    <p>WANT  /  W AA N T</p>
                    <p>WANT(2)  /  W AO N T</p>
                    <p>WAY  /  W EY</p>
                    <p>WE  /  W IY</p>
                    <p>WEEK  /  W IY K</p>
                    <p>WELL  /  W EH L</p>
                    <p>WHAT	W AH T</p>
                    <p>WHAT(2)  /  HH W AH T</p>
                    <p>WHEN  /  W EH N</p>
                    <p>WHEN(2)  /  HH W EH N</p>
                    <p>WHEN(3)  /  W IH N</p>
                    <p>WHEN(4)  /  HH W IH N</p>
                    <p>WHICH  /  W IH CH</p>
                    <p>WHICH(2)  /  HH W IH CH</p>
                </div>
            </div>
            <div className={styles.case}>
                <div className={styles.col}>
                    <p>WHO  /  HH UW</p>
                    <p>WILL  /  W IH L</p>
                    <p>WILL(2)  /  W AH L</p>
                    <p>WITH  /  W IH DH</p>
                </div>
                <div className={styles.col}>
                    <p>WITH(2)  /  W IH TH</p>
                    <p>YEAR  /  Y IH R</p>
                    <p>YOU  /  Y UW</p>
                </div>
                <div className={styles.col}>
                    <p>WORK  /  W ER K</p>
                    <p>WORLD  /  W ER L D</p>
                    <p>WOMAN  /  W UH M AH N</p>
                </div>
                <div className={styles.col}>
                    <p>WOULD  /  W UH D</p>
                    <p>WRITE  /  R AY T</p>
                    <p>YOUR  /  Y AO R</p>
                    <p>YOUR(2)	Y UH R</p>
                </div>
            </div>
            <footer className={styles.casefooter}>
                <p>
                    <a href="/">Main Page</a>
                </p>
            </footer>
        </>
    )
}

export default RecognizedWords;
