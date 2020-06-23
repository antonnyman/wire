import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/base.css' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
