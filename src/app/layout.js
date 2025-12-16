

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import Footer from '@/common/fotter/footer';
import FloatingContact from '@/components/FloatingContact';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maitrii Loans | Mentor Finmart Pvt. Ltd. - Trusted Finance Company in Rajasthan',
  description: 'Mentor Finmart Pvt. Ltd. (Maitrii Loans), headquartered in Jaipur, is one of the most diversified finance companies in Rajasthan. Established in 1989, we offer flexible personal and business loan solutions with terms from 3 to 7 years, minimal documentation and easy payment options.',
  keywords: 'Maitrii Loans, Mentor Finmart, Personal Loan, Business Loan, Vehicle Loan, Mortgage Loan, Jaipur, Rajasthan, Finance Company',
  openGraph: {
    title: 'Maitrii Loans | Mentor Finmart Pvt. Ltd.',
    description: 'Trusted finance company in Rajasthan offering flexible personal and business loan solutions since 1989.',
    url: 'https://maitrii.in',
    siteName: 'Maitrii Loans',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <FloatingContact />
        <Footer />
      </body>
    </html>
  )
}
