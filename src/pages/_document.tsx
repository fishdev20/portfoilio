import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="utf-8"/>
      <meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
			/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
