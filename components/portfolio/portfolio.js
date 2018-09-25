import React, { Component } from 'react';

export class Portfolio extends Component {
        render() {
          return (
            <React.Fragment>
            <div id ="portfolio">
              <div className="row section-intro">
                <div className="col-twelve">
                  <h5>Portfolio</h5>
                  <h1>Check Out Some of My Work!</h1>
                  <p className="lead">A collection of some of my earlier illustrations as well a recent web applications and designs</p>
                </div>   		
              </div> {/* /section-intro*/} 
            </div>
            </React.Fragment>
          );
        }
    };
        export default Portfolio 
