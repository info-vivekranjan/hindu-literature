import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import data from "../utils/data.json";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

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
                <Typography variant="h6" className={styles.card}>
                  {" "}
                  Aarti Sangrah
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={2} className={styles.optionCard}>
              <Link href={"/bhajan"}>
                <Typography variant="h6" className={styles.card}>
                  {" "}
                  Bhajan Sangrah
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={2} className={styles.optionCard}>
              <Link href={"/quote"}>
                <Typography variant="h6" className={styles.card}>
                  {" "}
                  Quote Sangrah
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
          </Grid>
        </div>
        <div style={{ marginTop: "250px", marginBottom: "50px" }}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#F7BE7C",
            }}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link href={`/aarti/${data[0].id}`}>
                <Box className={styles.eachSlideCard}>
                  <img src={data[0].image} />
                  <Typography>{data[0].card_intro}</Typography>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`/aarti/${data[1].id}`}>
                <Box className={styles.eachSlideCard}>
                  <img src={data[1].image} />
                  <Typography>{data[1].card_intro}</Typography>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`/aarti/${data[2].id}`}>
                <Box className={styles.eachSlideCard}>
                  <img src={data[2].image} />
                  <Typography>{data[2].card_intro}</Typography>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`/aarti/${data[3].id}`}>
                <Box className={styles.eachSlideCard}>
                  <img src={data[3].image} />
                  <Typography>{data[3].card_intro}</Typography>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`/aarti/${data[4].id}`}>
                <Box className={styles.eachSlideCard}>
                  <img src={data[4].image} />
                  <Typography>{data[4].card_intro}</Typography>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`/aarti/${data[5].id}`}>
                <Box className={styles.eachSlideCard}>
                  <img src={data[5].image} />
                  <Typography>{data[5].card_intro}</Typography>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`/aarti/${data[6].id}`}>
                <Box className={styles.eachSlideCard}>
                  <img src={data[6].image} />
                  <Typography>{data[6].card_intro}</Typography>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`/aarti/${data[7].id}`}>
                <Box className={styles.eachSlideCard}>
                  <img src={data[7].image} />
                  <Typography>{data[7].card_intro}</Typography>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`/aarti/${data[8].id}`}>
                <Box className={styles.eachSlideCard}>
                  <img src={data[8].image} />
                  <Typography>{data[8].card_intro}</Typography>
                </Box>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
}
