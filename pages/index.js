import Header from "../components/Header";
import Head from "next/head";
import Hero from "../components/Hero";
import Typing, { Backspace,Delay,Reset} from 'react-typing-animation';
var styles = {
    heroText:{
        fontSize: "4em"
    }
}
const Index = () => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <Header />
            <Hero>
                <Typing speed={50} loop>
                    <p style={styles.heroText}>Diversity</p>
                    <Backspace count={9} delay={1000} />
                    <Delay ms={500} />
                    <p style={styles.heroText}>Acceptance</p>
                    <Backspace count={10} delay={1000} />
                    <Delay ms={500} />
                    <p style={styles.heroText}>Safe Zone</p>
                    <Backspace count={9} delay={1000} />
                    <Reset delay={500} />
                </Typing>
            </Hero>
            <style jsx global>{`
            @import url('https://fonts.googleapis.com/css?family=Montserrat:900&display=swap');
            body {
                margin:0px;
                font-family: 'Montserrat', sans-serif;
            }
            `}</style>
        </div>
    )
}

export default Index;