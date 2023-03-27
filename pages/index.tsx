import Form from "@/components/Form"
import Header from "@/components/Header"
import PostFeed from "@/components/Posts"
import { useSession } from "next-auth/react"
import Head from "next/head"

export default function Home() {
  const { status } = useSession()
  const loggedIn = status === "authenticated"

  return (
    <>
      <Head>
        <title>Tweepy</title>
        <meta name="description" content="Tweepy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header label="Home" />
      {loggedIn && <Form placeholder="What's happening?" />}
      <PostFeed username="cham" />
    </>
  )
}
