import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <section class="hero is-link is-medium">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <h1 class="logo">Podhub</h1>
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                  <Link class="navbar-item" to="/">
                    Home
                  </Link>
                  <Link class="navbar-item" to="/login">
                    Login
                  </Link>
                  <Link class="navbar-item" to='/register'>
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}
export default Navbar;
