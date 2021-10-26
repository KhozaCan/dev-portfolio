import React, { Component } from 'react';
import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import About from './About';
import Skills from './Skills'


export default class Home extends Component {
    render() {
      return (
        <section>
          <div className="row sameHeight">
              <div className="col s12 m12 l4 light-blue darken-4 sameHeight_child">
                  <Profile />
                  <Contact />
                  <Skills />
              </div>
              <div className="col s12 m12 l8 white sameHeight_child">
                  <About />
                  <Education />
                  <Experience />
              </div>
          </div>
        </section>
      )
    }
  }
