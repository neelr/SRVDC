import { loadGetInitialProps } from "next-server/dist/lib/utils";

const Event = (props)=> {
    return(
        <div id={props.id} style={{display:"flex"}}>
            <div style={{flexDirection:"column",margin:"20px"}}>
                <h1>{props.title}</h1>
                <p className="desc">{props.desc}</p>
            </div>
            <img className="eventImage hidden-mobile" src={props.img}/>
            <style>{`
                .eventImage {
                    height:200px;
                    border-radius:20px;
                }
            `}</style>
        </div>
    )
}

export default Event;