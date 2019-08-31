import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
const People = () => {
    return (
        <Layout type="events">
                <h1 className="herotext">People</h1>
                <p>People in the Diversity Coalition who want to make a difference!</p>
                <br/><br/>
                <Profile src="../static/neelredkar.jpg" name="Neel Redkar" sub="Web Developer" desc="Hi, I am a student in 9th grade who goes to DVHS or Dougherty Valley High School. I love to program and create new things that help other people. Some languages I know include, Python, JavaScript, HTML, CSS, Node.js, and Swift. These are used for various things including websites, apps, and servers. I also love math, science, and competitive debate!"/>
                <Profile src="https://www.tenforums.com/geek/gars/images/2/types/thumb_14400082930User.png" name="Person" sub="Who am I?" desc="Description"/>
                <Profile src="https://www.tenforums.com/geek/gars/images/2/types/thumb_14400082930User.png" name="Person" sub="Who am I?" desc="Description"/>
            <style>{`
                    @import url('https://fonts.googleapis.com/css?family=Montserrat:900,600&display=swap');
                    body {
                        margin:0px;
                        font-family: 'Montserrat', sans-serif;
                        font-weight:900;
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
                    .desc {
                        font-weight:600;
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