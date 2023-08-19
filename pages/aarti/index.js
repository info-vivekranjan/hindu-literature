import Head from 'next/head'
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Aarti({posts}) {
  return (
    <>
      <Head>
        <title>Aarti Sangrah</title>
        <meta name="description" content="Aarti Sangrah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ width: '25%', margin: 'auto' }}>
        <Typography variant='h4' sx={{ textAlign: 'center' }} >Aarti Sangrah</Typography>
        <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {posts?.data?.map((item) => {
          return (
            <Box key={item.id}>
              <Card sx={{ mb: "15px" }}>
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
              </Card>
            </Box>
          );
        })}
      </List>
      </main>
    </>
  )
}

export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/api/hindu-literature')
    const posts = await res.json()
   
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }