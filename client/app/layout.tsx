import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/header'

const inter = Poppins({ weight: "300", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cactus Airlines',
  description: 'Welcome to version 2 of the cactus airlines website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='relative'>
        {children}
        </main>
      </body>
    </html>
  )
}
