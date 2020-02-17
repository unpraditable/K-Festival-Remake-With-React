import React, {Component} from 'react'; 
import Banners from './Event/Banners.js';
import EventList from './Event/EventList.js';
import EventMap from './Event/EventMap.js';
import EventSeo from './Event/EventSeo.js';
import EventCalendar from './Event/EventCalendar.js';
import { Link, animateScroll as scroll } from "react-scroll";

class Events extends Component {
    render()
    {
        return (
            <div className="col-12 content no-pad">
                
                <section class="col-12 section section-navigation">
                    <Link to="event-map" smooth={true} class="anchor-wrapper map-anchor-wrapper float-right d-none d-sm-block">
                        MAP
                    </Link>
                    <Link to="event-calendar" smooth={true}  class="anchor-wrapper float-right calendar-anchor-wrapper d-none d-sm-block">
                        CALENDAR
                    </Link>
                </section>
                <Banners></Banners>
                <EventList></EventList>
                <EventCalendar></EventCalendar>
                <EventMap ></EventMap>
                <EventSeo></EventSeo>
            </div>
        )
    }
}

export default Events; 