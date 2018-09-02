import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>
        I create mobile apps using web technologies | Christian Justus
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:700|Merriweather"
        rel="stylesheet"
      />
    </Head>
    <style global jsx>{`
      body {
        font-family: "Merriweather";
        color: black;
        line-height: 1.6em;
        padding: 60px 0;
      }
      h1,
      h2,
      h3 {
        font-family: "Lato";
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
        color: #f44171;
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
      I'm a Berlin-based JavaScript developer specializing in mobile app
      development with Ionic Framework and React Native. I'm working as a tech
      lead at <a href="https://hybridhereos.de">Hybrid Heroes</a>. I co-organize
      the <a href="http://www.meetup.com/de-DE/Ionic-Berlin/">Ionic Berlin</a>{" "}
      Meetup.
    </p>

    <h3>Stack</h3>

    <ul>
      <li>
        I'm an expert with <strong>Ionic Framework</strong>, having worked with
        it since the first beta. That includes the <strong>Cordova</strong>/<strong>PhoneGap</strong> runtime.
      </li>
      <li>
        I am equally experienced with <strong>React Native</strong>.
      </li>
      <li>
        I love the productivity of <strong>TypeScript</strong> and write all my
        code with it.
      </li>
      <li>
        I favor <strong>Redux</strong>
        -like ardchitecture for client-side apps, no matter the framework.
      </li>
      <li>I find my way around the backend using <strong>Node.js</strong> and <strong>Docker</strong>.</li>
      <li>
        I'm obsessed about tooling and never start a project without automation in place.
      </li>
      {
        // Jest
        // WebPack
        // Angular
        // React
        // Automation: Prettier, Husky, TSLint, Gitlab CI, Oneflow
      }
    </ul>

    <h3>Speaking</h3>

    <p>
      I've been speaking about hybrid app development related topics at
      conferences and meetups:
      <ul>
        <li>
          Optimizing Ionic Performance{" "}
          <a href="https://www.meetup.com/de-DE/Ionic-Berlin/">
            @Ionic Berlin Meetup
          </a>{" "}
          (
          <a href="https://slides.com/krik/optimizing-ionic-performance#/">
            Slides
          </a>
          )
        </li>
        <li>
          8 reasons to be excited about Ionic 2{" "}
          <strong>@Hybrid Apps Berlin Meetup</strong> (
          <a href="https://speakerdeck.com/hybridheroes/8-reasons-to-be-excited-about-ionic-2">
            Slides
          </a>
          )
        </li>
        <li>
          Fast-lane into App Stores: Building hybrid mobile apps with web
          technologies <a href="https://scb15.de/#">@Startup Camp 2015</a> (
          <a href="https://speakerdeck.com/hybridheroes/fast-lane-into-app-stores">
            Slides
          </a>
          )
        </li>
        <li>
          Nativ oder nicht - Die kommende Generation HTML5-basierter Hybrid-Apps{" "}
          <a href="https://mobiletechcon.de/de/">
            @Mobile Tech Conference 2014
          </a>
        </li>
      </ul>
    </p>

    <h3>Contact</h3>

    <p>
      <a href="mailto:christian.justus@gmail.com">Email</a> {"  ·  "}
      <a href="https://twitter.com/krik">Twitter</a> {"  ·  "}
      <a href="https://www.linkedin.com/in/christian-justus/">LinkedIn</a>{" "}
      {"  ·  "}
      <a href="https://github.com/krik">GitHub</a>
    </p>

    <p className="imprint">
      Christian Justus · Reichenberger Str. 148 · 10999 Berlin
    </p>
  </div>
);
