import Head from 'next/head'
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function AartiData({posts}) {
    const router = useRouter();

    const { id } = router.query;
    console.log(id);
  return (
    <>
      <Head>
        <title>{posts?.data[0]?.title}</title>
        <meta name="description" content={posts?.data[0]?.card_intro} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ display: 'flex', justifyContent:'center' }}>
        {
            posts?.data?.map((item)=>{
                return <Box>
                    <Typography variant='h5'>{item.title}</Typography>
                    <br />
                    <Image src={item.image} width={450} height={450}/>
                    <br />
                    <br />
                    <div className="product-des" dangerouslySetInnerHTML={{ __html: item.description }}/>
                </Box>
            })
        }
      </main>
    </>
  )
}

export async function getServerSideProps(param) {
    const {id} = param.query;
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`http://localhost:3000/api/hindu-literature/${id}`)
    const posts = await res.json()
   
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }