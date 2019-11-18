import React from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
        
      <div className="container-fluid main clearfix" style={{overflow: "hidden"}}>
          <div className="row">
              <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="home">
                      <div id="app"></div>
                  </div>
              </div>		
          </div>
      </div>	
    </div>
  );
}

export default App;
