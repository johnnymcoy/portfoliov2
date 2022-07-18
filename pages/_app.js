import MainNavigation from '../components/layout/MainNavigation'
import '../styles/globals.scss'
import "../public/static/clippy/build/clippy.css";
import Script from "next/script";
import Head from 'next/head'

import {Provider} from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
    {/* <Head> */}
        {/* <meta content="width=device-width, initial-scale=1" name="viewport" /> */}
        <link rel="stylesheet" type="text/css" href="https://rawgit.com/smore-inc/clippy.js/master/build/clippy.css" media="all"></link>
        <Script src="https://code.jquery.com/jquery-1.7.2.min.js"   strategy="beforeInteractive"/>
        {/* <!-- Clippy.js --> */}
        <Script type="text/javascript" src="/static/clippy/build/clippy.min.js"   strategy="beforeInteractive"/>
        {/* <!-- Init script --> */}
        <Script src="/static/clippy/script.js" strategy="afterInteractive"
            onLoad={() => {
                clippy.load('Clippy', run);
        }}/>
    {/* </Head> */}
    {/* <MainNavigation menuOpen={bIsMenuOpen} />  */}
    {/* <div className={bgBlurClass}> */}
    <Component {...pageProps}/>
    {/* </div> */}
    </Provider>
)}

export default MyApp
