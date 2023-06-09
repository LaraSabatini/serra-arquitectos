import type { AppProps } from "next/app"
import Head from "next/head"
import GlobalStyle from "@theme/styles"
import "../theme/fonts.css"
import { ConfigProvider } from "antd"
import theme from "@theme/index"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: `${theme.colors.black}`,
          fontFamily: "Regular",
        },
      }}
    >
      <Head>
        <title>Serra Arquitectos</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
