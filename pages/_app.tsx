import Layout from "@/components/Layout"
import LoginModal from "@/components/Modal/LoginModal"
import RegisterModal from "@/components/Modal/RegisterModal"
import store from "@/store"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
