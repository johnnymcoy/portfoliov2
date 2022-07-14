import MainNavigation from '../components/layout/MainNavigation'
import '../styles/globals.scss'
import "../public/static/clippy/build/clippy.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {

  return (
  <>
    <link rel="stylesheet" type="text/css" href="https://rawgit.com/smore-inc/clippy.js/master/build/clippy.css" media="all"></link>
    <Script src="https://code.jquery.com/jquery-1.7.2.min.js"   strategy="beforeInteractive"/>
    {/* <!-- Clippy.js --> */}
    <Script type="text/javascript" src="/static/clippy/build/clippy.min.js"   strategy="beforeInteractive"/>
    {/* <!-- Init script --> */}
    <Script src="/static/clippy/script.js" strategy="afterInteractive"
    onLoad={() => {
        clippy.load('Clippy', run);
    }}/>
    <MainNavigation /> 
    <Component {...pageProps}/>
  </>);
}

export default MyApp
