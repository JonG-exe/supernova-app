// import '@/styles/globals.css'
import Nav from "../components/Nav"
import "../styles/navigation.css"

export default function App({ Component, pageProps }) {

  return (
    <>
        <Nav />
        <Component {...pageProps} />
    </>
  )
}
