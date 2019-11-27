import React, {Component} from 'react'; 
import {Route} from 'react-router-dom';
import axios from 'axios';

function findSlug(data, slug) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].slug == slug) {
            return(data[i]);
        }
    }
}

// var item = findId(data, 1);

class EventDetail extends Component {

    state = {
        eventItem: []
    }

    componentDidMount() {
    axios.get(`http://localhost:3000/data/EventDetail.json`)
        .then(res => {
            const event = res.data.data.event_detail;
            var eventItem = findSlug(event, "korean-bazaar-on-sale")
            this.setState({eventItem});
            console.log(eventItem);
        })
    }

    render()
    {
        return( 
            // <Route path="/event-detail">
            //     <div className="col-12 event-detail">
            //     {
            //         this.state.eventItem.map(item =>
            //             <div className="col-sm-10 ml-auto mr-auto">
            //                 <h1 className="heading">{item.id}</h1>
            //                 <p className="event-detail-date"><b>Online Event: 17 September - 31 Oktober 2019</b></p>
            //                 <p className="event-detail-date"><b>Offline Event: 3 - 6 Oktober 2019</b></p>

            //                 <a href="https://g.page/CentralParkMallJkt"  title="Central Park Mall">VENUE: <br/> Central Park Mall, Jakarta Barat <br/>Ground Floor (GF), Promenade Laguna <br/>Dekat pintu masuk lobby Lumina dan Laguna, depan SOGO & Mango.</a>

            //                 <div className="row">
            //                     <div className="col-12 img-container">
            //                         <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/events/korean-bazaar-on-sale.jpeg" width="100%" alt="Korean Bazaar - On Sale Poster" />
            //                     </div>
            //                 </div>
            //                 <hr/>
            //                 <p className="desc">iLotte Pop Up Store Experience: </p>

            //                 <p className="desc">Menampilkan dan memperkenalkan produk-produk eksklusif asli dari Korea. Customer dapat melihat dan mencoba produk-produk dari brand-brand terlaris di Korea seperti MARHEN.J, MLB, SOMEBYMI, KLAVUU, berbagai macam album K-Pop, BT21, dan 400 brand Korea lainnya langsung di offline booth iLotte. </p>

            //                 <p className="desc">For more details, please visit:</p> <br/>

            //                 <p className="desc">Instagram @kmall_ilotte</p>
            //                 <a href="https://www.instagram.com/kmall_ilotte/"><p className="desc">https://www.instagram.com/kmall_ilotte/</p></a>
            //                 <br/>
            //                 <p className="desc">Instagram @ilotte_id</p>
            //                 <a href="https://www.instagram.com/ilotte_id/"></a><p className="desc">https://www.instagram.com/ilotte_id/</p>
                            
            //             </div>
            //         )
            //     }
                    
            //     </div>
            // </Route>
            <h1>Hello World</h1>
        )
    }
}

export default EventDetail;