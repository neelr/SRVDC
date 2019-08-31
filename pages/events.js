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
              title: "Angel Hacks",
              start: new Date("October 26, 2019 8:30:00"),
              end: new Date("October 26, 2019 21:45:00"),
              href:"angels"
        }
    ]

var Calender = (props) => {
    
    return (
            <Layout>
                <link href="https://cdn.jsdelivr.net/npm/react-big-calendar@0.19.0/lib/css/react-big-calendar.css" rel="stylesheet"/>
                <h1 className="herotext">Events!</h1>
                <Event id="angels" title="Angel Hacks" desc="AngelHacks is a 12-hour hackathon. 100 students from across LA will come for the weekend. You’ll team up (or go solo, if that’s what you prefer) to build an app, game, or website. We’ll provide free meals & drinks. In the evening, judges will pick the best projects to demo for everyone and win prizes. There'll be raffles and giveaways throughout the event as well! You’ll meet people, create amazing new things, & have fun." img="https://angelhacks.org/static/logo-inverted.png"/>
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