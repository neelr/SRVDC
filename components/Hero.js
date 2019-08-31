
var style = {
    main: {
        height: "100vh",
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
            </div>
        )
    }else {
        return(
            <div style={style.main}>
                <div className="main" style={style.inside}>
                    {props.children}
                </div>
            </div>
        )
    }
}

export default Hero;