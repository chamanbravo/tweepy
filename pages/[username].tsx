import Header from "@/components/Header"
import Head from "next/head"
import { useRouter } from "next/router"

export default function User() {
  const router = useRouter()
  const {username} = router.query
  return (
    <>
      <Head>
        <title>{username}</title>
        <meta name="description" content={`$username`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header label={username as string} />
    </>
  )
}
