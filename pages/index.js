import Header from "../components/Header";
import Head from "next/head";

var styles = {
    header:{

    }
}
const Index = () => {
    return (
        <div style={styles.header}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <Header />
            <p></p>
            <style jsx global>{`
            body {
                margin:0px;
            }
            `}</style>
        </div>
    )
}

export default Index;