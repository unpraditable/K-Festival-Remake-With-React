import React from 'react';
import Events from './Events.js';
import Passport from './Passport.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Header from './Event/Header.js';

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
                      <Router>
                        <Switch>
                          <Route exact path="/">
                            <Events></Events>
                          </Route>
                          <Route path="/passport">
                            <Passport></Passport>
                          </Route>
                        </Switch>
                      </Router>
                    </div>
                </div>		
            </div>
        </div>
      </div>
            	
  );
}

export default App;