import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
const Layout = (props)=> {
    return(
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>SRVDC</title>
            </Head>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;