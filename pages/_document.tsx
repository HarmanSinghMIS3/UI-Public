import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      className='h-100'
      lang="en-CA"
    >
      <Head>
        <meta name='robots' content='noindex, nofollow' /> 
      </Head>
      <body className='h-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
