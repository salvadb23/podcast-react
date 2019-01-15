import React, { Component } from "react";

const people = require ('../../people.png');
const social = require ('../../social.png');
const email = require ('../../email.png')
const imgStyle = {
  padding: '50px',
};
const olStyle = {
  width: '65%',
};
const socialImgStyle = {
  width: '90%',
  marginLeft:'40px',
};
const h2EmailStyle = {
  textAlign: 'center',
  padding: '20px',
  fontSize: '26px',
}

class Landing extends Component {
  render() {
    return (
    <div>
      <div className="info is-large">
        <div className="svg-image-container"></div>
        <div className="columns" style= {imgStyle} >
          <div className="column">
            <img src={people}></img>
          </div>
          <div className="column">
            <h1 className="info-title">Features to fit anyones needs!</h1>
            <ol>
              <li>Free Unlimited Storage. No limits, no free trials.</li>
              <li>Distribute to every app that features podcasts with one click</li>
              <li>We make it easy to monetize your content. Ads, premium podcasts and donations can all be done from our dashboard</li>
            </ol>
          </div>
        </div>
      </div>

      <section className="social">
        <div className="columns social-columns">
          <div className="column">
            <h1 className=" social-title">For the podcast listeners</h1>
            <ol style={olStyle}>
              <li>A new kind of social network, just for podcast listeners</li>
              <li>Connect with people that listen to the same podcasts as yourself</li>
              <li>Interact/support content creators in all new ways</li>
            </ol>
          </div>
          <div className="column">
            <img style={socialImgStyle} src={social}></img>
          </div>
        </div>
      </section>

      <section className="email">
        <h1 className="title email-title">Stay Updated</h1>
        <h2 className="subtitle" style={h2EmailStyle}>We're not live yet, but enter your email below and make sure you're notified when we are!</h2>
        <div className="wrapper-email">
          <input type="text" name="email" placeholder="enter your email" className="email-input"></input>
        </div>
        <div className="wrapper-img">
          <img className="email-img" src={email}></img>
        </div>
      </section>


      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <a
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </a>
            <a
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
            </a>
          </div>
        </div>
      </div>

    </div>
    );
  }
}
export default Landing;