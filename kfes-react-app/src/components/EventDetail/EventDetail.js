import React, {Component} from 'react'; 
import { withRouter } from "react-router";
import axios from 'axios';

function findSlug(data, slug) {
    let array = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].slug == slug) {
            array.push(data[i]);
        }
    }
    return array;
}

// var item = findId(data, 1);

class EventDetail extends Component {

    state = {
        eventItem: []
    }

    componentDidMount() {
        const slug = this.props.match.params.slug;
    axios.get(`http://localhost:3000/data/EventDetail.json`)
        .then(res => {
            const event = res.data.data.event_detail;
            var eventItem = findSlug(event, slug);
            this.setState({eventItem});
        })
    }

    render()
    {
        return( 
                <div className="col-12 event-detail">
                {
                    this.state.eventItem.map(item =>
                        <div className="col-sm-10 ml-auto mr-auto">
                            <h1 className="heading">{item.title}</h1>
                            <p className="event-detail-date">
                                <strong dangerouslySetInnerHTML={ {__html: item.date} }></strong>
                            </p>

                            <br/>

                            <a href={item.location_map}  title={item.location_title} dangerouslySetInnerHTML={ {__html: item.location} }></a>

                            <div className="row">
                                <div className="col-12 img-container">
                                    <img src={item.image} width="100%" alt={item.title} />
                                </div>
                            </div>
                            <hr/>
                            <p className="desc" dangerouslySetInnerHTML={ {__html: item.content} }></p>

                            <div className="event-sns-wrapper">
                            { 
                                item.twitter_link ? (
                                    <a href={item.twitter_link}  title="KCC Indonesia Twitter" className="event-sns">
                                        <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-twitter.png" alt="Twitter Icon" />
                                    </a>
                                ) : (null)
                            }

                            { 
                                item.facebook_link ? (
                                    <a href={item.facebook_link}   title="KCC Indonesia Facebook" className="event-sns">
                                        <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-facebook.png" alt="Facebook Icon" />
                                    </a>
                                ) : (null)
                            }

                            { 
                                item.instagram_link ? (
                                    <a href={item.instagram_link}   title="KCC Indonesia Instagram" className="event-sns">
                                        <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-instagram.png" alt="Instagram Icon" />
                                    </a>
                                ) : (null)
                            }
                                
                            </div>
                            
                        </div>
                    )
                }
                    
                </div>
            // <h1>Hello World</h1>
        )
    }
}

export default EventDetail;