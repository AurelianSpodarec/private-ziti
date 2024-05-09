import { Poppins, Reem_Kufi } from 'next/font/google'
import localFont from 'next/font/local'

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const reemKufi = Reem_Kufi({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-reemKufi'
})

export const sourceSerif = localFont({
  src: [
    {
      path: '../../public/fonts/SourceSerifPro-SemiBold.otf',
      weight: '600'
    },
    {
      path: '../../public/fonts/SourceSerifPro-Regular.otf',
      weight: '400'
    }
  ],
  variable: '--font-source-serif'
})
