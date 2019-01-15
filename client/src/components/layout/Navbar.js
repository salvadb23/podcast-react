import React, { Component } from "react";
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
                  <a class="navbar-item" href="google.com">
                    Home
                  </a>
                  <a class="navbar-item">
                    Login
                  </a>
                  <a class="navbar-item">
                    Signup
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title podhub">
              The easiest way to start, maintain and grow a podcast
            </h1>
            <h2 class="subtitle is-3">
              Welcome to Podhub
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
export default Navbar;
