import React, {Component} from 'react'; 

class FreeTicket extends Component {
    render() {
        return (
        <div className="col-12 content no-pad">
            <section className="col-12 section section-event">
                <div className="col-12" align="left">
                    <h2 className="head-gibson main-head">TANGGAL</h2>
                </div>
                <div className="col-12 event-body">

                    <div className="col-12 event-list-item row">
                        <div className="col-2 col-md-1 event-item-thumbnail k-performance">
                            <div className="col-12 event-date-day" align="left">
                                16 - 17
                            </div>
                            <div className="col-12 event-date-month">
                                OKT
                            </div>
                        </div>

                        <div className="col-5 col-md-7 event-thumb">
                            <a href="#flying" title="FLYING">
                                <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/event_image3.jpg" width="100%" alt="FLYING thumbnail" />
                            </a>
                        </div>
                        <div className="col-5 col-md-4 event-item-caption">
                            <a href="#flying" title="FLYING">
                                <h3>FLYING</h3>
                            </a>
                            <a href="https://g.page/artpreneur" title="Ciputra Artpreneur" >
                                <h4>Ciputra Artpreneur in Lotte Shopping Avenue</h4>
                            </a>
                            <label className="event-label">K-PERFORMANCE</label>
                            <p className="excerpt hidden-xs">FLYING adalah pertunjukan komedi non-verbal yang menceritakan kisah Hwarang (prajurit Korea) dan Dokkebi (monster Korea) yang datang dari masa lalu ke masa sekarang. </p>
                            <a href="https://www.ilotte.com/ev/flying-ticket-giveaway/000002302/view.do" title="FLYING" className="view-button registration" >
                                APPLY
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-12 event-list-item row">
                        <div className="col-2 col-md-1 event-item-thumbnail k-exhibition">
                            <div className="col-12 event-date-day" align="left">
                                26
                            </div>
                            <div className="col-12 event-date-month">
                                OKT
                            </div>
                        </div>

                        <div className="col-5 col-md-7 event-thumb">
                            <a href="#korea-culture-brand-festival" title="DICAPOEM Exhibition">
                            <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/event_image2a.jpg" width="100%" alt="Korea Culture Brand Festival Thumbnail"/>
                        </a>
                        </div>
                        <div className="col-5 col-md-4 event-item-caption">
                            <a href="#korea-culture-brand-festival" title="DICAPOEM Exhibition">
                                <h3>Korea Culture Brand Festival</h3>
                            </a>
                            
                            <a href="https://g.page/artpreneur" title="Ciputra Artpreneur in Lotte Shopping Avenue" >
                                <h4>Ciputra Artpreneur in Lotte Shopping Avenue</h4>
                            </a>
                            <label className="event-label">K-EXHIBITION</label>
                            <p className="excerpt hidden-xs">Ini merupakan ajang promosi pertukaran budaya dari kedua negara melalui gabungan pertunjukan seni tradisional Korea dan Indonesia.  </p>
                            <a href="https://www.ilotte.com/ev/korean-culture-brand-festival-ticket-giveaway/000002304/view.do" title="Korea Culture Brand Festival" className="view-button registration" >
                                APPLY
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

            
        )
    }
}

export default FreeTicket;