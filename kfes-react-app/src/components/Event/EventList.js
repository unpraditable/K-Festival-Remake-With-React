import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import EventDetail from '../EventDetail/EventDetail.js';

class EventList extends Component {

    state = {
        events: []
    }

    componentDidMount() {
    axios.get(`http://localhost:3000/data/EventList.json`)
        .then(res => {
            const events = res.data.data.event_list;
            this.setState({ events });
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
                                <div className="col-12 event-date-day" dangerouslySetInnerHTML={ {__html: event.date} }>

                                </div>
                            </div>
                            <div className="col-5 col-md-3 event-thumb">
                                <a href={ `events/${event.slug}` }  title={event.title}>
                                    <img src={event.image} width="100%" alt={`${event.title} Thumbnail`} />
                                </a>
                            </div>
                            <div className="col-5 col-md-8 event-item-caption">
                                <a href={ `events/${event.slug}` }title={event.title}>
                                    <h3>{event.title}</h3>
                                </a>
                                <a href={event.location_map} title={event.location} >
                                    <h4>{event.location}</h4>
                                </a>
                                <label className="event-label">{event.category}</label>
                                <p className="excerpt d-none d-sm-block">{event.excerpt}</p>

                                <Link to={ `events/${event.slug}` } exact title={event.title} className="view-button d-none d-sm-block">
                                    VIEW DETAIL 
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                </Link>
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
