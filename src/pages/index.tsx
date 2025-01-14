import Head from "next/head";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import styles from "../../styles/home.module.css";
import Image from "next/image";
import heroImg from "../../public/assests/hero.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConnection";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  posts: number;
  comments: number;
}

export default function Home({ posts, comments }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Logo Tarefas+"
            src={heroImg}
            priority
          ></Image>
          <h1 className={styles.title}>
            Sistema feito para você organizar <br /> seus estudos e tarefas.
          </h1>
        </div>
        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+{posts} posts</span>
          </section>
          <section className={styles.box}>
            <span>+{comments} comentários</span>
          </section>
        </div>
      </main>
    </div>
  );
}

//criar pagina estatica com revalidação
export const getStaticProps: GetStaticProps = async () => {
  const commentRef = collection(db, "comments");

  const postRef = collection(db, "tarefas");

  const commentSnapshot = await getDocs(commentRef);
  const postSnaphot = await getDocs(postRef);

  return {
    props: {
      posts: postSnaphot.size || 0,
      comments: commentSnapshot.size || 0,
    },
    rivalidate: 60, //Seria rivalidado a cada 60 segundos
  };
};
