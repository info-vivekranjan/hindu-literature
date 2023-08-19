import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Typography } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hindu-Literature</title>
        <meta name="description" content="Hindu-Literature" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.backgroundImg}>
          <Typography variant="h2">Hindu Literature</Typography>
          <div className={styles.grid}>
            <Link href="/aarti" className={styles.card}>
              <h2>
                Aarti Sangrah <span>-&gt;</span>
              </h2>
              <p>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </Link>

            <Link href="/aarti" className={styles.card}>
              <h2>
                Aarti Sangrah <span>-&gt;</span>
              </h2>
              <p>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </Link>

            <Link href="/aarti" className={styles.card}>
              <h2>
                Aarti Sangrah <span>-&gt;</span>
              </h2>
              <p>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </Link>

            <Link href="/aarti" className={styles.card}>
              <h2>
                Aarti Sangrah <span>-&gt;</span>
              </h2>
              <p>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
