import { PT_Serif, Rubik } from 'next/font/google'
import "./globals.css";
import AuthProvider from '@/providers/AuthProvider';
import LoadingProvider from '@/providers/LoadingProvider';
import ScrollTopBtn from '@/shared/ScrollTopBtn';
import Cursor from '@/components/Cursor';


export const metadata = {
  title: "UICC",
  description: "Uttara International Career Counciling",
};

export const serif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <main className={`max-w-[1920px] mx-auto min-h-screen ${serif.className}`}>
          <AuthProvider>
            <LoadingProvider>
              <Cursor />
              {children}
              <div className='fixed 2xl:bottom-28 xl:bottom-28 2xl:right-16 xl:right-16 bottom-10 right-8 z-50'>
                <ScrollTopBtn />
              </div>
            </LoadingProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
