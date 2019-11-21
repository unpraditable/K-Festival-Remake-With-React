import React, {Component} from 'react'; 
import axios from 'axios';
import EventMap from './EventMap';

class EventList extends Component {

    state = {
        events: []
    }

    componentDidMount() {
    axios.get(`http://localhost:3000/data/EventList.json`)
        .then(res => {
            const events = res.data.data.event_list;
            this.setState({ events });
            console.log(events);

        })
    }

    render()
    {
        return (
            <section className="col-12 section section-event">
                <div className="col-12 event-header" align="left">
                    <h2 className="head-gibson main-head"><i className="h2-icon event-icon"></i>EVENT LIST</h2>
                </div>
                <div className="col-12 event-body">
                { 
                    this.state.events.map(event => 
                        <div className="col-12 event-list-item row">
                            <div className={ `col-2 col-md-1 event-item-thumbnail ${event.category}` }>
                                <div className="col-12 event-date-day" align="left">
                                    17
                                </div>
                                <div className="col-12 event-date-month">
                                    SEPT
                                </div>
                                <div className="col-12 event-date-month">
                                    -
                                </div>
                                <div className="col-12 event-date-day" align="left">
                                    31
                                </div>
                                <div className="col-12 event-date-month">
                                    OCT
                                </div>
                            </div>
                            <div className="col-5 col-md-3 event-thumb">
                                <a href={event.slug} title={event.title}>
                                    <img src={event.image} width="100%" alt={`${event.title} Thumbnail`} />
                                </a>
                            </div>
                            <div className="col-5 col-md-8 event-item-caption">
                                <a href={event.slug} title={event.title}>
                                    <h3>{event.title}</h3>
                                </a>
                                <a href={event.location_map} title={event.location} >
                                    <h4>{event.location}</h4>
                                </a>
                                <label className="event-label">{event.category}</label>
                                <p className="excerpt d-none d-sm-block">{event.excerpt}</p>
                                <a href={event.slug} title={event.title} className="view-button d-none d-sm-block">
                                    VIEW DETAIL <span className="glyphicon glyphicon-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                    )
                }

                    
                </div>
            </section>
        )
    }
}

export default EventList; 
