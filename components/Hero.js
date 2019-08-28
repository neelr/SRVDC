
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
    return(
        <div style={style.main}>
            <div className="main" style={style.inside}>
                {props.children}
            </div>
        </div>
    )
}

export default Hero;