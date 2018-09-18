import React, { Component } from 'react';

export class Contact extends Component {

    render() {
          return (
            <div>
              <div className="row section-intro">
                <div className="col-twelve">
                  <h5>Contact</h5>
                  <h1>I'd Love To Hear From You.</h1>
                  <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
                </div> 
              </div> {/* /section-intro */}
              <div className="row contact-form">
                <div className="col-twelve">
                  {/* form */}
                  <form name="contactForm" id="contactForm" method="post" action>
                    <fieldset>
                      <div className="form-field">
                        <input name="contactName" type="text" id="contactName" placeholder="Name" defaultValue minLength={2} required />
                      </div>
                      <div className="form-field">
                        <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" defaultValue required />
                      </div>
                      <div className="form-field">
                        <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" defaultValue />
                      </div>                       
                      <div className="form-field">
                        <textarea name="contactMessage" id="contactMessage" placeholder="message" rows={10} cols={50} required defaultValue={""} />
                      </div>                      
                      <div className="form-field">
                        <button className="submitform">Submit</button>
                        <div id="submit-loader">
                          <div className="text-loader">Sending...</div>                             
                          <div className="s-loader">
                            <div className="bounce1" />
                            <div className="bounce2" />
                            <div className="bounce3" />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form> {/* Form End */}
                  {/* contact-warning */}
                  <div id="message-warning">            	
                  </div>            
                  {/* contact-success */}
                  <div id="message-success">
                    <i className="fa fa-check" />Your message was sent, thank you!<br />
                  </div>
                </div> {/* /col-twelve */}
              </div> {/* /contact-form */}
              <div className="row contact-info">
                <div className="col-four tab-full">
                  <div className="icon">
                    <i className="icon-pin" />
                  </div>
                  <h5>Where to find me</h5>
                  <p>
                    1600 Amphitheatre Parkway<br />
                    Wilmington, DE<br />
                    19806 US
                  </p>
                </div>
                <div className="col-four tab-full collapse">
                  <div className="icon">
                    <i className="icon-mail" />
                  </div>
                  <h5>Email Me At</h5>
                  <p>rjsmall90@gmail.com<br />
                  </p>
                </div>
                <div className="col-four tab-full">
                  <div className="icon">
                    <i className="icon-phone" />
                  </div>
                  <h5>Call Me At</h5>
                  <p>Phone: (302) 613 1136<br />
                  </p>
                </div>
              </div> {/* /contact-info */}
            </div>
          );
        }
      };

      export default Contact
