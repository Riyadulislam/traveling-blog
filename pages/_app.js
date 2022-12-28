import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps,session }) {
  return <>
  <SessionProvider session={session}>
  <Navbar></Navbar>
   <Component {...pageProps} />
  <Footer></Footer>
  </SessionProvider>
  
   </>
}
