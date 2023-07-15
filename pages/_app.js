import '../app/globals.css'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/navigation.css"
import Link from "next/link"
import { createTheme, ThemeProvider, Typography } from "@mui/material"

export default function App({ Component, pageProps }) {

  const supernovaTheme = createTheme({
    components: {

      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "Poppins",
          },
          h1: {
            fontSize: '3.8em',
            fontWeight: "bold",
            color: "#00316E",
            '@media (max-width:600px)': {
              fontSize: '2em',
            },
            '@media (max-width:400px)': {
              fontSize: '1.5em',
            },
          },
          
          h2: {
            fontSize: "3.5em",
            fontWeight: "bold",
            color: "#00316E",
            '@media screen and (max-width: 600px)': {
              fontSize: '2em',
            },
            '@media (max-width:400px)': {
              fontSize: '1.5em',
            },

          },

          body1: 
            {
              '@media (max-width:350px)': {
                fontSize: '1.1em',
                textAlign: "justify",
                wordSpacing: "-2px"
              },
              '@media (max-width:280px)': {
                fontSize: '1.1em',
                textAlign: "center",
                wordSpacing: "5px"
              },
            }
        },
      },

      MuiButton: {
        styleOverrides: {
            root: {
              textAlign: "center",
            },
            green: {
                color: "white",
                backgroundImage: "linear-gradient(180deg,#00ff6d ,#00cea9 ,#0cf)",
                backgroundColor: "none",
                transition: "all 0.35s",
                boxShadow: "5px 5px 6px 0 rgba(0,0,0,.2)",
                height: "7vh",
                borderRadius: "0",
                minHeight: "50px",
                padding: "10px 30px"
            },

            outlined: {
              fontWeight: "bold"
            }
        },
    },

    }
  })

  return (
    <>
     <ThemeProvider theme={supernovaTheme}>
      
        <Nav />
        <Component {...pageProps} />
        <Footer />

      </ThemeProvider>
    </>
  )
}
