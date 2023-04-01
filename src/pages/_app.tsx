import '@/styles/globals.scss'
import type { AppProps } from 'next/app'


// ** Google Fonts Import
import { Poppins, Montserrat } from 'next/font/google'
const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})
const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.className} ${montserrat.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
