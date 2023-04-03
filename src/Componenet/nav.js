import React, { Component } from "react";
import "../nav.css";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navFix: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
    if (this.state.navFix === false && window.scrollY > 0) {
        this.setState({navFix: true});
    }
    if (this.state.navFix === true && window.scrollY == 0){
        this.setState({navFix: false});
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div id="nav_bar">
        <header style={this.state.navFix ? {
            position: "fixed",
            top: "0%",
            width: "100%"
        } : {}} className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a id="logo" className="navbar-brand" href="#">
             Bishal TUTORIAL
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link pagesLink" href="#">
                    Home Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pagesLink" href="#">
                    Classical Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pagesLink" href="#">
                    Layout page
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
