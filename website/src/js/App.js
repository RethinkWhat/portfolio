import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import '../css/App.css';

function Landing() {
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })

    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }

  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "red",
      mixBlendMode: "difference"

    }
  }

  const textEnter = () => {
    setCursorVariant("text");
  }
  const textLeave = () => {
    setCursorVariant("default");
  };

  return (
    <main className="landing">  
    <div id="head">
        <ul className="navbar">
          <li> <div className="currPageSquare"> </div> </li>
          <li onMouseEnter={textEnter} onMouseLeave= {textLeave}> About me </li>
          <li onMouseEnter={textEnter} onMouseLeave= {textLeave}>Projects</li>
        </ul>
    </div>
    <div id="welcome-msg-div" >
          <h2 onMouseEnter={textEnter} onMouseLeave= {textLeave} id="welcome-msg">Welcome to my site! I am</h2>
      </div>
    
    <div id="name-div">
      <h1 onMouseEnter={textEnter} onMouseLeave= {textLeave} id="name-outline">RITHIK</h1>
      <h1 onMouseEnter={textEnter} onMouseLeave= {textLeave} id="name">TANK</h1>
    </div>

    <div id="intro-me-div">
      <h2 onMouseEnter={textEnter} onMouseLeave= {textLeave} id="intro-me">I am a <span>Computer Science</span> major who <br/> dabbles in a bunch of things.</h2>
    </div>

    <div className="footer">
      <div className="address">
          <p onMouseEnter={textEnter} onMouseLeave= {textLeave}>2025</p>
          <p onMouseEnter={textEnter} onMouseLeave= {textLeave} >2600 Baguio City <br/>- 40  Richwood Square </p>
      </div>

      <div className="info">
        <a onMouseEnter={textEnter} onMouseLeave= {textLeave} href="https://github.com/RethinkWhat"><br/>Visit my Github?</a>
      </div>

      <div className="scroll">
        <p><br/>Scroll -----------</p>
      </div>

    </div>
    <motion.div 
      className="cursor"
      variants={variants}
      animate={cursorVariant}
    />
    </main>
  );
}

export default Landing;
