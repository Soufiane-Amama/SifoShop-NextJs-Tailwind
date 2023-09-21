import './globals.css'
import { Montserrat, Lalezar } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import OpenMenuProvider from '@/context/OpenMenuContext'

// طريقة استراد خط من جوجل 
const bodyFont = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '900', '700'],
 })

// طريقة استراد خط اخر لكن هذا الخط يمتلك وزن واحد فقط وهذا لن يقبله نيكست ولحل المشكلة تقوم باستراد الوزن الوحيد معه
const lalezar = Lalezar({ 
  subsets: ['arabic'],
  weight: ['400'],  // تم اسستراد الوزن ..ليعلم نيكست انك تريد فقط هذا الوزن 
 })

export const metadata = {
  title: 'SIFOSHOP - Home',
  description: 'Get ready to explore our exceptional shopping world. High-quality and incredible variety at astonishing prices. Start your journey today and easily find everything you need. Discover excellence in every corner of our store. An unforgettable shopping experience awaits!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <OpenMenuProvider>
              <Navbar />
               {children}
              <Footer />
          </OpenMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
