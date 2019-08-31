import Layout from "../components/Layout";
import Hero from "../components/Hero";
import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from "moment";
import Event from "../components/Event";
import { browserHistory } from 'react-router'
const localizer = momentLocalizer(moment)


var events = 
    [
        {
              title: "Example Event",
              start: new Date("September 1, 2019 8:30:00"),
              end: new Date("September 1, 2019 21:45:00"),
              href:"ex"
        }
    ]

var Calender = (props) => {
    
    return (
            <Layout>
                <link href="https://cdn.jsdelivr.net/npm/react-big-calendar@0.19.0/lib/css/react-big-calendar.css" rel="stylesheet"/>
                <h1 className="herotext">Events!</h1>
                <Event id="ex" title="Example Event" desc="Description................" img="https://media.istockphoto.com/photos/diverse-group-of-people-community-togetherness-concept-picture-id623600600?k=6&m=623600600&s=612x612&w=0&h=7ist1JFalJ0WMCLqy_-nbEfkjmpD0uP_UN7ksZzVTms="/>
                <br/><br/>
                <div className="calendar">
                    <Calendar
                    localizer={localizer}
                    events={events}
                    onSelectEvent={(e)=>window.location.href = "#" + e.href}
                    />
                </div>
                <style>{`
                    @import url('https://fonts.googleapis.com/css?family=Montserrat:900,600&display=swap');
                    .desc {
                        font-weight:600;
                    }
                    body {
                        margin:0px;
                        font-family: 'Montserrat', sans-serif;
                    }
                    .text {
                        font-size:1.5rem;
                        text-indent:3em;
                    }
                    .item {
                        font-weight:900;
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
                    .calendar {
                        height:75vh
                    }
                    .rbc-btn-group button {
                        font-family: 'Montserrat', sans-serif;
                      }
                `}</style>
            </Layout>
    )
}

export default Calender;