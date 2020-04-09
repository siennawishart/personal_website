import React, { Component } from 'react'

export default class Topnav extends Component {
  render() {
    return (
    <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#work" className="w3-bar-item w3-button"><b>SW</b> logo </a>
          {/* Float links to the right. Hide them on small screens */}
          <div className="w3-right w3-hide-small">
              {/* logo should take to home, work should scroll page down to work within home */}
            <a href="#work" className="w3-bar-item w3-button">Work</a>
            <a href="#about" className="w3-bar-item w3-button">About</a>
            {/* <a href="#resume" className="w3-bar-item w3-button">Resume</a> */}
            <a href="#contact" className="w3-bar-item w3-button">Contact</a>
          </div>
        </div>
      </div>
    )
  }
}