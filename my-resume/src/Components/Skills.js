import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
        <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong>PROFESSIONAL SKILLS</strong>
            </h6>
            <hr />
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">HTML</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '65%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">CSS</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '45%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">GOOGLE</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '95%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">REACT</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '15%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">JQUERY</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '10%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">JAVASCRIPT</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '15%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
