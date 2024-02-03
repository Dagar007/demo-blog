import Navbar from '@/conponents/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/conponents/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dotnet World',
  description: ' This is one place to discuss latest happening in dotnet world. Learn optimization, performance enhancement tips and trends in dotnet technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
          <div className='container'>
            <div className='wrapper'>
              <Navbar />
                {children}
              <Footer />
            </div> 
          </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
