import React, {Component} from 'react'; 
import Slider from "react-slick";
import $ from 'jquery';

import Carousel from 'react-bootstrap/Carousel';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
const bootstrap = require('bootstrap');

function NextArrow(props) {
    return (
        <i className="bannerArrow nextArrow glyphicon glyphicon-menu-right">

        </i>
    );
  }
  
  function PrevArrow(props) {
    return (
        <i className="bannerArrow prevArrow glyphicon glyphicon-menu-left">

        </i>
    );
  }

class Banners extends Component {
    render()
    {
        return (
            <section className="col-xs-12 section section-banner">
                <Carousel>
                <Carousel.Item>
                    <a href="#korea-indonesia-film-festival" title="Korea Indonesia Film Festival">
                        <div className="banner-slide-item" align="center">
                            <img className="bg-slider" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_koreanculture.jpg" width="100%" alt="Korea - Indonesia 10th Film Festival Billboard" />
                        </div>
                    </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#hangul-day" title="Hangul Day">
                            <div className="banner-slide-item" align="center">
                                <img className="bg-slider" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_hangulday.jpg" width="100%" alt="Hangul Day Event Billboard" />
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#seoul-food-from-home" title="Seoul Food From Home">
                            <div className="banner-slide-item" align="center">
                                <img className="bg-slider" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_kfood.jpg" width="100%" alt="Seoul Food From Home" />
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#k-content-expo-2019" title="K-Content Expo 2019">
                            <div className="banner-slide-item" align="center">
                                <img className="bg-slider" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_kcontent.jpg" width="100%" alt="K-Content Event Billboard" />
                            </div>
                        </a>
                    </Carousel.Item>
                </Carousel>
            </section>
        )
    }
}

export default Banners; 