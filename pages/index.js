import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Typing, { Backspace, Delay, Reset } from 'react-typing-animation';


var styles = {
    heroText: {
        fontSize: "2rem"
    }
}

const Index = () => {
    var events = [{
        title: "Meeting",
        start: new Date('December 17, 2019 03:30:00'),
        end: new Date('December 17, 2019 04:30:00'),
        href: "https://google.com"
    }]
    return (

        <Layout>
                <div className="wrapper">
                    <Typing speed={75} loop>
                        <p className="herotext" style={styles.heroText}>Diversity</p>
                        <Backspace count={9} delay={2000} />
                        <Delay ms={500} />
                        <p className="herotext" style={styles.heroText}>Equity</p>
                        <Backspace count={6} delay={2000} />
                        <Delay ms={500} />
                        <p className="herotext" style={styles.heroText}>Inclusion</p>
                        <Backspace count={9} delay={2000} />
                        <Reset delay={500} />
                    </Typing>
                    <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus aspernatur magnam sequi dignissimos ab quo voluptatem itaque fugiat repellat inventore quod consequatur qui sint exercitationem fuga, quas autem nulla porro?</p>
                </div>
                <div className="wrapper">
                    <h1>Subheader 1</h1>
                    <p>Text</p>
                </div>
                <div className="wrapper">
                    <h1>Subheader 2</h1>
                    <p>Text</p>
                </div>
                <div className="wrapper">
                    <h1>Subheader 3</h1>
                    <p>Text</p>
                </div>
            <style >{`
                    @import url('https://fonts.googleapis.com/css?family=Montserrat:900,600&display=swap');
                    p {
                        font-weight:600;
                    }
                    .wrapper {
                        margin-bottom:50px;
                    }
                    .herotext {
                        font-weight:900;
                    }
                    html,body {
                        font-weight:900;
                        margin:0px;
                        font-family: 'Montserrat', sans-serif;
                        height: 100% !important;
                    }
                    p.text {
                        font-weight:900;
                        font-size:1.5rem;
                        text-indent:3em;
                    }
                    @media screen and (min-width: 800px) {
                        .herotext {
                            font-size:4rem !important;
                        }
                        .main {
                            padding-left: 100px !important;
                        }
                    }
                    @media screen and (max-width: 800px) {
                        .hidden-mobile {
                            display: none;
                        }
                        .text {
                            font-size:1rem;
                        }
                    }
                `}</style>
        </Layout>
    )
}

export default Index;