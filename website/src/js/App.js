import '../css/App.css';

function Landing() {
  return (
    <body className="landing">  
    <div id="head">
        <ul className="navbar">
          <li> <div className="currPageSquare"> </div> </li>
          <li> About me </li>
          <li>Projects</li>
        </ul>
    </div>
    <div id="welcome-msg-div" >
          <h2 id="welcome-msg">Welcome to my site! I am</h2>
      </div>
    
    <div id="name-div">
      <h1 id="name-outline">RITHIK</h1>
      <h1 id="name">TANK</h1>
    </div>

    <div id="intro-me-div">
      <h2 id="intro-me">I am a <span>Computer Science</span> major who <br/> dabbles in a bunch of things.</h2>
    </div>

    <div class="footer">
      <div class="address">
          <p>2025</p>
          <p>2600 Baguio City <br/>- 40  Richwood Square </p>
      </div>

      <div class="info">
        <a href="https://github.com/RethinkWhat"><br/>Visit my Github?</a>
      </div>

      <div class="scroll">
        <p><br/>Scroll -----------</p>
      </div>

    </div>
    </body>
  );
}

export default Landing;
