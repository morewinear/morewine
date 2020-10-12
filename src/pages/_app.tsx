import { AppProps } from 'next/app'

import '../styles/globals.css'
import '../public/fonts/MinionPro-It.otf'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}