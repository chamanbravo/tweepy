import Header from "@/components/Header"
import Head from "next/head"

export default function Notifications() {
  return (
    <>
      <Head>
        <title>Notifications</title>
        <meta name="description" content="Notifications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header label="Notifications" />
    </>
  )
}
