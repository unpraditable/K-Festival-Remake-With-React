import React from 'react';
import Header from './Event//Header.js';
import Banners from './Event/Banners.js';
import EventList from './Event/EventList.js';
import EventMap from './Event/EventMap.js';
import EventSeo from './Event/EventSeo.js';
import EventCalendar from './Event/EventCalendar.js';

import {Helmet} from "react-helmet";

function App() {
  return (
      <div class="k-festival-wrap">
      <Helmet>
          <title>iLOTTE K-Festival</title>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>
      
      <Header></Header>

        <div className="container main clearfix" style={{overflow: "hidden"}}>
            <div className="row">
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="home">
                      <div class="col-12 content no-pad">
                        <Banners></Banners>
                        <EventList></EventList>
                        <EventCalendar></EventCalendar>

                        <EventMap></EventMap>
                        <EventSeo></EventSeo>
                      </div>
                    </div>
                </div>		
            </div>
        </div>
      </div>
            	
  );
}

export default App;
