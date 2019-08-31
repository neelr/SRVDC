
const Profile = (props)=> {
    return(
        <div style={{display:"flex"}}>
            <img className="image" src={props.src}/>
            <div style={{flexDirection:"column"}}>
                <h1 className="name">{props.name}</h1>
                <h2 className="sub">{props.sub}</h2>
                <p className="desc">{props.desc}</p>
            </div>
            <style>{`
                .image {
                    margin:10px;
                    height:25vh;
                    border-radius:100px;
                }
            `}</style>
        </div>
    )
}

export default Profile;