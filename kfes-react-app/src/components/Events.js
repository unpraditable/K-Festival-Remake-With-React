import React, {Component} from 'react'; 
import Banners from './Event/Banners.js';
import EventList from './Event/EventList.js';
import EventMap from './Event/EventMap.js';
import EventSeo from './Event/EventSeo.js';
import EventCalendar from './Event/EventCalendar.js';

class Events extends Component {
    render()
    {
        return (
            <div className="col-12 content no-pad">
                <Banners></Banners>
                <EventList></EventList>
                <EventCalendar></EventCalendar>
                <EventMap></EventMap>
                <EventSeo></EventSeo>
            </div>
        )
    }
}

export default Events; 