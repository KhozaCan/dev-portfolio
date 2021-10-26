import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong><i class="fas fa-graduation-cap"></i> EDUCATION</strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>BOSTON CAMPUS - NETWORKING SPECIALIST</strong>
                    <span>2008 - 2011</span>
                  </h6>
                  <p className="pt">
                  </p>
                </blockquote>
              </div>
              <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>FULLSTACK WEB DEVELOPMENT BOOTCAMP</strong>
                    <span>2021 - 2021</span>
                  </h6>
                  <p className="pt">
                  </p>
                </blockquote>
              </div>
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>OTHER CERTIFICATES</strong>
                    <span>2014 - 2015</span>
                  </h6>
                  <p className="pt">
                      <ul>
                          <li>
                          Internship Certificate from the Gauteng Office of the Premier.
                          </li>
                          <li>
                          Microsoft Course 6292 and 6293 Windows 7 Bootcamp. 
                          </li>
                          <li>
                          IBM: Servicing IBM Systems X Servers Part 1 and 2.
                          </li>
                          <li>
                          Lenovo: Service Training Qualifications. 
                          </li>
                          <li>
                          National Certificate: Information Technology System Support NQF.
                          </li>
                        
                      </ul> 
 
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
