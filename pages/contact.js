import Layout from "../components/Layout";
import Hero from "../components/Hero";

const Contact = () => {
    return(
        <div>
            <Layout>
            <Hero>
                <h1 className="herotext">Contact Us</h1>
                <p className="text">Feel free to email us at ...</p>
            </Hero>
            <style>{`
            @import url('https://fonts.googleapis.com/css?family=Montserrat:900&display=swap');
            body {
                margin:0px;
                font-family: 'Montserrat', sans-serif;
            }
            .text {
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
        </div>
    )
}

export default Contact;