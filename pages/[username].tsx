import Header from "@/components/Header"
import PostFeed from "@/components/Posts"
import UserBio from "@/components/User/UserBio"
import UserHero from "@/components/User/UserHero"
import { useAppDispatch, useAppSelector } from "@/store"
import { fetchUserProfile } from "@/store/features/userProfile"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function User() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { username } = router.query

  useEffect(()=>{
    dispatch(fetchUserProfile(username as string))
  },[dispatch, username])

  const fetchedUser = useAppSelector((state) => state.userProfile)

  return (
    <>
      <Head>
        <title>{username}</title>
        <meta name="description" content={`$username`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header showBackArrow label={username as string} />

      {!fetchedUser.username ? (
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
