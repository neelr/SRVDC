import Layout from "../components/Layout";
import Hero from "../components/Hero";
import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from "moment";
import fetch from 'isomorphic-unfetch';
const localizer = momentLocalizer(moment)


var events = 
    [
        {
              title: "Test Event",
              start: new Date("August 28, 2019 15:00:00"),
              end: new Date("August 28, 2019 16:00:00")
        }
    ]

var Calender = (props) => {
    
    return (
        <div>
            <Layout>
                <Hero>
                <link href="https://cdn.jsdelivr.net/npm/react-big-calendar@0.19.0/lib/css/react-big-calendar.css" rel="stylesheet"/>
                <div className="calendar">
                    <Calendar
                    localizer={localizer}
                    events={events}
                    />
                </div>
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
                    .calendar {
                        height:75vh
                    }
                `}</style>
            </Layout>
        </div>
    )
}

export default Calender;