import Header from "../components/Header";
import Head from "next/head";
import Hero from "../components/Hero";
const Layout = (props)=> {
    return(
        <div style={{height:"100%"}}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>SRVDC</title>
            </Head>
            <Header/>
            <Hero>
                {props.children}
            </Hero>
        </div>
    )
}

export default Layout;