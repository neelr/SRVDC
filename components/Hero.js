import Footer from "../components/Footer";
var style = {
    main: {
        height: "100%",
        width:"100vw",
    },
    inside: {
        padding: "25px"
    }
}
const Hero = (props) => {
    if (props.type == "events") {
        return(
            <div>
                <div className="main" style={style.inside}>
                    {props.children}
                </div>
                <Footer/>
            </div>
        )
    }else {
        return(
            <div style={style.main}>
                <div className="main" style={style.inside}>
                    {props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Hero;