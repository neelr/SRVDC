
var style = {
    main: {
        height: "100vh",
        width:"100vw",
    },
    inside: {
        padding: "100px"
    }
}
const Hero = (props) => {
    return(
        <div style={style.main}>
            <div style={style.inside}>
                {props.children}
            </div>
        </div>
    )
}

export default Hero;