import Layout from "@/components/Layout"
import EditModal from "@/components/Modal/EditModal"
import LoginModal from "@/components/Modal/LoginModal"
import RegisterModal from "@/components/Modal/RegisterModal"
import store from "@/store"
import "@/styles/globals.css"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Toaster />
        <LoginModal />
        <RegisterModal />
        <EditModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  )
}
