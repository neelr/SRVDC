import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
const People = () => {
    return (
        <Layout>
            <Hero type="events">
                <h1 className="herotext">People</h1>
                <p>People in the Diversity Coalition who want to make a difference!</p>
            </Hero>
            <Hero>
                <Profile src="../static/neelredkar.jpg" name="Neel Redkar" sub="Web Developer" desc="Hi, I am a student in 9th grade who goes to DVHS or Dougherty Valley High School. I love to program and create new things that help other people. Some languages I know include, Python, JavaScript, HTML, CSS, Node.js, and Swift. These are used for various things including websites, apps, and servers. I also love math, science, and competitive debate!"/>
                <Profile src="https://images-cdn.9gag.com/photo/any62Xo_700b.jpg" name="Mr. Doggo" sub="Head Developer" desc="BARK BARK"/>
                <Profile src="https://cdn.vox-cdn.com/thumbor/U_dME6SDOaWgJe_CVA7ytQ2Sl6Q=/0x0:1400x700/1200x800/filters:focal(588x238:812x462)/cdn.vox-cdn.com/uploads/chorus_image/image/58844015/bb_groot.0.jpg" name="Groot" sub="Member" desc="I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. "/>
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
                            padding-left:50px !important;
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
                    @media screen and (max-width:620px) {
                        .name {
                            font-size:1.5em;
                        }
                        .desc {
                            display: none;
                        }
                        .sub {
                            font-size:1em;
                        }
                        .image {
                            height:15vh;
                        }
                    }
                `}</style>
        </Layout>
    )
}

export default People;