import { Poppins } from 'next/font/google'
import localFont from '@next/font/local'

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const sourceSerif = localFont({
  src: [
    {
      path: 'SourceSerifPro-SemiBold.otf',
      weight: '600'
    },
    {
      path: 'SourceSerifPro-Regular.otf',
      weight: '400'
    }
  ],
  variable: '--font-source-serif'
})
