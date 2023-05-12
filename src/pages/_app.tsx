import type { AppProps } from "next/app"
import GlobalStyle from "@theme/styles"
import "../theme/fonts.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
