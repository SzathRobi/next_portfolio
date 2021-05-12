import Header from '../comps/Header/Header'
import Footer from '../comps/Footer/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
