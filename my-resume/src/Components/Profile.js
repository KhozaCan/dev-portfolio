import React, { Component } from 'react';
import ImgProfile from './images/Chicco.png';

export default class Profile extends Component {
  render() {
    return (
        <div>
            <div className="avatarImg">
            <img className="circle responsive-img"
            src={ImgProfile}
            alt="Chicco Khoza"
            />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
            <div className="card-content center social">
                <h2 className="grey-text text-lighten-3">
                    <strong>CHICCO KHOZA</strong>
                </h2>
                <h5 className="grey-text text-lighten-1">Full Stack Web Developer</h5>
                <a href="https://www.linkedin.com/in/chicco-khoza-0a417135" target="blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/KhozaCan" target="blank">
                    <i className="fab fa-github-square fa-2x"></i>
                </a>
            </div>
        </div>
        <div className="card light-blue darken-4 z-depth-0">
            <div className="card-content">
                <h6 className="white-text">
                    <strong>MY PROFILE</strong>
                </h6>
                <hr />
                <p className="grey-text text-lighten-3 pt">
                 I have over 7 years’ experience in the information Technology industry. I am a competent IT Support Professional with a proven track record of providing the highest levels of support, building relationships and leading a successful team for over 4 years. Recent life changing experiences had me switching careers to Web Development and now I am on that path thanks to Hyperion Dev's Bootcamp.
                </p>
            </div>
        </div>
        </div>
        
    )
  }
}
