import React, { Component } from 'react';

export class Resume extends Component {

    render() {
      return (
          <React.Fragment>
        <div id = "resume">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Resume</h5>
              <h1>More of my credentials.</h1>
              <p className="lead"></p>
            </div>   		
          </div> {/* /section-intro*/} 
          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h2>Work Experience</h2>
            </div> {/* /resume-header */}
            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase" />
                  </div>
                  <div className="timeline-header">
                    <h3>Software Engineer Student</h3>
                    <p>May 2018 - August 2018</p>
                  </div>
                  <div className="timeline-content">
                    <h4>Zip Code Wilmington</h4>
                    <p> Three month bootcamp intensely learning Java, Object-Oriented Programming principles, & Spring.</p>
                  </div>
                </div> {/* /timeline-block */}
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase" />
                  </div>
                  <div className="timeline-header">
                    <h3>Priority Card Specialist/Subject Matter Expert</h3>
                    <p>September 2013 - Dec 2016</p>
                  </div>
                  <div className="timeline-content">
                    <h4>Bank of America</h4>
                    <h5>Small Business Credit Cards(SBCC)</h5>
                    <p>Interim Team Lead who was hand selected and led a team of 20+ associates in the SBCC.</p>
                  </div>
                </div> {/* /timeline-block */}
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase" />
                  </div>
                  <div className="timeline-header">
                    <h3>Customer Sales & Service Representative</h3>
                    <p>2012 -  2013</p>
                    <h3>Teller</h3>
                    <p>2010 -  2012</p>
                  </div>
                  <div className="timeline-content">
                    <h4>Wells Fargo, N.A. </h4>
                    <p>Spent 3 years of my life here and I will never go back!</p>
                  </div>
                </div> {/* /timeline-block */}
              </div> {/* /timeline-wrap */}   			
            </div> {/* /col-twelve */}
          </div> {/* /resume-timeline */}
          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h2>Education</h2>
            </div> {/* /resume-header */}
            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap" />
                  </div>
                  <div className="timeline-header">
                    <h3>Incomplete Bachelors Degree *30 Credits*</h3>
                    <p>September 2008 - June 2009</p>
                  </div>
                  <div className="timeline-content">
                    <h4>Art Institute of Philadelphia</h4>
                    <p> It was the worst school I ever atteneded and am now glad that it's gone.</p>
                  </div>
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap" />
                  </div>
                  <div className="timeline-header">
                    <h3>H.S. Diploma/Graphic Design</h3>
                    <p>August 2005 - June 2008</p>
                  </div>
                  <div className="timeline-content">
                    <h4>Delcastle Technical High</h4>
                    <p> Studied Graphic Design.</p>
                  </div>
                </div> {/* /timeline-block */}
                 {/* /col-twelve */}
          </div> {/* /resume-timeline */}
        </div>
      </div>
    </div>
    </React.Fragment>
      );
    }
};

export default Resume