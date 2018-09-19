import React, { Component } from 'react';

export class Header extends Component {

    componentDidMount () {
        const script = document.createElement("script");

        script.src = "/Kards10/js/menu.js";
        script.async = true;

        document.body.appendChild(script);
    }


    render() {
      return (
        <React.Fragment>
        <header>
          <div className="row">
            <div className="top-bar">
              <a className="menu-toggle" href="#open"><span>Menu</span></a>
              <div className="logo">
                <a href="/index.html">SmallWorld</a>
              </div>		      
              <nav id="main-nav-wrap">
                <ul className="main-navigation">
                  <li className="current"><a className="smoothscroll" href="#intro" title>Home</a></li>
                  <li><a className="smoothscroll" href="#about" title>About</a></li>
                  <li><a className="smoothscroll" href="#resume" title>Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio" title>Portfolio</a></li>
                  <li><a className="smoothscroll" href="#contact" title>Contact</a></li>
                  <li><a href="Kards10/styles.html" title="">styles</a></li>	
                </ul>
              </nav>    		
            </div> {/* /top-bar */} 
          </div> {/* /row */} 
        </header>
        </React.Fragment>
      );
    }
  };
  
  export default Header
