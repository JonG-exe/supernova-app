import '../app/globals.css'
import Nav from "../components/Nav"
import "../styles/navigation.css"
import Link from "next/link"

export default function App({ Component, pageProps }) {

  return (
    <>
        <Nav />
        <Component {...pageProps} />
    </>
  )
}
