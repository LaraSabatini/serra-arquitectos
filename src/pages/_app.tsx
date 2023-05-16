import type { AppProps } from "next/app"
import Head from "next/head"
import GlobalStyle from "@theme/styles"
import "../theme/fonts.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Serra Arquitectos</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
