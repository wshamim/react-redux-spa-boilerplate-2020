import React from 'react';

import './404.scss';

function NotFound() {
  return (
    <div className="App page404Root">
      <div className="AppBody">
        <div className="mainPanel page404">
          <div className="heroSection">
            <span className="heroText">Page not found (404)</span>
            <span className="heroSubtitle">
              For whatever reason we couldnt find this page for you, sorry!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
