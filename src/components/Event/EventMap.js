import React, {Component} from 'react'; 

class EventMap extends Component {
    render()
    {
        return(
            <section name="event-map" className="col-12 section section-map">
                <div className="inner-section">
                    <div className="col-12" align="left">
                        <h2 className="head-gibson main-head"><i className="h2-icon map-marker-icon"></i> JAKARTA EVENT MAP</h2>
                    </div>
                    <div className="col-12">
                        <div class="row">
                            <div className="col-sm-6 map-containerx" >
                                <img className="image-map" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/k-festival-2019-map.png" width="100%" alt="K-Festival Event Map" title="K-Festival Event Map"/>
                            </div>
                            <div className="col-sm-6 image-right">
                                <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/k-festival-2019-map-legend.png" width="100%" alt="K-Festival 2019 Map Legend" title="K-Festival 2019 Map Legend"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
        
    }
}

export default EventMap;