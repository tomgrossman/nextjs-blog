import { rootLogger } from '../lib/logging';
import '../styles/global.css'
import { AppProps } from 'next/app'

const logger = rootLogger.child({ context: 'analytics' });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}