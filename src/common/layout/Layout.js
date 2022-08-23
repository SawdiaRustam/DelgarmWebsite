
import React, { children } from 'react'
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
const Layout=({ children }) => {
    const maincontainer=[
        'flex flex-col',
        'min-h-screen',
        'items-center',
        'justify-center',
        'w-full',
        'mx-auto'
    ].join(" ");
    const header_footer=[
        'flex-0',
        'w-full'
    ].join(" ");
    const main=[
        'flex-1',
        'w-full'
    ].join(" ")

    return (
        <div className={`${maincontainer}`}>
            <Head>
                <title> DelGarm</title>
            </Head>
            <header className={`${header_footer}`}>
                <Header />
            </header>
            <main className={`${main}`}>
                {children}
            </main>
            <footer className={`${header_footer}`}>
                <Footer />
            </footer>
        </div>
    )

}
export default Layout