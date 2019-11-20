import React, {Component} from 'react'; 


class Header extends Component { 
  
    render() 
    { 
        return (
            <header className="header-img-container">
                <img className="background-body d-block d-sm-none" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/header-bg.png" width="100%"/>
                <img className="background-body d-none d-sm-block" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/background.jpg" width="100%"/>
                <div className="container-fluid">
                    <ul className="nav nav-tabs main-tabs" role="tablist">
                        <li role="presentation" className="event-anchor-list">
                            <a href="#events" aria-controls="event" className="event-anchor" >Highlight</a>
                        </li>
                        <li role="presentation" className="korea-ticket-anchor-list">
                            <a href="#liburan-gratis-ke-korea" title="Liburan Gratis Ke Korea" className="korea-ticket-anchor">Liburan Gratis ke Korea</a>
                        </li>
                        <li role="presentation" className="k-pop-festival-anchor-list">
                            <a className="k-pop-festival-anchor" href="#k-pop-concert">K-Pop Festival</a>
                        </li>
                        
                        <li role="presentation" className="performance-ticket-anchor-list">
                            <a className="performance-ticket-anchor" href="#tiket-pertunjukkan-gratis" title="Tiket Pertunjukkan Gratis">Tiket Pertunjukkan Gratis</a>
                        </li>
                        <li role="presentation" className="k-sale-festa-anchor-list">
                            <a href="https://www.ilotte.com/promo-korean-festival-000000131515.do?ch=ETCTS5WKIV" className="k-sale-festa-anchor">Korean Bazaar</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    } 
}   

export default Header; 
