"use client"

import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const cache=createCache({ key: 'css' });


  return (
    <html lang="en">
      <body>
        {/*<ThemeProvider theme={theme}>*/}
        {/*<CssBaseline/>*/}
          <Navbar/>
        <main>
          {children}
        </main>
          <Footer/>
          {/*</ThemeProvider >*/}
      </body>
    </html>
  )
}
