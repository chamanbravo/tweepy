import Header from "@/components/Header"
import PostFeed from "@/components/Posts"
import UserBio from "@/components/User/UserBio"
import UserHero from "@/components/User/UserHero"
import Head from "next/head"
import { useRouter } from "next/router"

export default function User() {
  const router = useRouter()
  const { username } = router.query
  const fetchedUser = []

  return (
    <>
      <Head>
        <title>{username}</title>
        <meta name="description" content={`$username`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header showBackArrow label={username as string} />

      {fetchedUser ? (
        <div className="text-neutral-600 text-center p-6 text-xl">
          No user found
        </div>
      ) : (
        <>
          <UserHero username={username as string} />
          <UserBio username={username as string} />
          <PostFeed username={username as string} />
        </>
      )}
    </>
  )
}
