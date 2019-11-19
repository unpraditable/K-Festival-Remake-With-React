import React from 'react';
import Header from './Header.js';
import Banners from './Banners.js';
import EventList from './EventList.js';
import EventMap from './EventMap.js';
import EventSeo from './EventSeo.js';
import EventCalendar from './EventCalendar.js';

import {Helmet} from "react-helmet";

function App() {
  return (
      <div class="k-festival-wrap">
      <Helmet>
          <title>iLOTTE K-Festival</title>
      </Helmet>
      <Header></Header>

        <div className="container main clearfix" style={{overflow: "hidden"}}>
            <div className="row">
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="home">
                      <div class="col-12 content no-pad">
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
