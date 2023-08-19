import Head from 'next/head'
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hindu-Literature</title>
        <meta name="description" content="Hindu-literature" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography variant='h4' sx={{ textAlign: 'center' }} >Hindu-literature</Typography>
      </main>
    </>
  )
}
