import Head from "next/head";
import Ionicon from "react-ionicons";

export default () => (
  <div>
    <Head>
      <title>I create mobile apps using web technologies | Christian Justus</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Lato:700|Merriweather" rel="stylesheet" />
    </Head>
    <style global jsx>{`
      body {
        font-family: 'Merriweather';
        color: black;
        line-height: 1.6em;
        padding: 60px 0;
      }
      h1, h2, h3 {
        font-family: 'Lato';
        font-weight: 700;
        line-height: 1.2em;
        margin: 15px 0;
      }
      h1 {
        font-size: 2.5em;
      }
      h2 {
        font-size: 1.8em;
      }
      h3 {
        font-size: 1.2em;
      }
      p {
        margin-bottom: 30px;
      }
      ul {
        text-align: left;
      }
      a {
        color: #C72829;
        text-decoration: none;
        font-weight: bold;
      }
      a:active,
      a:hover {
        opacity: 0.8;
        text-decoration: underline;
      }
    `}</style>
    <style jsx>{`
      div {
        margin: 20px;
        text-align: center;
      }
      .photo img {
        margin: 25px 0;
        border-radius: 50%;
        width: 100%;
      }
      .stack img {
        margin: 15px;
        width: 48px;
      }
      .imprint {
        margin-top: 60px;
        color: silver;
      }
      @media (min-width: 768px) {
        div {
          max-width: 640px;
          margin: auto;
        }
        .photo img {
          width: 300px;
        }
      }
    `}</style>
    <h1>Christian Justus</h1>
    <h2>I create mobile apps using web technologies</h2>

    <p className="photo">
      <img src="/static/christianjustus.jpg" />
    </p>

    <p>
      I'm a Berlin-based JavaScript developer spezializing in mobile app developlment with Ionic Framework and React Native. I'm working as a tech lead at <a href="https://hybridhereos.de">Hybrid Heroes</a>. I co-organize the <a href="http://www.meetup.com/de-DE/Ionic-Berlin/">Ionic Berlin</a> Meetup. 
    </p>

    <h3>Stack</h3>

    <p className="stack">
      <img src="/static/typescript.jpg" alt="TypeScript"></img>
      <img src="/static/angular.jpg" alt="Angular"></img>
      <img src="/static/react.png" alt="React"></img>
      <img src="/static/ionic-framework.png" alt="Ionic Framework"></img>
      <img src="/static/cordova.png" alt="Cordova"></img>
      <img src="/static/react-native.jpg" alt="React Native"></img>
      <img src="/static/webpack.png" alt="Webpack"></img>
      <img src="/static/node-js.png" alt="Node.js"></img>
      <img src="/static/docker.png" alt="Docker"></img>
    </p>

    <h3>Speaking</h3>

    <p>
    I've been speaking about hybrid app development related topics at conferences and meetups:
    
    <ul>
      <li><a href="https://www.meetup.com/de-DE/Ionic-Berlin/">Ionic Berlin Meetup</a>: Optimizing Ionic Performance</li>
      <li>Hybrid Apps Berlin Meetup: 8 reasons to be excited about Ionic 2</li>
      <li><a href="https://scb15.de/#">Startup Camp 2015</a>: Fast-lane into App Store - Building hybrid mobile apps with web technologies</li>
      <li><a href="https://mobiletechcon.de/de/">Mobile Tech Conference 2014</a>: Nativ oder nicht - Die kommende Generation HTML5-basierter Hybrid-Apps</li>
    </ul>
    </p>

    <h3>Contact</h3>

    <p>
      <a href="mailto:christian.justus@gmail.com">
        Email
      </a> {'  ·  '} 
      <a href="https://github.com/krik">
        GitHub
      </a> {'  ·  '} 
      <a href="https://twitter.com/krik">
        Twitter
      </a> {'  ·  '} 
      <a href="https://www.linkedin.com/in/christian-justus/">
        LinkedIn
      </a>
    </p>

    <p className="imprint">
      Christian Justus · Reichenberger Str. 148 · 10999 Berlin 
    </p>

  </div>
);
