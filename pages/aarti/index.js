import Head from "next/head";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Aarti({ posts }) {
  return (
    <>
      <Head>
        <title>Aarti Sangrah</title>
        <meta name="description" content="Aarti Sangrah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container sx={{ pl: "10px", pr: "10px" }}>
          <Grid item xs={0} md={4}></Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h4" style={{ textAlign: 'center' }}>Aarti Sangrah</Typography>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
            >
              {posts?.data?.map((item) => {
                return (
                  <Box key={item.id}>
                    <Card sx={{ mb: "15px" }}>
                      <Link href={`/aarti/${item.id}`}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar sx={{ mr: "20px" }}>
                            <Image
                              alt={item.title}
                              src={item.image}
                              width={100}
                              height={100}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.title}
                            secondary={<Box>{item.card_intro}</Box>}
                          />
                        </ListItem>
                      </Link>
                    </Card>
                  </Box>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={0} md={3}></Grid>
        </Grid>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/aarti");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
