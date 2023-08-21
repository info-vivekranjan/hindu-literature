import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Grid, Typography } from "@mui/material";
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
      <main className={`${inter.className}`}>
        <div className={styles.backgroundImg}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Hindu Literature
          </Typography>
        </div>
        <div className={styles.optionSection}>
          <Grid container>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={2} className={styles.optionCard}>
              <Link href={"/aarti"}>
                <Typography
                  variant="h6"
                  className={styles.card}
                >
                  {" "}
                  Aarti Sangrah
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={2} className={styles.optionCard}>
              <Link href={"/bhajan"}>
                <Typography
                  variant="h6"
                  className={styles.card}
                >
                  {" "}
                  Bhajan Sangrah
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={2} className={styles.optionCard}>
              <Link href={"/quote"}>
                <Typography
                  variant="h6"
                  className={styles.card}
                >
                  {" "}
                  Quote Sangrah
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
          </Grid>
        </div>
      </main>
    </>
  );
}
